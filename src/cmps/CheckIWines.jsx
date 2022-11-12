import { useState } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckWines({isvegan}) {
    const [wine, setWine] = useState("")
    
    const handleChange = ({ target }) => {
      const value = target.type === 'number' ? (+target.value || '') : target.value
      setWine(value)
  }
  
  const submit = (e) => {
    e.preventDefault()
   if (wine.length === 0 || !wine) return
    const isVegan = checkVeganService.checkWinerie(wine)
    isvegan(isVegan, wine)
    setWine("")
  }
    
  return (
      <div className="check-wines">
        <form onSubmit={submit}>
          <label>חפש על פי יקב: </label>
          <input type="text" onChange={handleChange} placeholder="האם היין שלי טבעוני?"  />
          <button>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
      </div>
    )
  }
      