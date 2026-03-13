require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.use(express.json({ limit: '10mb' }));
app.use(cors({
  origin: ["https://soft-nasturtium-971b16.netlify.app"]
}));

app.post('/api/analyze-image', async (req, res) => {
  const { image } = req.body;
  if (!image) return res.status(400).json({ message: 'Image data is required' });

  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`;
  const payload = {
    contents: [{
      parts: [
        { text: "Identify the food ingredients in this image. List them as a simple, comma-separated list. For example: 'chicken breast, broccoli, carrots'. Do not add any other text." },
        { inline_data: { mime_type: "image/jpeg", data: image } }
      ]
    }]
  };

  try {
    const response = await axios.post(geminiUrl, payload);
    const ingredients = response.data.candidates[0].content.parts[0].text;
    res.json({ ingredients: ingredients.trim() });
  } catch (error) {
    console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error analyzing image' });
  }
});

app.get('/api/recipes-by-ingredients', async (req, res) => {
  const { ingredients, diet, maxReadyTime } = req.query;
  if (!ingredients) return res.status(400).json({ message: 'Ingredients are required' });

  const params = new URLSearchParams({
    includeIngredients: ingredients,
    number: 20,
    addRecipeInformation: true,
    fillIngredients: true,
    apiKey: SPOONACULAR_API_KEY,
  });
  if (diet) params.append('diet', diet);
  if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`);
    res.json(response.data.results);
  } catch (error) {
    console.error("Spoonacular Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Error fetching recipes' });
  }
});

app.get('/api/recipe/:id', async (req, res) => {
  const recipeId = req.params.id;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
});

app.get('/api/ingredient/:id/substitutes', async (req, res) => {
  const ingredientId = req.params.id;
  try {
    const response = await axios.get(`https://api.spoonacular.com/food/ingredients/${ingredientId}/substitutes?apiKey=${SPOONACULAR_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching substitutes' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
