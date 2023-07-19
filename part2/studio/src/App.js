import "./App.css";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
//import SaveButton from "./components/SaveButton";
//import RecipeName from "./components/RecipeName";

export default function App() {

  return (
    <>
      <h1>Hello</h1>
      <RecipeImage />
      {/* <RecipeName /> */}
      <RateARecipe rating={3} />
      <Button saveButton={true} />
      <AuthorInfo />
      <IngredientList />
    </>
  );
}
 