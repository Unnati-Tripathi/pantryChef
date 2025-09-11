

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// // --- NEW Animated Chef Illustration ---
// // function AnimatedChef() {
// //   return (
// //     <div className="relative w-full max-w-md mx-auto mt-2 text-center">
// //       <style>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-10px); }
// //         }
// //         @keyframes steam {
// //           0% { stroke-dashoffset: 10; opacity: 1; }
// //           80% { stroke-dashoffset: -20; opacity: 1; }
// //           100% { stroke-dashoffset: -20; opacity: 0; }
// //         }
// //         .chef-body { animation: float 6s ease-in-out infinite; }
// //         .steam-1 { animation: steam 4s ease-out infinite; animation-delay: 0s; }
// //         .steam-2 { animation: steam 4s ease-out infinite; animation-delay: 1s; }
// //       `}</style>
// //       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
// //         <g className="chef-body">
// //           {/* Chef Hat */}
// //           <path d="M 80 50 C 70 30, 130 30, 120 50 A 20 20 0 0 1 80 50" fill="white" />
// //           <rect x="80" y="50" width="40" height="10" fill="white" />
// //           {/* Head */}
// //           <circle cx="100" cy="80" r="25" fill="#FDE8D8" />
// //           {/* Eyes */}
// //           <circle cx="92" cy="78" r="2" fill="black" />
// //           <circle cx="108" cy="78" r="2" fill="black" />
// //           {/* Smile */}
// //           <path d="M 95 90 Q 100 95 105 90" stroke="black" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
// //           {/* Body */}
// //           <path d="M 70 105 L 70 150 H 130 L 130 105 Z" fill="white" />
// //           {/* Red Scarf */}
// //           <path d="M 90 105 L 110 105 L 105 115 L 95 115 Z" fill="#E53E3E" />
// //           {/* Pot */}
// //           <path d="M 50 140 A 20 20 0 0 0 150 140 L 150 160 H 50 Z" fill="#718096" />
// //         </g>
// //         {/* Steam Animation */}
// //         <path className="steam-1" d="M 80 135 Q 85 120 90 135" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="10" />
// //         <path className="steam-2" d="M 110 135 Q 115 120 120 135" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="10" />
// //       </svg>
// //       <div className="mt-[-20px]">
// //         <h2 className="text-2xl font-bold text-gray-300">What should we cook tonight?</h2>
// //         <p className="text-gray-500">I'm ready to find the perfect recipe for you!</p>
// //       </div>
// //     </div>
// //   );
// // }


// function AnimatedChef() {
//   return (
//     <div className="relative w-full max-w-lg mx-auto mt-2 text-center">
//       <style>{`
//         @keyframes steam-float {
//           0% { transform: translateY(0) translateX(0); opacity: 1; }
//           100% { transform: translateY(-20px) translateX(5px); opacity: 0; }
//         }
//         .steam-plume-1 { animation: steam-float 3s ease-out infinite; animation-delay: 0s; }
//         .steam-plume-2 { animation: steam-float 3s ease-out infinite; animation-delay: 1.5s; }
//       `}</style>
//       <svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
//         {/* Background Wall */}
//         <rect width="300" height="180" fill="#2D3748" />

//         {/* Kitchen Counter */}
//         <path d="M0 120 H300 V180 H0 Z" fill="#4A5568" />
//         <rect y="120" width="300" height="8" fill="#2D3748" opacity="0.5" />

//         {/* Cooking Pot */}
//         <rect x="200" y="90" width="80" height="40" rx="5" fill="#718096" />
//         <rect x="195" y="100" width="90" height="8" rx="4" fill="#A0AEC0" />
//         <rect x="210" y="85" width="60" height="5" rx="2" fill="#4A5568" />
        
//         {/* Steam */}
//         <path d="M220 80 Q 225 70 230 80 T 240 80" stroke="#E2E8F0" strokeWidth="2" fill="none" className="steam-plume-1" strokeLinecap="round"/>
//         <path d="M250 80 Q 255 70 260 80 T 270 80" stroke="#E2E8F0" strokeWidth="2" fill="none" className="steam-plume-2" strokeLinecap="round"/>

//         {/* Cutting Board & Ingredients */}
//         <rect x="20" y="100" width="150" height="60" rx="8" fill="#A16207"/>

//         {/* Tomato */}
//         <circle cx="50" cy="130" r="12" fill="#E53E3E"/>
//         <path d="M50 118 L 48 114 L 52 114 Z" fill="#48BB78"/>
        
//         {/* Onion */}
//         <path d="M80 120 C 70 145, 110 145, 100 120 Z" fill="#D69E2E" />
//         <path d="M90 120 L 92 110" stroke="#68D391" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        
//         {/* Knife */}
//         <path d="M110 115 L160 110 L160 120 L110 125 Z" fill="#718096" />
//         <rect x="158" y="110" width="10" height="10" fill="#4A5568" />

//         {/* Text Area below SVG */}
//       </svg>
//        <div className="mt-4">
//         <h2 className="text-2xl font-bold text-gray-300">Ready to get creative?</h2>
//         <p className="text-gray-500">Tell me your ingredients and I'll find your next meal!</p>
//       </div>
//     </div>
//   );
// }


// // --- HomePage Component ---
// function HomePage() {
//   const [query, setQuery] = useState('');
//   const [recipeList, setRecipeList] = useState([]);
//   const [searchStatus, setSearchStatus] = useState('idle');

//   const handleSearch = async () => {
//     if (!query.trim()) {
//       alert("Please enter ingredients separated by commas.");
//       return;
//     }
//     setSearchStatus('loading');
//     setRecipeList([]);

//     try {
//       const endpoint = `http://localhost:3001/api/recipes-by-ingredients?ingredients=${query}`;
//       const response = await axios.get(endpoint);
//       setRecipeList(response.data);
//       setSearchStatus('success');
//     } catch (err) {
//       console.error("Failed to fetch recipes:", err);
//       setSearchStatus('error');
//     }
//   };

//   const renderStatusMessage = () => {
//     const messageClasses = "text-center text-gray-400 mt-10 text-xl";
//     if (searchStatus === 'loading') return <p className={messageClasses}>Finding yummy recipes...</p>;
//     if (searchStatus === 'error') return <p className={messageClasses}>Oops! Something went wrong.</p>;
//     if (searchStatus === 'success' && recipeList.length === 0) {
//       return <p className={messageClasses}>No recipes found. Try different ingredients!</p>;
//     }
//     return null;
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4">
//       <header className="text-center py-12">
//         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
//           PantryChef 🍳
//         </h1>
//         <p className="text-gray-400 mt-4">Enter ingredients you have, separated by commas.</p>
//         <div className="mt-8 max-w-2xl mx-auto flex gap-2">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="e.g., chicken, rice, broccoli"
//             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//             className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
//           />
//           <button 
//             onClick={handleSearch} 
//             disabled={searchStatus === 'loading'}
//             className="bg-green-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
//           >
//             {searchStatus === 'loading' ? '...' : 'Find'}
//           </button>
//         </div>
//       </header>

//       <main className="pb-12">
//         {searchStatus === 'idle' ? (
//           <div className="animate-fade-in">
//             <AnimatedChef />
//           </div>
//         ) : (
//           <>
//             {renderStatusMessage()}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {recipeList.map((recipe) => (
//                 <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/40 transition-shadow duration-300">
//                   <div className="overflow-hidden">
//                     <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-bold text-lg text-gray-100 mb-2 truncate">{recipe.title}</h3>
//                     <p className="text-sm text-gray-400">Uses {recipe.usedIngredientCount} of your ingredients</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

// // --- RecipeDetailPage Component ---
// function RecipeDetailPage() {
//   const [recipeDetails, setRecipeDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       setLoading(true);
//       try {
//         const endpoint = `http://localhost:3001/api/recipe/${id}`;
//         const response = await axios.get(endpoint);
//         setRecipeDetails(response.data);
//       } catch (error) {
//         console.error("Failed to fetch recipe details:", error);
//       }
//       setLoading(false);
//     };
//     fetchDetails();
//   }, [id]);

//   if (loading) return <div className="text-center text-gray-400 mt-20 text-xl">Loading recipe...</div>;
//   if (!recipeDetails) return <div className="text-center text-gray-400 mt-20 text-xl">Recipe not found.</div>;
  
//   const createMarkup = (htmlString) => ({ __html: htmlString });

//   return (
//     <div className="max-w-4xl mx-auto p-4 sm:p-8">
//       <Link to="/" className="text-green-400 hover:text-green-300 mb-8 inline-block">&larr; Back to Search</Link>
//       <h1 className="text-4xl font-extrabold text-white mb-4">{recipeDetails.title}</h1>
//       <img src={recipeDetails.image} alt={recipeDetails.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-6" />

//       <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8 bg-gray-800 p-4 rounded-lg">
//         <p><span className="font-bold">Ready in:</span> {recipeDetails.readyInMinutes} minutes</p>
//         <p><span className="font-bold">Servings:</span> {recipeDetails.servings}</p>
//         {recipeDetails.diets?.length > 0 && <p><span className="font-bold">Diets:</span> {recipeDetails.diets.join(', ')}</p>}
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-1">
//           <h2 className="text-2xl font-bold text-white mb-4">Ingredients</h2>
//           <ul className="space-y-2">
//             {recipeDetails.extendedIngredients.map((ing) => (
//               <li key={ing.id} className="bg-gray-800 p-3 rounded">{ing.original}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="md:col-span-2">
//           <h2 className="text-2xl font-bold text-white mb-4">Instructions</h2>
//           <div 
//             className="prose prose-invert max-w-none prose-li:my-2 prose-p:my-4" 
//             dangerouslySetInnerHTML={createMarkup(recipeDetails.instructions)} 
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // --- Main App Component with Router ---
// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-900 text-gray-200 min-h-screen">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/recipe/:id" element={<RecipeDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


























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
//         if (!query.trim()) {
//             alert("Please enter ingredients or upload a photo.");
//             return;
//         }
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
//                 <div className="flex flex-wrap gap-4 mt-4 justify-center">
//                     <select value={diet} onChange={e => setDiet(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2">
//                         <option value="">Any Diet</option>
//                         <option value="vegetarian">Vegetarian</option>
//                         <option value="vegan">Vegan</option>
//                         <option value="gluten free">Gluten-Free</option>
//                     </select>
//                     <input type="number" value={maxTime} onChange={e => setMaxTime(e.target.value)} placeholder="Max cooking time (min)" className="bg-gray-800 border border-gray-700 rounded p-2" />
//                     <button onClick={handleSearch} disabled={status === 'loading' || status === 'analyzing'} className="bg-green-600 px-6 py-2 rounded-lg disabled:bg-gray-500">
//                         {status === 'loading' ? 'Searching...' : status === 'analyzing' ? 'Analyzing...' : 'Find Recipes'}
//                     </button>
//                 </div>
//             </div>
//         </header>

//         {/* Recipe Grid */}
//         <main className="pb-12">
//             {status === 'idle' && <p className="text-center text-gray-500">Find your next meal!</p>}
//             {status === 'success' && recipes.length === 0 && <p className="text-center">No recipes found. Try different ingredients or filters.</p>}
//              {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please check your API keys and try again.</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {recipes.map(recipe => (
//                     <div key={recipe.id} onClick={() => navigateTo('recipe', recipe.id)} className="cursor-pointer group bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
//                         <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
//                         <div className="p-4">
//                             <h3 className="font-bold truncate">{recipe.title}</h3>
//                             <p className="text-sm text-gray-400">Missing: {recipe.missedIngredientCount} ingredients</p>
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
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [substitutes, setSubstitutes] = useState({});

//     useEffect(() => {
//         const fetchDetails = async () => {
//             if(!recipeId) return;
//             try {
//                 const res = await axios.get(`http://localhost:3001/api/recipe/${recipeId}`);
//                 setDetails(res.data);
//             } catch (error) {
//                 console.error("Failed to fetch recipe details", error);
//             }
//         };
//         fetchDetails();
//     }, [recipeId]);

//      useEffect(() => {
//         const checkFavorite = async () => {
//             if (!currentUser || !recipeId) return;
//             const userDocRef = doc(db, 'users', currentUser.uid);
//             const userDoc = await getDoc(userDocRef);
//             if (userDoc.exists() && userDoc.data().favorites.some(fav => fav.id === recipeId)) {
//                 setIsFavorite(true);
//             } else {
//                  setIsFavorite(false);
//             }
//         };
//         checkFavorite();
//     }, [currentUser, recipeId]);

//     const handleFavorite = async () => {
//         if (!currentUser) {
//             alert("Please login to save favorites.");
//             navigateTo('login');
//             return;
//         }
//         const userDocRef = doc(db, 'users', currentUser.uid);
//         const recipeSummary = { id: details.id, title: details.title, image: details.image };

//         if (isFavorite) {
//             await updateDoc(userDocRef, { favorites: arrayRemove(recipeSummary) });
//         } else {
//             await updateDoc(userDocRef, { favorites: arrayUnion(recipeSummary) });
//         }
//         setIsFavorite(!isFavorite);
//     };

//     const fetchSubstitutes = async (ingredientId) => {
//         try {
//             const res = await axios.get(`http://localhost:3001/api/ingredient/${ingredientId}/substitutes`);
//             setSubstitutes(prev => ({...prev, [ingredientId]: res.data.substitutes || ['No substitutes found']}));
//         } catch (error) {
//             console.error("Failed to fetch substitutes", error);
//              setSubstitutes(prev => ({...prev, [ingredientId]: ['Could not fetch']}));
//         }
//     };

//     if (!details) return <p className="text-center mt-10">Loading...</p>;
    
//     const createMarkup = (htmlString) => ({ __html: htmlString });

//     return (
//         <div className="max-w-4xl mx-auto p-8">
//             <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
//             <img src={details.image} alt={details.title} className="w-full rounded-lg mb-4"/>
//             <button onClick={handleFavorite} className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-600'}`}>
//                 {isFavorite ? '❤️ Unfavorite' : '🤍 Favorite'}
//             </button>
            
//             <div className="my-4 p-4 bg-gray-800 rounded-lg">
//                 <h2 className="font-bold text-xl mb-2">Details</h2>
//                  <p>Cooking Time: {details.readyInMinutes} minutes</p>
//                  <p>Servings: {details.servings}</p>
//                  <p>Diets: {details.diets.join(', ') || 'None specified'}</p>
//             </div>
            
//             <div className="my-4 p-4 bg-gray-800 rounded-lg">
//                 <h2 className="font-bold text-xl mb-2">Nutrition (per serving)</h2>
//                 {details.nutrition?.nutrients && (
//                     <>
//                         <p>Calories: {details.nutrition.nutrients.find(n => n.name === 'Calories')?.amount || 'N/A'} kcal</p>
//                         <p>Protein: {details.nutrition.nutrients.find(n => n.name === 'Protein')?.amount || 'N/A'} g</p>
//                     </>
//                 )}
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                     <h2 className="font-bold text-xl mb-2">Ingredients</h2>
//                     <ul>
//                         {details.extendedIngredients.map(ing => (
//                             <li key={ing.id} className="mb-2">
//                                 {ing.original}
//                                 <button onClick={() => fetchSubstitutes(ing.id)} className="text-xs text-blue-400 ml-2">(substitutes)</button>
//                                 {substitutes[ing.id] && <p className="text-xs text-gray-400 pl-2">→ {substitutes[ing.id].join(', ')}</p>}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                      <h2 className="font-bold text-xl mb-2">Instructions</h2>
//                      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={createMarkup(details.instructions)} />
//                 </div>
//             </div>
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
//                 setFavorites(userDoc.data().favorites || []);
//             }
//         };
//         getFavorites();
//     }, [currentUser]);

//     if (!currentUser) return <p className="text-center mt-10">Please login to see your favorites.</p>

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
//              {favorites.length === 0 && <p>You haven't saved any favorites yet.</p>}
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
//             <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-center w-full text-blue-400">
//                 {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//             </button>
//         </div>
//     );
// }

// export default App;





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
//     const [loadingAuth, setLoadingAuth] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, user => {
//             setCurrentUser(user);
//             setLoadingAuth(false);
//         });
//         return () => unsubscribe();
//     }, []);

//     const navigateTo = (pageName, recipeId = null) => {
//         setPage(pageName);
//         setSelectedRecipeId(recipeId);
//     };

//     if (loadingAuth) {
//         return <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">Loading App...</div>
//     }

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
//         signOut(auth).then(() => navigateTo('home')).catch(err => alert(err.message));
//     };

//     return (
//         <nav className="bg-gray-800/50 backdrop-blur-sm p-4 flex justify-between items-center sticky top-0 z-50">
//             <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-white">PantryChef</button>
//             <div>
//                 {currentUser ? (
//                     <>
//                         <button onClick={() => navigateTo('favorites')} className="text-white mr-4 hover:text-green-400">Favorites</button>
//                         <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Sign Out</button>
//                     </>
//                 ) : (
//                     <button onClick={() => navigateTo('login')} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Login</button>
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
//                 alert("Image analysis failed. Please check the console for details.");
//                 setStatus('error');
//             }
//         };
//     };

//     const handleSearch = async () => {
//         if (!query.trim()) {
//             alert("Please enter ingredients or upload a photo.");
//             return;
//         }
//         setStatus('loading');
//         try {
//             const res = await axios.get(`http://localhost:3001/api/recipes-by-ingredients`, {
//                 params: { ingredients: query, diet, maxReadyTime: maxTime }
//             });
//             setRecipes(res.data);
//             setStatus('success');
//         } catch (error) {
//              alert("Failed to fetch recipes. Please check your API keys and server status.");
//             setStatus('error');
//         }
//     };

//     return (
//       <div className="w-full max-w-7xl mx-auto px-4">
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
//                 <div className="flex flex-wrap gap-4 mt-4 justify-center">
//                     <select value={diet} onChange={e => setDiet(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2">
//                         <option value="">Any Diet</option>
//                         <option value="vegetarian">Vegetarian</option>
//                         <option value="vegan">Vegan</option>
//                         <option value="gluten free">Gluten-Free</option>
//                     </select>
//                     <input type="number" value={maxTime} onChange={e => setMaxTime(e.target.value)} placeholder="Max cooking time (min)" className="bg-gray-800 border border-gray-700 rounded p-2" />
//                     <button onClick={handleSearch} disabled={status === 'loading' || status === 'analyzing'} className="bg-green-600 px-6 py-2 rounded-lg disabled:bg-gray-500">
//                         {status === 'loading' ? 'Searching...' : status === 'analyzing' ? 'Analyzing...' : 'Find Recipes'}
//                     </button>
//                 </div>
//             </div>
//         </header>
//         <main className="pb-12">
//             {status === 'idle' && <p className="text-center text-gray-500">Find your next meal!</p>}
//             {status === 'success' && recipes.length === 0 && <p className="text-center">No recipes found. Try different ingredients or filters.</p>}
//             {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {recipes.map(recipe => (
//                     <div key={recipe.id} onClick={() => navigateTo('recipe', recipe.id)} className="cursor-pointer group bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
//                         <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
//                         <div className="p-4">
//                             <h3 className="font-bold truncate">{recipe.title}</h3>
//                             <p className="text-sm text-gray-400">Missing: {recipe.missedIngredientCount} ingredients</p>
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
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [substitutes, setSubstitutes] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchDetailsAndCheckFavorite = async () => {
//             if(!recipeId) return;
//             setLoading(true);
//             try {
//                 // Fetch recipe details
//                 const res = await axios.get(`http://localhost:3001/api/recipe/${recipeId}`);
//                 setDetails(res.data);

//                 // Check favorite status after details are fetched
//                 if (currentUser) {
//                     const userDocRef = doc(db, 'users', currentUser.uid);
//                     const userDoc = await getDoc(userDocRef);
//                     if (userDoc.exists() && userDoc.data().favorites?.some(fav => fav.id === parseInt(recipeId))) {
//                         setIsFavorite(true);
//                     } else {
//                         setIsFavorite(false);
//                     }
//                 }
//             } catch (error) {
//                 console.error("Failed to fetch recipe details", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchDetailsAndCheckFavorite();
//     }, [recipeId, currentUser]);


//     const handleFavorite = async () => {
//         if (!currentUser) {
//             alert("Please login to save favorites.");
//             navigateTo('login');
//             return;
//         }
//         const userDocRef = doc(db, 'users', currentUser.uid);
//         const recipeSummary = { id: details.id, title: details.title, image: details.image };

//         try {
//             if (isFavorite) {
//                 await updateDoc(userDocRef, { favorites: arrayRemove(recipeSummary) });
//                 setIsFavorite(false);
//             } else {
//                 await updateDoc(userDocRef, { favorites: arrayUnion(recipeSummary) });
//                 setIsFavorite(true);
//             }
//         } catch (error) {
//             alert("Failed to update favorites. Please try again.");
//             console.error("Firestore error:", error);
//         }
//     };

//     const fetchSubstitutes = async (ingredientId) => {
//         try {
//             const res = await axios.get(`http://localhost:3001/api/ingredient/${ingredientId}/substitutes`);
//             setSubstitutes(prev => ({...prev, [ingredientId]: res.data.substitutes || ['No substitutes found']}));
//         } catch (error) {
//             console.error("Failed to fetch substitutes", error);
//             setSubstitutes(prev => ({...prev, [ingredientId]: ['Could not fetch']}));
//         }
//     };

//     if (loading) return <p className="text-center mt-10">Loading Recipe Details...</p>;
//     if (!details) return <p className="text-center mt-10">Could not load recipe details.</p>;
    
//     const createMarkup = (htmlString) => ({ __html: htmlString });

//     return (
//         <div className="max-w-4xl mx-auto p-8">
//             <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
//             <img src={details.image} alt={details.title} className="w-full rounded-lg mb-4"/>
//             <button onClick={handleFavorite} className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-600'}`}>
//                 {isFavorite ? '❤️ Unfavorite' : '🤍 Favorite'}
//             </button>
//             <div className="my-4 p-4 bg-gray-800 rounded-lg">
//                 <h2 className="font-bold text-xl mb-2">Details</h2>
//                 <p>Cooking Time: {details.readyInMinutes} minutes</p>
//                 <p>Servings: {details.servings}</p>
//                 <p>Diets: {details.diets?.join(', ') || 'None specified'}</p>
//             </div>
//             <div className="my-4 p-4 bg-gray-800 rounded-lg">
//                 <h2 className="font-bold text-xl mb-2">Nutrition (per serving)</h2>
//                 {details.nutrition?.nutrients ? (
//                     <>
//                         <p>Calories: {details.nutrition.nutrients.find(n => n.name === 'Calories')?.amount || 'N/A'} kcal</p>
//                         <p>Protein: {details.nutrition.nutrients.find(n => n.name === 'Protein')?.amount || 'N/A'} g</p>
//                     </>
//                 ) : <p>Nutrition information not available.</p>}
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                     <h2 className="font-bold text-xl mb-2">Ingredients</h2>
//                     <ul>
//                         {details.extendedIngredients?.map(ing => (
//                             <li key={ing.id} className="mb-2">
//                                 {ing.original}
//                                 <button onClick={() => fetchSubstitutes(ing.id)} className="text-xs text-blue-400 ml-2">(substitutes)</button>
//                                 {substitutes[ing.id] && <p className="text-xs text-gray-400 pl-2">→ {substitutes[ing.id].join(', ')}</p>}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="p-4 bg-gray-800 rounded-lg">
//                     <h2 className="font-bold text-xl mb-2">Instructions</h2>
//                     {details.instructions ? (
//                         <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={createMarkup(details.instructions)} />
//                     ) : <p>No instructions provided.</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function FavoritesPage({ navigateTo, currentUser }) {
//     const [favorites, setFavorites] = useState([]);
//     useEffect(() => {
//         if (!currentUser) return;
//         const getFavorites = async () => {
//             const userDocRef = doc(db, 'users', currentUser.uid);
//             try {
//                 const userDoc = await getDoc(userDocRef);
//                 if (userDoc.exists()) {
//                     setFavorites(userDoc.data().favorites || []);
//                 }
//             } catch (error) {
//                 console.error("Could not fetch favorites:", error);
//             }
//         };
//         getFavorites();
//     }, [currentUser]);

//     if (!currentUser) return <p className="text-center mt-10">Please login to see your favorites.</p>

//     return (
//         <div className="max-w-7xl mx-auto p-4">
//             <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
//             {favorites.length === 0 && <p>You haven't saved any favorites yet.</p>}
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
//             <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-center w-full text-blue-400">
//                 {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//             </button>
//         </div>
//     );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Firebase Imports
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    updateDoc,
    arrayUnion,
    arrayRemove
} from 'firebase/firestore';

// --- PASTE YOUR FIREBASE CONFIG OBJECT HERE ---
const firebaseConfig = {
    apiKey: "AIza...",
    authDomain: "pantrychef-app.firebaseapp.com",
    projectId: "pantrychef-app",
    storageBucket: "pantrychef-app.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// --- Main App Component ---
function App() {
    const [page, setPage] = useState('home'); // home, recipe, favorites, login
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoadingAuth(false);
        });
        return () => unsubscribe();
    }, []);

    const navigateTo = (pageName, recipeId = null) => {
        setPage(pageName);
        setSelectedRecipeId(recipeId);
    };

    if (loadingAuth) {
        return <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">Loading App...</div>
    }

    const renderPage = () => {
        switch (page) {
            case 'recipe':
                return <RecipeDetailPage recipeId={selectedRecipeId} navigateTo={navigateTo} currentUser={currentUser} />;
            case 'favorites':
                return <FavoritesPage navigateTo={navigateTo} currentUser={currentUser} />;
            case 'login':
                return <LoginPage navigateTo={navigateTo} />;
            case 'home':
            default:
                return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-gray-900 text-gray-200 min-h-screen">
            <Navbar navigateTo={navigateTo} currentUser={currentUser} />
            {renderPage()}
        </div>
    );
}

// --- Components ---

function Navbar({ navigateTo, currentUser }) {
    const handleSignOut = () => {
        signOut(auth).then(() => navigateTo('home')).catch(err => alert(err.message));
    };

    return (
        <nav className="bg-gray-800/50 backdrop-blur-sm p-4 flex justify-between items-center sticky top-0 z-50">
            <button onClick={() => navigateTo('home')} className="text-2xl font-bold text-white">PantryChef</button>
            <div>
                {currentUser ? (
                    <>
                        <button onClick={() => navigateTo('favorites')} className="text-white mr-4 hover:text-green-400">Favorites</button>
                        <button onClick={handleSignOut} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Sign Out</button>
                    </>
                ) : (
                    <button onClick={() => navigateTo('login')} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Login</button>
                )}
            </div>
        </nav>
    );
}

function HomePage({ navigateTo }) {
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState('');
    const [maxTime, setMaxTime] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [status, setStatus] = useState('idle');

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setStatus('analyzing');
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async () => {
            const base64Image = reader.result.split(',')[1];
            try {
                const res = await axios.post('https://pantrychef-bfh4.onrender.com/api/analyze-image', { image: base64Image });
                setQuery(res.data.ingredients);
                setStatus('idle');
            } catch (error) {
                console.error("Image analysis failed", error);
                alert("Image analysis failed. Please check the console for details.");
                setStatus('error');
            }
        };
    };

    const handleSearch = async () => {
        if (!query.trim()) {
            alert("Please enter ingredients or upload a photo.");
            return;
        }
        setStatus('loading');
        try {
            const res = await axios.get(`https://pantrychef-bfh4.onrender.com/api/recipes-by-ingredients`, {
                params: { ingredients: query, diet, maxReadyTime: maxTime }
            });
            setRecipes(res.data);
            setStatus('success');
        } catch (error) {
             alert("Failed to fetch recipes. Please check your API keys and server status.");
            setStatus('error');
        }
    };

    return (
      <div className="w-full max-w-7xl mx-auto px-4">
        <header className="text-center py-12">
            <h1 className="text-5xl font-bold">PantryChef</h1>
            <p className="text-gray-400 mt-2">Your smart recipe assistant</p>
            <div className="mt-8 max-w-3xl mx-auto">
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter ingredients or upload a photo"
                        className="w-full bg-transparent p-2 focus:outline-none"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer text-gray-400 hover:text-white p-2">
                        📷
                        <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 justify-center">
                    <select value={diet} onChange={e => setDiet(e.target.value)} className="bg-gray-800 border border-gray-700 rounded p-2">
                        <option value="">Any Diet</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten free">Gluten-Free</option>
                    </select>
                    <input type="number" value={maxTime} onChange={e => setMaxTime(e.target.value)} placeholder="Max cooking time (min)" className="bg-gray-800 border border-gray-700 rounded p-2" />
                    <button onClick={handleSearch} disabled={status === 'loading' || status === 'analyzing'} className="bg-green-600 px-6 py-2 rounded-lg disabled:bg-gray-500">
                        {status === 'loading' ? 'Searching...' : status === 'analyzing' ? 'Analyzing...' : 'Find Recipes'}
                    </button>
                </div>
            </div>
        </header>
        <main className="pb-12">
            {status === 'idle' && <p className="text-center text-gray-500">Find your next meal!</p>}
            {status === 'success' && recipes.length === 0 && <p className="text-center">No recipes found. Try different ingredients or filters.</p>}
            {status === 'error' && <p className="text-center text-red-400">Something went wrong. Please try again.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recipes.map(recipe => (
                    <div key={recipe.id} onClick={() => navigateTo('recipe', recipe.id)} className="cursor-pointer group bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
                        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h3 className="font-bold truncate">{recipe.title}</h3>
                            <p className="text-sm text-gray-400">Missing: {recipe.missedIngredientCount} ingredients</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
      </div>
    );
}

function RecipeDetailPage({ recipeId, navigateTo, currentUser }) {
    const [details, setDetails] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [substitutes, setSubstitutes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDetailsAndCheckFavorite = async () => {
            if(!recipeId) return;
            setLoading(true);
            try {
                // Fetch recipe details
                const res = await axios.get(`https://pantrychef-bfh4.onrender.com/api/recipe/${recipeId}`);
                setDetails(res.data);

                // Check favorite status after details are fetched
                if (currentUser) {
                    const userDocRef = doc(db, 'users', currentUser.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists() && userDoc.data().favorites?.some(fav => fav.id === parseInt(recipeId))) {
                        setIsFavorite(true);
                    } else {
                        setIsFavorite(false);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch recipe details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchDetailsAndCheckFavorite();
    }, [recipeId, currentUser]);


    const handleFavorite = async () => {
        if (!currentUser) {
            alert("Please login to save favorites.");
            navigateTo('login');
            return;
        }
        const userDocRef = doc(db, 'users', currentUser.uid);
        const recipeSummary = { id: details.id, title: details.title, image: details.image };

        try {
            if (isFavorite) {
                await updateDoc(userDocRef, { favorites: arrayRemove(recipeSummary) });
                setIsFavorite(false);
            } else {
                await updateDoc(userDocRef, { favorites: arrayUnion(recipeSummary) });
                setIsFavorite(true);
            }
        } catch (error) {
            alert("Failed to update favorites. Please try again.");
            console.error("Firestore error:", error);
        }
    };

    const fetchSubstitutes = async (ingredientId) => {
        try {
            const res = await axios.get(`https://pantrychef-bfh4.onrender.com/api/ingredient/${ingredientId}/substitutes`);
            setSubstitutes(prev => ({...prev, [ingredientId]: res.data.substitutes || ['No substitutes found']}));
        } catch (error) {
            console.error("Failed to fetch substitutes", error);
            setSubstitutes(prev => ({...prev, [ingredientId]: ['Could not fetch']}));
        }
    };

    if (loading) return <p className="text-center mt-10">Loading Recipe Details...</p>;
    if (!details) return <p className="text-center mt-10">Could not load recipe details.</p>;
    
    const createMarkup = (htmlString) => ({ __html: htmlString });

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
            <img src={details.image} alt={details.title} className="w-full rounded-lg mb-4"/>
            <button onClick={handleFavorite} className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-600'}`}>
                {isFavorite ? '❤️ Unfavorite' : '🤍 Favorite'}
            </button>
            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                <h2 className="font-bold text-xl mb-2">Details</h2>
                <p>Cooking Time: {details.readyInMinutes} minutes</p>
                <p>Servings: {details.servings}</p>
                <p>Diets: {details.diets?.join(', ') || 'None specified'}</p>
            </div>
            <div className="my-4 p-4 bg-gray-800 rounded-lg">
                <h2 className="font-bold text-xl mb-2">Nutrition (per serving)</h2>
                {details.nutrition?.nutrients ? (
                    <>
                        <p>Calories: {details.nutrition.nutrients.find(n => n.name === 'Calories')?.amount || 'N/A'} kcal</p>
                        <p>Protein: {details.nutrition.nutrients.find(n => n.name === 'Protein')?.amount || 'N/A'} g</p>
                    </>
                ) : <p>Nutrition information not available.</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h2 className="font-bold text-xl mb-2">Ingredients</h2>
                    <ul>
                        {details.extendedIngredients?.map(ing => (
                            <li key={ing.id} className="mb-2">
                                {ing.original}
                                <button onClick={() => fetchSubstitutes(ing.id)} className="text-xs text-blue-400 ml-2">(substitutes)</button>
                                {substitutes[ing.id] && <p className="text-xs text-gray-400 pl-2">→ {substitutes[ing.id].join(', ')}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-4 bg-gray-800 rounded-lg">
                    <h2 className="font-bold text-xl mb-2">Instructions</h2>
                    {details.instructions ? (
                        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={createMarkup(details.instructions)} />
                    ) : <p>No instructions provided.</p>}
                </div>
            </div>
        </div>
    );
}

function FavoritesPage({ navigateTo, currentUser }) {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        if (!currentUser) return;
        const getFavorites = async () => {
            const userDocRef = doc(db, 'users', currentUser.uid);
            try {
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    setFavorites(userDoc.data().favorites || []);
                }
            } catch (error) {
                console.error("Could not fetch favorites:", error);
            }
        };
        getFavorites();
    }, [currentUser]);

    if (!currentUser) return <p className="text-center mt-10">Please login to see your favorites.</p>

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
            {favorites.length === 0 && <p>You haven't saved any favorites yet.</p>}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                {favorites.map(fav => (
                    <div key={fav.id} onClick={() => navigateTo('recipe', fav.id)} className="cursor-pointer group">
                        <img src={fav.image} alt={fav.title} className="rounded-lg"/>
                        <p className="mt-2">{fav.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function LoginPage({ navigateTo }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isSignUp) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(db, "users", userCredential.user.uid), { favorites: [] });
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigateTo('home');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-20">
            <h1 className="text-2xl font-bold text-center mb-4">{isSignUp ? 'Sign Up' : 'Login'}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 bg-gray-800 rounded"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="p-2 bg-gray-800 rounded"/>
                <button type="submit" className="p-2 bg-green-600 rounded">{isSignUp ? 'Sign Up' : 'Login'}</button>
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)} className="mt-4 text-center w-full text-blue-400">
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
            </button>
        </div>
    );
}

export default App;