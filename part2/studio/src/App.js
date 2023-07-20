import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
//import ClickedButton from "./components/ClickedButton";
//import SaveButton from "./components/SaveButton";
import RecipeName from "./components/RecipeName";

export default function App() {

  return ( 
    <div className = "App">
      <RecipeImage />
      <RecipeName />
      <RateARecipe rating={5} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
      {/* <SaveButton /> */}
      {/* <ClickedButton /> */}
    </div>
  );
}
 