import { useRef } from "react"
import { FormWrapper } from "../UI/Card"

export function CheckWines({ isvegan, open, setOpen }) {
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
      <FormWrapper placeholder={"לדוגמא: תבור"} btnClick={() => {setOpen(!open)}} openUl={open} getRef={wineRef} label={"רשום שם של יקב"} muted={"שימו לב כי יש מוצרים ורכיבים הרשומים באנגלית"} submit={submit} />
      </div>
    )
  }
      