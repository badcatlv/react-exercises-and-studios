import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
    const ingredients = ["2 large cucumbers, peeled and thinly sliced", "1 sweet onion, thinly sliced", "1 ½ cups mayonnaise, or more to taste", "2 tablespoons vinegar", "1 teaspoon dried dill weed"];
    return(
        <div>
            <h3>Recipe ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}