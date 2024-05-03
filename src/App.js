import React, { useState, useEffect } from 'react';
import Select from "react-select";
import Recipe from './food';
import './App.css';

const App = () => {
  const app_id = "35160f04";
  const app_key = "e30a6221a784b9526ff94af21498cd53";

  const mealtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Lunch', label: 'Lunch' },
    { value: 'Dinner', label: 'Dinner' },
  ];

  const dietoptions = [
    { value: '', label: 'anything' },
    { value: 'balanced', label: 'balanced' },
    { value: 'high-fiber', label: 'high-fiber' },
    { value: 'high-protein', label: 'high-protein' },
    { value: 'low-fat', label: 'low-fat' },
    { value: 'low-carb', label: 'low-carb' },
    { value: 'low-sodium', label: 'low-sodium' },
  ];

  const dishtypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Biscuits and cookies', label: 'Biscuits and cookies' },
    { value: 'Bread', label: 'Bread' },
    { value: 'Main course', label: 'Main course' },
    { value: 'Desserts', label: 'Desserts' },
    { value: 'Soup', label: 'Soup' },
    { value: 'Starter', label: 'Starter' },
  ];

  const cuisinetypeoptions = [
    { value: '', label: 'anything' },
    { value: 'Indian', label: 'Indian' },
    { value: 'American', label: 'American' },
    { value: 'Asian', label: 'Asian' },
    { value: 'French', label: 'French' },
    { value: 'Mediterranean', label: 'Mediterranean' },
    { value: 'Middle Eastern', label: 'Middle Eastern' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Central Europe', label: 'Central Europe' },
    { value: 'Eastern Europe', label: 'Eastern Europe' },
    { value: 'British', label: 'British' },
    { value: 'Mexican', label: 'Mexican' },
  ];

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [submit, setSubmit] = useState('');
  const [meal, setMeal] = useState('');
  const [mealty, setMealty] = useState('');
  const [diet, setDiet] = useState('');
  const [deitty, setDeitty] = useState('');
  const [dish, setDish] = useState('');
  const [dishty, setDishty] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [cuisinety, setCuisinety] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    getRecipes();
  }, [submit]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${submit}&app_id=${app_id}&app_key=${app_key}${deitty}${cuisinety}${mealty}${dishty}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const research = (e) => {
    setSearch(e.target.value);
  };
  
  const mealtype = (selectedOption) => {
    if (selectedOption.value === '') {
      setMealty('');
    } else {
      setMealty('&mealType=${selectedOption.value}');
    }
  };

  const diettype = (selectedOption) => {
    if (selectedOption.value === '') {
      setDeitty('');
    } else {
      setDeitty('&diet=${selectedOption.value}');
    }
  };

  const dishtype = (selectedOption) => {
    if (selectedOption.value === '') {
      setDishty('');
    } else {
      setDishty('&dishType=${selectedOption.value}');
    }
  };

  const cuisinetype = (selectedOption) => {
    if (selectedOption.value === '') {
      setCuisinety('');
    } else {
      setCuisinety('&cuisineType=${selectedOption.value}');
    }
  };

  const getsubmit = e => {
    e.preventDefault();
    setSubmit(search);
    setSearch('');
  };

  const addToFavorites = (recipe) => {
    setFavorites(prevFavorites => [...prevFavorites, recipe]);
  };
  
  const shareRecipe = (recipe) => {
    // Implement share functionality, e.g., via email or social media
    alert('Sharing recipe: ${recipe.recipe.label}');
  };

  const handleRating = (recipeId, rating) => {
    setRatings({ ...ratings, [recipeId]: rating });
  };

  const handleComment = (recipeId, comment) => {
    setComments({ ...comments, [recipeId]: comment });
  };

  return (
    <div className="h-s grid place-items-center text-white">
      <div className="upbar">
        <h3 className="idfc">Chef<span className='bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>Master</span> - food recipe generator</h3>
        <nav>
          <ul className="nav_bar">
            <li><a href="#home"><b>Home</b></a></li>
            <li><a href="#about"><b>About me</b></a></li>
            <li><a href="#contact"><b>Contact</b></a></li>
          </ul>
        </nav>
      </div>

      <div className='pro'>
        <h1 className='title'>Banish Mealtime Guesswork<br />with Chef<span className='bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent'>Master</span></h1>
      </div>

      <div className='mainform'>
        <form className='my-2rem space-y-[1rem] shadow-md rounded px-8 pt-6 pb-8 mb-4  text-white border-2 border-slate-500 rounded-xl' onSubmit={getsubmit}>
          <div>
            <span id='types'>Search : </span><br/><br/><input className='dark:text-black rounded  py-2 px-3' type="text" placeholder='search' value={search} onChange={research}/>
          </div>

          <div className='my-1rem' id='options'>
            <span id='types'>Meal Type : </span><br/><br/><Select className='text-black' options={mealtypeoptions} onChange={mealtype} styles={{width:'36vw'}} />
          </div>

          <div className='my-1rem' id='options'>
            <span id='types'>Diet Type :</span><br/><br/><Select className='text-black' options={dietoptions} onChange={diettype}/>
          </div>

          <div className='my-1rem' id='options'>
            <span id='types'>Dish Type : </span><br/><br/><Select className='text-black' options={dishtypeoptions} onChange={dishtype}/>
          </div>

          <div className='my-1rem' id='options'>
            <span id='types'>Cuisine Type : </span><br/><br/><Select className='text-black' options={cuisinetypeoptions} onChange={cuisinetype}/>
          </div><br />

          <button className='py-2 px-4 text-lg bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-lg font-medium ml-8 ' type='submit' >
            <b className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' >Search </b>
          </button>
        </form>
      </div>        

      <div className='output_recipe'>
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.calories} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          >
            <button onClick={() => addToFavorites(recipe)}>Add to Favorites</button>
            <button onClick={() => shareRecipe(recipe)}>Share</button>
            <div>
              <label>Rating:</label>
              <input type="number" min="1" max="5" value={ratings[recipe.recipe.calories] || ''} onChange={(e) => handleRating(recipe.recipe.calories, e.target.value)} />
            </div>
            <div>
              <label>Comment:</label>
              <textarea value={comments[recipe.recipe.calories] || ''} onChange={(e) => handleComment(recipe.recipe.calories, e.target.value)} />
            </div>
          </Recipe>
        ))}
      </div>
    </div>
  );
}

export default App;

