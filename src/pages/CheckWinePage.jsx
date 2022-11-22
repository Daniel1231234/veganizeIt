
import { CheckWines } from "../cmps/CheckIfVegan/CheckIWines"
import { useState } from 'react';
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import { checkWineService } from "../services/checkWineService";
import classes from "./CheckIfVegan.module.css"
import { Link } from "react-router-dom";



 export const CheckWinePage = () => {
   const [show, setShow] = useState(false)
   const [content, setContent] = useState('')
   const [title, setTitle] = useState('')
        

    const handleShowWine = (enteredWine) => {
        let isWineVegan
        if (typeof enteredWine === 'string') isWineVegan = checkWineService.checkWinerie(enteredWine)
        if (typeof enteredWine === 'object') isWineVegan = checkWineService.checkWinerie(enteredWine.name)
        console.log(isWineVegan);
        if (!isWineVegan || isWineVegan.length === 0) {
        setModalContent(null)
        setShow(true)
        return
      }
        setModalContent(isWineVegan[0].isVegan, isWineVegan[0].name)
        setShow(true)
     }
     
     const handleClose = (e) => {
        setShow(false)
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

     const goBack = (e) => {
         console.log(e);
     }


    return (
        <div className={classes.checkvegan}>
            <ModalWrapper
                show={show}
                onHide={handleClose}
                title={title}
                content={content} />
            <div className="modal-container">
                <h2 className="text-center">יינות ויקבים </h2>
                 <CheckWines isvegan={handleShowWine}  />
            </div>    
                <Link to="/">
                חזרה לדף הבית
                </Link>
        </div>
    )
}

