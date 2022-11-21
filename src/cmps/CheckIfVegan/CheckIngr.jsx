import { useRef } from "react"
import { FormWrapper } from "../UI/Card"

export function CheckIngr({isvegan, open, setOpen}) {
  const ingRef = useRef()
  
  const checkVegan = (e) => {
    e.preventDefault()
    const ingVal = ingRef.current.value 
    if (!ingVal) return    
    isvegan(ingVal)
    ingRef.current.value = ''
  }

  return (
    <div className="check-ing">
      <FormWrapper  placeholder={"לדוגמא: חלב מגנזיום"} btnClick={() => {setOpen(!open)}} openUl={open} getRef={ingRef} label={"רשום שם של פריט מזון"} muted={"המאגר אינו מכיל את כל רשימת מוצרי המזון הבסיסיים"} submit={checkVegan} />
    </div>
  )
}