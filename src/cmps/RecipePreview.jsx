import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Col } from "react-bootstrap";


export function RecipePreview({ recipe }) {
  const { title, image,id } = recipe


  const saveToWishList = (e) => {
    e.preventDefault()
    console.log('saved!')
  }

  
  return (
    <Col style={{margin: 'auto'}}>
      <Card border="primary" bg="light" style={{ width: '18rem' }} className="simple-cards-grid">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button  variant="primary" onClick={saveToWishList}>Save</Button>
          </Card.Body>
      </Card>
      </Col>
  )
}

