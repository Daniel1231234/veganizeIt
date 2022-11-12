import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export function ModalIsVegan({ isShow }) {
   const [show, setShow] = useState(false)


  return (
        <Modal show={show} onHide={isShow}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        </Modal>
  )
}