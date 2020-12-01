import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = "bc5b9997";
  const APP_KEY = "6b9ce657f7ddb1bfb45c22296711d712";
  
  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe title={recipe.recipe.label} 
         calories={recipe.recipe.calories}
         image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
