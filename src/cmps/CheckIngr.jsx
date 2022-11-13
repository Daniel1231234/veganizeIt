import { useState,useRef } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckIngr({isvegan}) {
  const ingRef = useRef()
  // const handleChange = ({ target }) => {
  //     const value = target.type === 'number' ? (+target.value || '') : target.value
  //     setIngredient(value)
  // }

  const checkVegan = (e) => {
    e.preventDefault()
    const ingVal = ingRef.current.value 
  
    const isVegan = checkVeganService.checkVegan(ingVal)
    console.log(isVegan);
    isvegan(isVegan, ingVal)
    ingRef.current.value = ''

  }
  return (
    <div className="check-ing">
      <form onSubmit={checkVegan}>
          <label>חפש על פי פריט: </label>
          <input  type="text" placeholder="האם המרכיב שלי טבעוני?" ref={ingRef} />
          <button>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
    </div>
  )
}