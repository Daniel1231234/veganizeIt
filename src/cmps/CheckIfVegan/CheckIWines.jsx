import { useEffect } from "react"
import { useState } from "react"

import { checkWineService } from "../../services/checkWineService"
import { FormWrapper } from "../UI/FormWrapper"

export function CheckWines({ isvegan, open, setOpen }) {
  const [searchInput, setSearchInput] = useState("")
  const [totalWines, setTotalWines] = useState([])
   
  
  
  useEffect(() => {
    const load = async () => {
      const wines = await checkWineService.getWineries()
      setTotalWines(wines)
    }

    load()
  }, [])
  
  const submit = (e) => {
    e.preventDefault()
    console.log(searchInput);
    isvegan(searchInput)
  }

   function handleInputVal (val)  {
    setSearchInput(val)
  }
  
  
  const getSelectedItem = (val) => {
    console.log(val);
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
      