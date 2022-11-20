
import { CheckIngr } from "../cmps/CheckIfVegan/CheckIngr"
import { CheckWines } from "../cmps/CheckIfVegan/CheckIWines"
import { useState } from 'react';
import { checkIngSerivce } from "../services/checkIngService"
import { ModalWrapper } from "../cmps/UI/ModalWrapper";
import { checkWineService } from "../services/checkWineService";
import {Card} from "../cmps/UI/Card";
export const CheckIfVegan = () => {
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [opts, setOpts] = useState([])



  const handleClose = (e) => {
    setShow(false)
  } 

  const handleShowIng = (enteredIng) => {
    const checkedIng = checkIngSerivce.checkVegan(enteredIng)
    console.log(checkedIng)

    if (!checkedIng || checkedIng.length === 0) {
      setModalContent(null)
      setShow(true)
      return
    }

    if (checkedIng.length === 1) {
      setModalContent(checkedIng[0].isVegan, checkedIng[0].name)
      setShow(true)
      return
    }
    
    if (checkedIng.length > 0) {
      console.log(checkedIng);
      setOpts(checkedIng)
    } 
  }
  
  const handleShowWine = (enteredWine) => {
    const checkedWinery = checkWineService.checkWinerie(enteredWine)
        if (!checkedWinery || checkedWinery.length === 0) {
      setModalContent(null)
      setShow(true)
      return
    }

    if (checkedWinery.length === 1) {
      setModalContent(checkedWinery[0].isVegan, checkedWinery[0].name)
      setShow(true)
      return
    }
    
    if (checkedWinery.length > 0) {
      console.log(checkedWinery);
      setOpts(checkedWinery)
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

  const chooseIng = (e) => {
    console.log(e.target.outerText)
    const selecteditem = e.target.outerText
    const ingIsVegan = checkIngSerivce.checkFixedVal(selecteditem)
    console.log(ingIsVegan)
    setModalContent(ingIsVegan.isVegan, ingIsVegan.name)
    setShow(true)
    setOpts([])
}
// 
  const showUserMsg = opts.length === 0 ? "user-msg hide " : "user-msg "

  const optsListContent = opts.map((opt) => {
    return (
        <li key={opt.id} onClick={chooseIng}>
          {opt.name}
        </li>
    )
  })

  return (
    <div className="check-vegan">
      <ModalWrapper
        show={show}
        onHide={handleClose}
        title={title}
        content={content} />
      
      <div className='modal-container'>
        <div>
          <h1 className="bottom-divider">הפק"ל הטבעוני</h1>
          <CheckIngr  isvegan={handleShowIng}  />
          <CheckWines isvegan={handleShowWine} />

          <ul className={showUserMsg} style={{padding:0,margin:0,maxWidth:'700px',}}>
            <label>האם התכוונת ל: </label>
          {optsListContent}
          </ul>
            
          </div>
        </div>
      </div>
  )
}



    
   