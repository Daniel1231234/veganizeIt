
import { CheckWines } from "../cmps/CheckIfVegan/CheckIWines"
import { useState } from 'react';
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import { checkWineService } from "../services/checkWineService";
import classes from "./CheckIfVegan.module.css"
import { useNavigate } from "react-router-dom";



 export const CheckWinePage = () => {
   const [show, setShow] = useState(false)
   const [content, setContent] = useState('')
   const [title, setTitle] = useState('')
        
const navigate = useNavigate()
     const handleShowWine = async (enteredWine) => {
        let winery =  await checkWineService.checkWinerie(enteredWine)
         console.log(winery, ' FINEL DEST!');
         if (winery) {
             setModalContent(winery.isVegan, winery.name)
             setShow(true)
         } else {
            setModalContent(null)
            setShow(true)
         }
         
     }
     
     const handleClose = (e) => {
        setShow(false)
    }
    
     const setModalContent = (resIsVegan, resItem) => {
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
            <div className="modal-container">
                <h2 className="text-center">יינות ויקבים </h2>
                 <CheckWines isvegan={handleShowWine}  />
            </div>    
                <button onClick={() => {navigate("/")}}>
                חזרה לדף הבית
                </button>
        </div>
    )
}

