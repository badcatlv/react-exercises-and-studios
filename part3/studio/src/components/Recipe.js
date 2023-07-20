const RecipeAuthor = () => {
   let authorLink = "https://www.theclevercarrot.com/2014/01/sourdough-bread-a-beginners-guide/";
   let authorPhoto = "https://www.theclevercarrot.com/wp-content/uploads/2012/05/Emilie-Raffa.jpg";
   let authorName = "Emilie Raffa";

   return (
      <div>
         <img src={authorPhoto} alt = {authorName} style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["250g water", "150g bubbly, sourdough starter", "25g olive oil", "500g bread flour", "10g fine sea salt"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Sourdough Bread: A Beginner’s Guide</h1>
            <p>Think you can’t bake artisan sourdough bread at home? 
               Think again! Sourdough Bread: a Beginner’s guide is your go-to recipe resource for simple, 
               easy sourdough bread without kneading. Make the dough in the morning or at night- 
               it will come together in under 10 minutes.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg" alt="Sourdough Bread" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}