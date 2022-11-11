import { RecipePreview } from "./RecipePreview";


export function RecipeList({ recipes }) {
  console.log(recipes)
  return (
    <ul className="recipe-list simple-cards-grid container">
      {recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe} />)}
      
    </ul>
  )
}