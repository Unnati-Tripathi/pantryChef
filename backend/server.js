

// require('dotenv').config(); // Load environment variables from .env file
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;
// const API_KEY = process.env.SPOONACULAR_API_KEY;

// if (!API_KEY) {
//   console.error("Fatal Error: SPOONACULAR_API_KEY is not defined in your .env file.");
//   process.exit(1); // Exit the process if the API key is missing
// }

// app.use(cors());

// // Endpoint to find recipes by multiple ingredients
// app.get('/api/recipes-by-ingredients', async (req, res) => {
//   const ingredients = req.query.ingredients; // e.g., "apples,flour,sugar"
//   if (!ingredients) {
//     return res.status(400).json({ message: 'Ingredients are required' });
//   }

//   const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=12&apiKey=${API_KEY}`;
  
//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching from Spoonacular:", error.message);
//     res.status(500).json({ message: 'Error fetching recipes' });
//   }
// });

// // Endpoint to get full details for a single recipe by its ID
// app.get('/api/recipe/:id', async (req, res) => {
//   const recipeId = req.params.id;
//   const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching recipe details:", error.message);
//     res.status(500).json({ message: 'Error fetching recipe details' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });



































// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // Firebase Imports
// import { initializeApp } from 'firebase/app';
// import { 
//     getAuth, 
//     createUserWithEmailAndPassword, 
//     signInWithEmailAndPassword, 
//     signOut, 
//     onAuthStateChanged 
// } from 'firebase/auth';
// import { 
//     getFirestore, 
//     doc, 
//     setDoc, 
//     getDoc, 
//     updateDoc, 
//     arrayUnion, 
//     arrayRemove 
// } from 'firebase/firestore';

// // --- PASTE YOUR FIREBASE CONFIG OBJECT HERE ---
// const firebaseConfig = {
//     apiKey: "AIza...",
//     authDomain: "pantrychef-app.firebaseapp.com",
//     projectId: "pantrychef-app",
//     storageBucket: "pantrychef-app.appspot.com",
//     messagingSenderId: "...",
//     appId: "..."
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);


// // --- Main App Component ---
// function App() {
//     const [page, setPage] = useState('home'); // home, recipe, favorites, login
//     const [selectedRecipeId, setSelectedRecipeId] = useState(null);
//     const [currentUser, setCurrentUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             setCurrentUser(user);
//         });
//         return () => unsubscribe();
//     }, []);

//     const navigateTo = (pageName, recipeId = null) => {
//         setPage(pageName);
//         setSelectedRecipeId(recipeId);
//     };

//     const renderPage = () => {
//         switch (page) {
//             case 'recipe':
//                 return <RecipeDetailPage recipeId={selectedRecipeId} navigateTo={navigateTo} currentUser={currentUser} />;
//             case 'favorites':
//                 return <FavoritesPage navigateTo={navigateTo} currentUser={currentUser} />;
//             case 'login':
//                 return <LoginPage navigateTo={navigateTo} />;
//             case 'home':
//             default:
//                 return <HomePage navigateTo={navigateTo} />;
//         }
//     };

//     return (
//         <div className="bg-gray-900 text-gray-200 min-h-screen">
//             <Navbar navigateTo={navigateTo} currentUser={currentUser} />
//             {renderPage()}
//         </div>
//     );
// }

// // --- Components ---

// function Navbar({ navigateTo, currentUser }) {
//     const handleSignOut = () => {
//         signOut(auth).then(() => navigateTo('home'));
//     };

//     return (
//         <nav className="bg-gray-800/50 backdrop-blur-sm p-4 flex justify-between items-center sticky top-0 z-50">
//             <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-white">PantryChef</button>
//             <div>
//                 {currentUser ? (
//                     <>
//                         <button onClick={() => navigateTo('favorites')} className="text-white mr-4">Favorites</button>
//                         <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded">Sign Out</button>
//                     </>
//                 ) : (
//                     <button onClick={() => navigateTo('login')} className="bg-green-500 text-white px-3 py-1 rounded">Login</button>
//                 )}
//             </div>
//         </nav>
//     );
// }

// function HomePage({ navigateTo }) {
//     const [query, setQuery] = useState('');
//     const [diet, setDiet] = useState('');
//     const [maxTime, setMaxTime] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [status, setStatus] = useState('idle');

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (!file) return;
//         setStatus('analyzing');
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onloadend = async () => {
//             const base64Image = reader.result.split(',')[1];
//             try {
//                 const res = await axios.post('http://localhost:3001/api/analyze-image', { image: base64Image });
//                 setQuery(res.data.ingredients);
//                 setStatus('idle');
//             } catch (error) {
//                 console.error("Image analysis failed", error);
//                 setStatus('error');
//             }
//         };
//     };

//     const handleSearch = async () => {
//         setStatus('loading');
//         try {
//             const res = await axios.get(`http://localhost:3001/api/recipes-by-ingredients`, {
//                 params: { ingredients: query, diet, maxReadyTime: maxTime }
//             });
//             setRecipes(res.data);
//             setStatus('success');
//         } catch (error) {
//             setStatus('error');
//         }
//     };
    
//     return (
//       <div className="w-full max-w-7xl mx-auto px-4">
//         {/* Header and Search */}
//         <header className="text-center py-12">
//             <h1 className="text-5xl font-bold">PantryChef</h1>
//             <p className="text-gray-400 mt-2">Your smart recipe assistant</p>

//             <div className="mt-8 max-w-3xl mx-auto">
//                 <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-2">
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         placeholder="Enter ingredients or upload a photo"
//                         className="w-full bg-transparent p-2 focus:outline-none"
//                     />
//                     <label htmlFor="image-upload" className="cursor-pointer text-gray-400 hover:text-white p-2">
//                         📷
//                         <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
//                     </label>
//                 </div>
//                 {/* Filters */}
//                 <div className="flex gap-4 mt-4 justify-center">
//                     <select value={diet} onChange={e => setDiet(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2">
//                         <option value="">Any Diet</option>
//                         <option value="vegetarian">Vegetarian</option>
//                         <option value="vegan">Vegan</option>
//                         <option value="gluten free">Gluten-Free</option>
//                     </select>
//                     <input type="number" value={maxTime} onChange={e => setMaxTime(e.target.value)} placeholder="Max cooking time (min)" className="bg-gray-800 border border-gray-700 rounded p-2" />
//                     <button onClick={handleSearch} disabled={status === 'loading' || status === 'analyzing'} className="bg-green-600 px-6 py-2 rounded-lg">
//                         {status === 'loading' ? 'Searching...' : status === 'analyzing' ? 'Analyzing...' : 'Find Recipes'}
//                     </button>
//                 </div>
//             </div>
//         </header>

//         {/* Recipe Grid */}
//         <main className="pb-12">
//             {status === 'idle' && <p className="text-center text-gray-500">Find your next meal!</p>}
//             {status === 'success' && recipes.length === 0 && <p className="text-center">No recipes found. Try different ingredients or filters.</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {recipes.map(recipe => (
//                     <div key={recipe.id} onClick={() => navigateTo('recipe', recipe.id)} className="cursor-pointer group bg-gray-800 rounded-lg overflow-hidden">
//                         <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
//                         <div className="p-4">
//                             <h3 className="font-bold truncate">{recipe.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </main>
//       </div>
//     );
// }

// function RecipeDetailPage({ recipeId, navigateTo, currentUser }) {
//     const [details, setDetails] = useState(null);
//     const [servings, setServings] = useState(1);
//     const [isFavorite, setIsFavorite] = useState(false);

//     useEffect(() => {
//         const fetchDetails = async () => {
//             const res = await axios.get(`http://localhost:3001/api/recipe/${recipeId}`);
//             setDetails(res.data);
//             if (res.data && res.data.servings) {
//               setServings(res.data.servings);
//             }
//         };
//         if(recipeId) fetchDetails();

//         const checkFavorite = async () => {
//             if (!currentUser || !recipeId) return;
//             const userDocRef = doc(db, 'users', currentUser.uid);
//             const userDoc = await getDoc(userDocRef);
//             if (userDoc.exists() && userDoc.data().favorites.some(fav => fav.id === recipeId)) {
//                 setIsFavorite(true);
//             } else {
//                 setIsFavorite(false);
//             }
//         };
//         if (currentUser) checkFavorite();

//     }, [recipeId, currentUser]);
    
//     const handleFavorite = async () => {
//         if (!currentUser) {
//             navigateTo('login');
//             return;
//         }
//         const userDocRef = doc(db, 'users', currentUser.uid);
//         const recipeData = { id: details.id, title: details.title, image: details.image };
        
//         const userDoc = await getDoc(userDocRef);
//         if (userDoc.exists() && userDoc.data().favorites.some(fav => fav.id === details.id)) {
//             await updateDoc(userDocRef, { favorites: arrayRemove(recipeData) });
//             setIsFavorite(false);
//         } else {
//             await updateDoc(userDocRef, { favorites: arrayUnion(recipeData) });
//             setIsFavorite(true);
//         }
//     };


//     if (!details) return <p className="text-center mt-10">Loading...</p>;

//     return (
//         <div className="max-w-4xl mx-auto p-8">
//             <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
//             <img src={details.image} alt={details.title} className="w-full rounded-lg mb-4"/>
//             <button onClick={handleFavorite} className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-600'}`}>
//                 {isFavorite ? '❤️ Unfavorite' : '🤍 Favorite'}
//             </button>
//             {/* Nutrition and Servings */}
//             <div className="my-4">
//                 <h2 className="font-bold">Nutrition (per serving):</h2>
//                 {details.nutrition?.nutrients && (
//                     <>
//                         <p>Calories: {details.nutrition.nutrients.find(n => n.name === 'Calories')?.amount || 'N/A'} kcal</p>
//                         <p>Protein: {details.nutrition.nutrients.find(n => n.name === 'Protein')?.amount || 'N/A'} g</p>
//                     </>
//                 )}
//             </div>
//              {/* Ingredients, Instructions, etc. */}
//         </div>
//     );
// }

// function FavoritesPage({ navigateTo, currentUser }) {
//     const [favorites, setFavorites] = useState([]);
//     useEffect(() => {
//         const getFavorites = async () => {
//             if (!currentUser) return;
//             const userDocRef = doc(db, 'users', currentUser.uid);
//             const userDoc = await getDoc(userDocRef);
//             if (userDoc.exists()) {
//                 setFavorites(userDoc.data().favorites);
//             }
//         };
//         getFavorites();
//     }, [currentUser]);

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
//                 {favorites.map(fav => (
//                     <div key={fav.id} onClick={() => navigateTo('recipe', fav.id)} className="cursor-pointer group">
//                         <img src={fav.image} alt={fav.title} className="rounded-lg"/>
//                         <p className="mt-2">{fav.title}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function LoginPage({ navigateTo }) {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isSignUp, setIsSignUp] = useState(false);
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (isSignUp) {
//                 const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//                 // Create a document for the new user in Firestore
//                 await setDoc(doc(db, "users", userCredential.user.uid), { favorites: [] });
//             } else {
//                 await signInWithEmailAndPassword(auth, email, password);
//             }
//             navigateTo('home');
//         } catch (error) {
//             alert(error.message);
//         }
//     };

//     return (
//         <div className="max-w-sm mx-auto mt-20">
//             <h1 className="text-2xl font-bold text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h1>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 bg-gray-800 rounded"/>
//                 <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 bg-gray-800 rounded"/>
//                 <button type="submit" className="p-2 bg-green-600 rounded">{isSignUp ? 'Sign Up' : 'Login'}</button>
//             </form>
//             <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-center w-full">
//                 {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//             </button>
//         </div>
//     );
// }

// export default App;



// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;
// const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// // Use express.json() middleware with a higher limit for image data
// app.use(express.json({ limit: '10mb' }));
// app.use(cors());

// // --- NEW ENDPOINT: Analyze an image with Gemini ---
// app.post('/api/analyze-image', async (req, res) => {
//   const { image } = req.body; // Expects a base64 encoded image string

//   if (!image) {
//     return res.status(400).json({ message: 'Image data is required' });
//   }

//   const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`;
  
//   const payload = {
//     contents: [{
//       parts: [
//         { text: "Identify the food ingredients in this image. List them as a simple, comma-separated list. For example: 'chicken breast, broccoli, carrots'. Do not add any other text." },
//         { inline_data: { mime_type: "image/jpeg", data: image } }
//       ]
//     }]
//   };

//   try {
//     const response = await axios.post(geminiUrl, payload);
//     const ingredients = response.data.candidates[0].content.parts[0].text;
//     res.json({ ingredients: ingredients.trim() });
//   } catch (error) {
//     console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
//     res.status(500).json({ message: 'Error analyzing image' });
//   }
// });


// // --- UPDATED ENDPOINT: Search recipes with advanced filters ---
// app.get('/api/recipes-by-ingredients', async (req, res) => {
//   const { ingredients, diet, maxReadyTime } = req.query;

//   if (!ingredients) {
//     return res.status(400).json({ message: 'Ingredients are required' });
//   }

//   let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=20&ranking=1&apiKey=${SPOONACULAR_API_KEY}`;
  
//   // Add optional filters to the URL
//   if (diet) url += `&diet=${diet}`;
//   if (maxReadyTime) url += `&maxReadyTime=${maxReadyTime}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching recipes' });
//   }
// });

// // --- UPDATED ENDPOINT: Get recipe details with nutrition ---
// app.get('/api/recipe/:id', async (req, res) => {
//   const recipeId = req.params.id;
//   const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching recipe details' });
//   }
// });

// // --- NEW ENDPOINT: Get ingredient substitutions ---
// app.get('/api/ingredient/:id/substitutes', async (req, res) => {
//     const ingredientId = req.params.id;
//     const url = `https://api.spoonacular.com/food/ingredients/${ingredientId}/substitutes?apiKey=${SPOONACULAR_API_KEY}`;

//     try {
//         const response = await axios.get(url);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching substitutes' });
//     }
// });


// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });








// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;
// const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// app.use(express.json({ limit: '10mb' }));
// app.use(cors());

// app.post('/api/analyze-image', async (req, res) => {
//   const { image } = req.body;
//   if (!image) {
//     return res.status(400).json({ message: 'Image data is required' });
//   }
//   const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`;
//   const payload = {
//     contents: [{
//       parts: [
//         { text: "Identify the food ingredients in this image. List them as a simple, comma-separated list. For example: 'chicken breast, broccoli, carrots'. Do not add any other text." },
//         { inline_data: { mime_type: "image/jpeg", data: image } }
//       ]
//     }]
//   };
//   try {
//     const response = await axios.post(geminiUrl, payload);
//     const ingredients = response.data.candidates[0].content.parts[0].text;
//     res.json({ ingredients: ingredients.trim() });
//   } catch (error) {
//     console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
//     res.status(500).json({ message: 'Error analyzing image' });
//   }
// });

// // --- FIXED ENDPOINT: Search recipes with advanced filters ---
// app.get('/api/recipes-by-ingredients', async (req, res) => {
//   const { ingredients, diet, maxReadyTime } = req.query;
//   if (!ingredients) {
//     return res.status(400).json({ message: 'Ingredients are required' });
//   }

//   // Use URLSearchParams for a more reliable way to build the query string
//   const params = new URLSearchParams({
//     ingredients,
//     number: 20,
//     ranking: 1, // Prioritize recipes that use more of the provided ingredients
//     apiKey: SPOONACULAR_API_KEY,
//   });

//   // Only add diet and maxReadyTime if they have a value
//   if (diet) {
//     params.append('diet', diet);
//   }
//   if (maxReadyTime) {
//     params.append('maxReadyTime', maxReadyTime);
//   }

//   const url = `https://api.spoonacular.com/recipes/findByIngredients?${params.toString()}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error("Spoonacular Error:", error.response ? error.response.data : error.message);
//     res.status(500).json({ message: 'Error fetching recipes' });
//   }
// });

// app.get('/api/recipe/:id', async (req, res) => {
//   const recipeId = req.params.id;
//   const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`;
//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching recipe details' });
//   }
// });

// app.get('/api/ingredient/:id/substitutes', async (req, res) => {
//     const ingredientId = req.params.id;
//     const url = `https://api.spoonacular.com/food/ingredients/${ingredientId}/substitutes?apiKey=${SPOONACULAR_API_KEY}`;
//     try {
//         const response = await axios.get(url);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching substitutes' });
//     }
// });

// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });



// require('dotenv').config();
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// // const PORT = 3001;

// const PORT = process.env.PORT || 3001;
// const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// app.use(express.json({ limit: '10mb' }));
// app.use(cors());

// app.post('/api/analyze-image', async (req, res) => {
//   const { image } = req.body;
//   if (!image) {
//     return res.status(400).json({ message: 'Image data is required' });
//   }
//   const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${GEMINI_API_KEY}`;
//   const payload = {
//     contents: [{
//       parts: [
//         { text: "Identify the food ingredients in this image. List them as a simple, comma-separated list. For example: 'chicken breast, broccoli, carrots'. Do not add any other text." },
//         { inline_data: { mime_type: "image/jpeg", data: image } }
//       ]
//     }]
//   };
//   try {
//     const response = await axios.post(geminiUrl, payload);
//     const ingredients = response.data.candidates[0].content.parts[0].text;
//     res.json({ ingredients: ingredients.trim() });
//   } catch (error) {
//     console.error("Error calling Gemini API:", error.response ? error.response.data : error.message);
//     res.status(500).json({ message: 'Error analyzing image' });
//   }
// });

// // --- NEW AND IMPROVED STRICT FILTER ENDPOINT ---
// app.get('/api/recipes-by-ingredients', async (req, res) => {
//   const { ingredients, diet, maxReadyTime } = req.query;
//   if (!ingredients) {
//     return res.status(400).json({ message: 'Ingredients are required' });
//   }

//   // Switched to complexSearch for stricter filtering
//   const params = new URLSearchParams({
//     includeIngredients: ingredients,
//     number: 20,
//     addRecipeInformation: true, // Gets more info upfront
//     fillIngredients: true, // Adds info about used/missed ingredients
//     apiKey: SPOONACULAR_API_KEY,
//   });

//   if (diet) {
//     params.append('diet', diet);
//   }
//   if (maxReadyTime) {
//     params.append('maxReadyTime', maxReadyTime);
//   }

//   const url = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

//   try {
//     const response = await axios.get(url);
//     // The structure of complexSearch response is { results: [...] }
//     res.json(response.data.results);
//   } catch (error) {
//     console.error("Spoonacular Error:", error.response ? error.response.data : error.message);
//     res.status(500).json({ message: 'Error fetching recipes' });
//   }
// });


// app.get('/api/recipe/:id', async (req, res) => {
//   const recipeId = req.params.id;
//   const url = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`;
//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching recipe details' });
//   }
// });

// app.get('/api/ingredient/:id/substitutes', async (req, res) => {
//     const ingredientId = req.params.id;
//     const url = `https://api.spoonacular.com/food/ingredients/${ingredientId}/substitutes?apiKey=${SPOONACULAR_API_KEY}`;
//     try {
//         const response = await axios.get(url);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching substitutes' });
//     }
// });

// app.listen(PORT, () => {
//   console.log(`Backend server running on http://localhost:${PORT}`);
// });




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

// --- Analyze image using Gemini ---
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

// --- Fetch recipes by ingredients ---
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

// --- Fetch recipe details ---
app.get('/api/recipe/:id', async (req, res) => {
  const recipeId = req.params.id;
  try {
    const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe details' });
  }
});

// --- Fetch ingredient substitutes ---
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
