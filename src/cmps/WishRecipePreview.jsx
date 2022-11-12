
import Card from 'react-bootstrap/Card';


export function WishRecipePreview({ recipe }) {
  const { label, image } = recipe



  
    return (
            <li className='wish-preview'>
            <Card >
                <Card.Img variant="bottom" src={image} />
                <Card.Body>
                <Card.Title>{label}</Card.Title>
                </Card.Body>
            </Card>
            </li>
  )
}