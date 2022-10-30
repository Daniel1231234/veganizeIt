import { useState } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckIngr(props) {
  const [ingredient, setIngredient] = useState('')
  const [isVegan, setIsVegan] = useState(null)

  const handleChange = ({ target }) => {
      const value = target.type === 'number' ? (+target.value || '') : target.value
      setIngredient(value)
  }

  const checkVegan = (e) => {
      e.preventDefault()
      console.log(ingredient)
      const isVegan = checkVeganService.checkVegan(ingredient)
      console.log(isVegan);
    setIsVegan(isVegan)
    setIngredient(null)
  }
  return (
    <div  className="check-ing">
        <h4>כתוב את המרכיב החשוד כלא טבעוני כאן</h4>
          <input  type="text" onChange={ handleChange} placeholder="האם המרכיב שלי טבעוני?" />
          <button className="search-btn" onClick={checkVegan}>
          <i className="fa-solid fa-magnifying-glass"></i>
            </button>
      {isVegan === null ? ' ' : (isVegan ? <h3>המרכיב טבעוני! בתיאבון</h3> : <h3>המרכיב לא טבעוני</h3>)}
    </div>
  )
}