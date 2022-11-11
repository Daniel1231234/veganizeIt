



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
      if (recipes)  setRecipes(recipes)
      console.log(recipes)
    } catch (err) {
      console.log(err)
      throw err
    }
  }

    const saveToWishList = (e) => {
    e.preventDefault()
    console.log('saved!')
  }

 const heartSVG = <svg  onClick={saveToWishList} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
 <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
  
  return (
      <div className="explore-page">
      <h1>מתכונים מומלצים</h1>
      <Scroll>
        <div className="wishlist">
          <ul className="simple-cards-grid container">
            {recipes.map(r => <WishRecipePreview key={r.label}
            recipe={r}
            />)}
          </ul>
        </div>
        </Scroll>
    </div>
    
  )
}


