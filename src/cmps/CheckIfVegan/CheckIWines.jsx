import { useRef } from "react"

export function CheckWines({ isvegan }) {
  const wineRef = useRef()
    
  
  const submit = (e) => {
    e.preventDefault()
    const wineVal = wineRef.current.value 
   if (wineVal.length === 0 || !wineVal) return
    isvegan(wineVal)
    wineRef.current.value = ''
  }
    
  return (
      <div className="check-wines bottom-divider">
        <form onSubmit={submit} className="simple-form">
          <label>חפש על פי יקב: </label>
          <input type="search" id="wine-check" ref={wineRef} placeholder="רשום שם של יקב"  />
          <button className="simple-button">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
      </div>
    )
  }
      