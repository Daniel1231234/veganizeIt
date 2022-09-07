import { useState, useEffect } from "react"
import { memo } from 'react'
import { checkVeganService } from "../services/check-vegan-service"

export const CheckIfVegan = memo(() => {
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
    <div className="check-vegan">
          <div className="check-ing container">
              <h4>כתוב את המרכיב החשוד כלא טבעוני כאן</h4>
              <input  type="text" onChange={ handleChange} placeholder="האם זה טבעוני?" />
              <button className="search-btn" onClick={checkVegan}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              {isVegan === null ? ' ' : (isVegan ? <h3>המרכיב טבעוני! בתיאבון</h3> : <h3>המרכיב לא טבעוני</h3>)} 
      <CheckIngrs />
      </div>
    </div>
  )
})


function CheckIngrs() {
  const [ings, setIngs] = useState([])
  const [vegan, setVegan] = useState('')
  const [nonVegan, setNonVegan] = useState('')
  
  const handleChange = ({ target }) => {
    const value = target.type === 'number' ? (+target.value || '') : target.value
    console.log(value);
    setIngs(value)
  }
  
  const submit = (e) => {
    e.preventDefault()
    const res = checkVeganService.checkIngredients(ings.split(" "))
    setVegan(res.vegan)
    setNonVegan(res.nonvegan)
  }

  return (
    <form onSubmit={submit}>
      <h4>כתוב פריטים חשודים כלא טבעוניים</h4>
      <input type="text" onChange={handleChange} />
      <button>
      <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <p>טבעוני: {vegan}</p>
      <p>לא טבעוני: {nonVegan }</p>
    </form>
  )
}
    
    
   