import { RecipePreview } from "./RecipePreview";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function RecipeList({ recipes }) {

  return (
    <Container style={{marginTop: '30px'}} >
    <Row xs="auto"  className="g-5">
          {recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe} />)} 
      </Row>
      </Container>
    // <ul className="recipe-list simple-cards-grid container">
    //   {recipes.map(recipe => <RecipePreview key={recipe.id} recipe={recipe} />)}
    // </ul>
  )
}