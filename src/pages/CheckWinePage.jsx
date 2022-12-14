
import { CheckWines } from "../cmps/CheckIfVegan/CheckIWines"
import { useEffect, useState } from 'react';
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import { checkWineService } from "../services/checkWineService";
import { Link } from "react-router-dom";



 export const CheckWinePage = () => {
   const [show, setShow] = useState(false)
   const [content, setContent] = useState('')
     const [title, setTitle] = useState('')
     


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
        <div className="wine-page">
        <div className="checkvegan">
            <ModalWrapper
                show={show}
                onHide={handleClose}
                title={title}
                content={content} />
            <div className="modal-container">
                <h2 className="text-center">יינות ויקבים </h2>
                 <CheckWines isvegan={handleShowWine}  />
                <Link to="/">
                חזרה לדף הבית
                </Link>
            </div>    
             </div>
             </div>
    )
}

