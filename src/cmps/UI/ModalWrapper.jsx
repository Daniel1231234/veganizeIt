import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



export const ModalWrapper = (props) => {

  return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header>
             <Modal.Title>{ props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.content}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.onHide}>
                סגור
              </Button>
            </Modal.Footer>
         </Modal>
  )
}



