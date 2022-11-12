import { useState } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckIngr({isvegan}) {
  const [ingredient, setIngredient] = useState('')

  const handleChange = ({ target }) => {
      const value = target.type === 'number' ? (+target.value || '') : target.value
      setIngredient(value)
  }

  const checkVegan = (e) => {
      e.preventDefault()
      const isVegan = checkVeganService.checkVegan(ingredient)
    console.log(isVegan);
    isvegan(isVegan, ingredient)
    setIngredient("")
  }
  return (
    <div className="check-ing">
      <form onSubmit={checkVegan}>
          <label>חפש על פי פריט: </label>
          <input  type="text" onChange={handleChange} placeholder="האם המרכיב שלי טבעוני?" />
          <button>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
    </div>
  )
}