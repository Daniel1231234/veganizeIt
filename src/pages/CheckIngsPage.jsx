
import { CheckIngr } from "../cmps/CheckIfVegan/CheckIngr"
import { useState } from 'react';
import { checkIngSerivce } from "../services/checkIngService"
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import classes from "./CheckIfVegan.module.css"
import { Link } from "react-router-dom";

export const CheckIngsPage = () => {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
 

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
        //      if (ing) {
        //         setModalContent(ing.isVegan, ing.name)
        //         setShow(true)
        //  } else {
        //     setModalContent(null)
        //     setShow(true)
        //  }
    // let isIngVegan 
    // if (typeof enteredIng === 'string') isIngVegan = checkIngSerivce.checkVegan(enteredIng)
    // if (typeof enteredIng === 'object') isIngVegan = checkIngSerivce.checkVegan(enteredIng.name)
    // if (!isIngVegan) {
    //     setModalContent(null)
    //     setShow(true)
    //     return
    //   }
    
    // setModalContent(isIngVegan[0].isVegan, isIngVegan[0].name)
    // setShow(true)
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


  return (
    <div className={classes.checkvegan}>
      <ModalWrapper
        show={show}
        onHide={handleClose}
        title={title}
        content={content} />
      
      <div className='modal-container'>
      <h2 className="text-center">מרכיבים</h2>
        <CheckIngr isvegan={handleShowIng} />
      </div>
          <Link to="/">
                חזרה לדף הבית
          </Link>
      </div>
  )
}



    
   