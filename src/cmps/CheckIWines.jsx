import { useState } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckWines() {
    const [wine, setWine] = useState("")
    const [isWineVegan, setVeganWine] = useState(null)
    
    const handleChange = ({ target }) => {
      const value = target.type === 'number' ? (+target.value || '') : target.value
      setWine(value)
  }
  
  const submit = (e) => {
    e.preventDefault()
   if (wine.length === 0 || !wine) return
    const isVegan = checkVeganService.checkWinerie(wine)
    setVeganWine(isVegan)
    setWine(null)
  }
    
    return (
      <form onSubmit={submit}>
        <h4>כתוב ייקבים ויינות חשודים כלא טבעוניים</h4>
        <input type="text" onChange={handleChange} placeholder="האם היין שלי טבעוני?" />
        <button>
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
    
        {isWineVegan === null  ? ' ' : (isWineVegan ? <h3>המרכיב טבעוני! בתיאבון</h3> : <h3>המרכיב לא טבעוני</h3>)} 
      </form>
    )
  }
      