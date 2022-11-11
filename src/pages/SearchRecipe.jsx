
import { useEffect, useState } from "react";
import { SearchBar } from "../cmps/SearchBar"
import { searchService } from "../services/search-service";
import bgcImg from "../assets/imgs/img-bgc.jpg"



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
    <div className="home-page" style={{backgroundImage: "url(" + bgcImg + ")"}}>
      <SearchBar details={recipes} />
    </div>
  )
}