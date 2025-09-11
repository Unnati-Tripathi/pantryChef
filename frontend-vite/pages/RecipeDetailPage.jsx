import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'; // useParams to get ID from URL

function RecipeDetailPage() {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Get the recipe ID from the URL

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const endpoint = `http://localhost:3001/api/recipe/${id}`;
        const response = await axios.get(endpoint);
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch recipe details:", error);
      }
      setLoading(false);
    };

    fetchDetails();
  }, [id]); // Re-run this effect if the ID in the URL changes

  if (loading) return <div className="loading-message">Loading recipe...</div>;
  if (!recipeDetails) return <div className="loading-message">Recipe not found.</div>;
  
  // Clean up the HTML instructions from the API
  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <div className="detail-container">
      <Link to="/" className="back-button">← Back to Search</Link>
      <h1>{recipeDetails.title}</h1>
      <img src={recipeDetails.image} alt={recipeDetails.title} className="detail-image" />

      <div className="detail-summary">
        <p>Ready in: {recipeDetails.readyInMinutes} minutes</p>
        <p>Servings: {recipeDetails.servings}</p>
      </div>

      <div className="detail-content">
        <div className="ingredients-section">
          <h2>Ingredients</h2>
          <ul>
            {recipeDetails.extendedIngredients.map((ing) => (
              <li key={ing.id}>{ing.original}</li>
            ))}
          </ul>
        </div>
        <div className="instructions-section">
          <h2>Instructions</h2>
          <div dangerouslySetInnerHTML={createMarkup(recipeDetails.instructions)} />
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailPage;
