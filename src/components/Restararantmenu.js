import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useResturantMenu from '../../utils/useResturantMenu';



const Restararantmenu = () => {
    const { resid } = useParams();
    //const [recipe, setreceipe] = useState(null);
    // useEffect(()=>{
    //     fetchMenu();
    // },[resid])

    // const fetchMenu = async()=>{
    //         const data = await fetch(`https://dummyjson.com/recipes/${resid}`);
    //         const json = await data.json()
    //         setreceipe(json);

    //         console.log(json)
    // }
    const recipe = useResturantMenu(resid);
        // useEffect(() => {
        //   if (tell) {
        //     setreceipe(tell);
        //   }
        // }, [tell]);

       if (!recipe) {
         return <div>Loading...</div>;
       }
       console.log(recipe.data);
    return (
      <div className="menu">
        <h1>{recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} style={{ width: "300px" }} />

        <h2>Cuisine: {recipe.cuisine}</h2>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
        <p>
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins
        </p>
        <p>
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <p>
          <strong>Rating:</strong> {recipe.rating} ⭐
        </p>

        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    );
}

export default Restararantmenu;