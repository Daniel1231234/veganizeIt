import { useEffect, useState } from "react"
import { RecipeList } from "../cmps/RecipeList"
import { Scroll } from "../cmps/Scroll"
import { recipeService } from "../services/recipe-service"

export function ExplorePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    loadRecipes()
  }, [])
  

  const loadRecipes = async () => {
    try {
      let recipes = await recipeService.query()
     if (recipes) setRecipes(recipes)
    }catch(err){console.log(err)}

  }

  const recipeList = () => {
    return (
      <Scroll>
        <RecipeList recipes={recipes}  />
      </Scroll>
    )
   }
  
  return (
      <div className="explore-page">
      <h1>מתכונים מומלצים</h1>
      {recipeList()}
      </div>
  )
}