import { useState } from "react"
import { checkIngSerivce } from "../../services/checkIngService"
import { FormWrapper } from "../UI/FormWrapper"
import useDetectKeyboardOpen from "use-detect-keyboard-open"
import { useEffect } from "react"



export function CheckIngr({ isvegan, open, setOpen }) {
  const [searchInput, setSearchInput] = useState("")
  const [totalIngs, setTotalIngs] = useState("")
  // const totalIngs = checkIngSerivce.getAllIngs()
  const isKeyboardOpen = useDetectKeyboardOpen()


  useEffect(() => {
    const load = async () => {
      const ings = await checkIngSerivce.getAllIngs()
      setTotalIngs(ings)
    }
  
  load()
  }, [])


  const checkVegan = (e) => {
    e.preventDefault()
    console.log('searchInput from sybmit => ', searchInput);
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

if (!totalIngs) return <div>Loading...</div>
  return (
    <div className="check-ing"  >
      <FormWrapper
        placeholder={"לדוגמא: חלב מגנזיום"}
        onSelect={getSelectedItem}
        handleInputVal={handleInputVal}
        btnClick={() => { setOpen(!open) }}
        openUl={open}
        label={"רשום שם של פריט מזון"}
        muted={"שים לב! חלק מהמוצרים והרכיבים במאגר רשומים באנגלית"}
        submit={checkVegan}
        items={totalIngs} />
    </div>
  )
}