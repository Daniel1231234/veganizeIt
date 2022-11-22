import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"


export function LinkCard(props) {
  return (
    <div className="card-link">
      <Card>
        <Card.Body>
          <Card.Title>{ props.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
            <Link to={props.dir}>{props.dirName }</Link>
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}

