import { useRef } from "react"

export function CheckIngr({isvegan}) {
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
      <form onSubmit={checkVegan} className="simple-form">
          <label>חפש על פי פריט: </label>
          <input  type="text" placeholder="רשום שם של פריט מזון" ref={ingRef} />
          <button className="simple-button">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
      </form>
    </div>
  )
}