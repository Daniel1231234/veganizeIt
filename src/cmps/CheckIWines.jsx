import { useState, useRef } from "react"
import { checkVeganService } from "../services/check-vegan-service"

export function CheckWines({isvegan}) {

  const wineRef = useRef()
    
  
  const submit = (e) => {
    e.preventDefault()
    const wineVal = wineRef.current.value 

   if (wineVal.length === 0 || !wineVal) return
    const isVegan = checkVeganService.checkWinerie(wineVal)
    isvegan(isVegan, wineVal)
    wineRef.current.value = ''
  }
    
  return (
      <div className="check-wines">
        <form onSubmit={submit}>
          <label>חפש על פי יקב: </label>
          <input type="text" ref={wineRef} placeholder="האם היין שלי טבעוני?"  />
          <button>
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
      </div>
    )
  }
      