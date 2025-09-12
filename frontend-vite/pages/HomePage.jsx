// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link for navigation

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
//     if (searchStatus === 'loading') return <p>Finding yummy recipes...</p>;
//     if (searchStatus === 'error') return <p>Oops! Something went wrong.</p>;
//     if (searchStatus === 'success' && recipeList.length === 0) {
//       return <p>No recipes found. Try different ingredients!</p>;
//     }
//     return null;
//   };

//   return (
//     <>
//       <header className="App-header">
//         <h1>PantryChef 🍳</h1>
//         <p>Enter ingredients, separated by commas.</p>
//         <div className="search-bar">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="e.g., chicken, rice, broccoli"
//             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//           />
//           <button onClick={handleSearch} disabled={searchStatus === 'loading'}>
//             {searchStatus === 'loading' ? 'Searching...' : 'Find Recipes'}
//           </button>
//         </div>
//       </header>

//       <main className="recipe-grid">
//         {renderStatusMessage()}
//         {recipeList.map((recipe) => (
//           <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card-link">
//             <div className="recipe-card">
//               <img src={recipe.image} alt={recipe.title} />
//               <h3>{recipe.title}</h3>
//               <p>Uses {recipe.usedIngredientCount} of your ingredients</p>
//             </div>
//           </Link>
//         ))}
//       </main>
//     </>
//   );
// }

// export default HomePage;



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [query, setQuery] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [searchStatus, setSearchStatus] = useState('idle');

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter ingredients separated by commas.");
      return;
    }
    setSearchStatus('loading');
    setRecipeList([]);

    try {
      const endpoint = `${import.meta.env.VITE_API_BASE}/api/recipes-by-ingredients?ingredients=${query}`;
      const response = await axios.get(endpoint);
      setRecipeList(response.data);
      setSearchStatus('success');
    } catch (err) {
      console.error("Failed to fetch recipes:", err);
      setSearchStatus('error');
    }
  };

  const renderStatusMessage = () => {
    if (searchStatus === 'loading') return <p>Finding yummy recipes...</p>;
    if (searchStatus === 'error') return <p>Oops! Something went wrong.</p>;
    if (searchStatus === 'success' && recipeList.length === 0) {
      return <p>No recipes found. Try different ingredients!</p>;
    }
    return null;
  };

  return (
    <>
      <header className="App-header">
        <h1>PantryChef 🍳</h1>
        <p>Enter ingredients, separated by commas.</p>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., chicken, rice, broccoli"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button onClick={handleSearch} disabled={searchStatus === 'loading'}>
            {searchStatus === 'loading' ? 'Searching...' : 'Find Recipes'}
          </button>
        </div>
      </header>

      <main className="recipe-grid">
        {renderStatusMessage()}
        {recipeList.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-card-link">
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>Uses {recipe.usedIngredientCount} of your ingredients</p>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}

export default HomePage;
