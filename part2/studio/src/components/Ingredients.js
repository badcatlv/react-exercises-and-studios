import recipedata from "./recipe.json";
import "./styling.css"

function IngredientList() {
   return(
    <div>
      <h3>Ingredients</h3>
      {recipedata.map((data)=> {
        return(
          <div key = {data.name}>
            {data.ingredients.map((ingredients, index) =>{
              return <li key={index} className="list">{ingredients}</li>
            })}
          </div>
        )
      })}
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
  