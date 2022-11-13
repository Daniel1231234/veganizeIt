
import { memo } from 'react'
import { CheckIngr } from "../cmps/CheckIngr"
import Container from 'react-bootstrap/Container';
import { CheckWines } from "../cmps/CheckIWines"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const CheckIfVegan = memo(() => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState('')
  const [veg, setVeg] = useState(false)
  
  const handleClose = () => setShow(false);
  const handleShow = (val, data) => {
    if (val === null) val = false
    setShow(true)
    setVeg(val)
    setData(data)
    console.log(data, val)
  }

  return (
    <div className="check-vegan">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {veg ? <p>{data} טבעוני!</p> : <p>{ data} לא טבעוני </p>}
          </Modal.Title>
        </Modal.Header>
         <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
        {/* <h2>בחר </h2> */}
        <div className='inputs'>
            <CheckIngr  isvegan={handleShow}  />
            <CheckWines isvegan={handleShow} />
        </div>
    </div>
  )
})



    
   