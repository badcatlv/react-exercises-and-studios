import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
    const authorLink = "https://www.allrecipes.com/recipe/238423/dads-creamy-cucumber-salad/";
    const authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcam-image-store.accountservices.meredithcorp.io%2F058681a0bef6930a1a28e3395c657a3957e1cc1a&w=320&h=320&c=sc&poi=face&q=60&orient=true";
    const authorName = "M. Hudson";

    return (
        <div className={styles.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="The author as gumpy cat" className={styles.imageUpdates} />
            <div>
                <h3>Author:<br/>{authorName}</h3>
                <a href={authorLink}>Allrecipes</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Creamy Cucumber Salad</h1>
                    <p>Crisp and creamy cucumber salad makes the perfect summer side.<br/>
                     This old-fashioned recipe combines <br/>
                     thinly sliced sweet onions, cucumbers, dill, garlic, and mayo<br/>
                     for an unbelievably delicious make-ahead dish.<br/>
                     Try your hand at MHudson's family recipe for the tastiest cucumber salad ever. </p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;