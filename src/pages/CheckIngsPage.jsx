import { CheckIngr } from "../cmps/CheckIfVegan/CheckIngr"
import { useEffect, useState } from 'react';
import { checkIngSerivce } from "../services/checkIngService"
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import { Link } from "react-router-dom";



export const CheckIngsPage = () => {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [totalIngs, setTotalIngs] = useState([])

    useEffect(() => {
    const load = async () => {
      const ings = await checkIngSerivce.getAllIngs()
      setTotalIngs(ings)
    }
  
  load()
  }, [])

  const handleClose = (e) => {
    setShow(false)
  } 

  const handleShowIng = async (enteredIng) => {
    let ing = await checkIngSerivce.checkVegan(enteredIng)
    console.log(ing, ' FINEL DEST!')

    if (!ing || ing.length === 0) {
      setModalContent(null)
      setShow(true)
    } else {
      setModalContent(ing.isVegan, ing.name)
      setShow(true)
    }
  }
  

    const setModalContent = (resIsVegan, resItem) => {
    console.log(resIsVegan);
       if (resIsVegan) {
      setTitle(`${resItem} טבעוני!`)
      setContent(`${resItem} טבעוני!`)
    } 
    if (!resIsVegan) {
       setTitle(`${resItem} לא טבעוני`)
      setContent(`${resItem} לא טבעוני`)
    } 
    if (resIsVegan === null) {
      setTitle('המוצר לא קיים במאגרנו')
      setContent(' ')
    } 
  }


  if (!totalIngs) return <div>Loading...</div>
  return (
    <div className="ings-page">
    <div className="checkvegan">

          
      <ModalWrapper
        show={show}
        onHide={handleClose}
        title={title}
        content={content} />
      
      <div className='modal-container'>
      <h2 className="text-center">מרכיבי מזון</h2>
      <CheckIngr isvegan={handleShowIng} ings={totalIngs} />
      <Link to="/">חזרה לדף הבית </Link>
      </div>
      </div>
      </div>
  )
}



    
   