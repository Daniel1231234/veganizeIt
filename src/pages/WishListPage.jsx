



import { useEffect, useState } from "react"
import { Scroll } from "../cmps/Scroll"
import {WishRecipePreview} from "../cmps/WishRecipePreview"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { recipeService } from "../services/recipe-service"

export function WishListPage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    loadRecipes()
  }, [])
  

  const loadRecipes = async () => {
    try {
      let recipes = await recipeService.query()
      console.log(recipes)
      if (recipes)  setRecipes(recipes)
      console.log(recipes)
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  
  return (
      <div className="wushlist-page">
      <h1>מתכונים שאהבתי</h1>
      <Scroll>
        <div className="wishlist">
          {/* <ul className="simple-cards-grid container">
            {recipes.map(r => <WishRecipePreview key={r.label}
            recipe={r}
            />)}
          </ul> */}
        </div>
        </Scroll>
    </div>
    
  )
}


