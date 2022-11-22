import { useState } from "react"

import { checkWineService } from "../../services/checkWineService"
import { FormWrapper } from "../UI/FormWrapper"

export function CheckWines({ isvegan, open, setOpen }) {
    const [searchInput, setSearchInput] = useState("")
    const totalWines = checkWineService.getWineries()
  
  const submit = (e) => {
    e.preventDefault()
    isvegan(searchInput)
  }

   function handleInputVal (val)  {
    // console.log('fromInputVal => ', val);
    setSearchInput(val)
  }
  
  
  const getSelectedItem = (val) => {
    // console.log(val);
    isvegan(val)
  }
  
    
  return (
      <div className="check-wines bottom-divider">
      <FormWrapper
        placeholder={"לדוגמא: תבור"}
        btnClick={() => { setOpen(!open) }}
        onSelect={getSelectedItem}
        handleInputVal={handleInputVal}
        openUl={open} 
        label={"רשום שם של יקב"}
        muted={"שים לב! חלק מהמוצרים והרכיבים במאגר רשומים באנגלית"}
        submit={submit}
        items={totalWines} />
      </div>
    )
  }
      