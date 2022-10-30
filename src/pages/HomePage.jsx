
import { useEffect, useState } from "react";
import { SearchBar } from "../cmps/SearchBar"
import { searchService } from "../services/search-service";



export function HomePage() {
  const [recipes, setRecipes] = useState([])
useEffect(() => {
loadRecipes()
}, [])
  
  
  
  const loadRecipes = async () => {
    try {
      let recipes = await searchService.searchRecipe()
      // console.log(recipes)
      setRecipes(recipes)
    }catch(err){console.log(err)}
  }

  return (
    <div className="home-page ">
      <SearchBar details={recipes} />
    </div>
  )
}