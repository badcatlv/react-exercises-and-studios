import React from "react";
import styles from "./Description.module.css";

function RecipeAuthor() {
    const authorLink = "link to recipe blog";
    const authorPhoto = "url to photo of author";
    const authorName = "should contain their full name";

    return (
        <div className={styles.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="Description" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog Name</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Title</h1>
                    <p>Short recipe description</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription;