import { useEffect, useState } from "react"
import { RecipeList } from "../cmps/RecipeList"
import { recipeService } from "../services/recipe-service"

export function ExplorePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    loadRecipes()
  }, [recipes])
  

  const loadRecipes = () => {
    let recipes = recipeService.query()
    // console.log(recipes)
    setRecipes(recipes)
  }
  return (
      <div className="explore-page">
      <h1>מתכונים מומלצים</h1>
      <RecipeList recipes={recipes}  />
      </div>
  )
}