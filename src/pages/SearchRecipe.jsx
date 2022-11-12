
import { useEffect, useState } from "react";
import { SearchBar } from "../cmps/SearchBar"
import { searchService } from "../services/search-service";



export function SearchRecipe() {
    const [recipes, setRecipes] = useState([])
    
    useEffect(() => {
    loadRecipes()
    }, [])
  
  
  const loadRecipes = async () => {
    try {
      let recipes = await searchService.searchRecipe()
      console.log(recipes)
      setRecipes(recipes)
    }
    catch (err) {
        console.log(err)
        throw err
    }
  }

  return (
    <div className="search-recipe-page">
      <SearchBar details={recipes} />
    </div>
  )
}