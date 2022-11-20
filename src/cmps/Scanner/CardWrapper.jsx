import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export function CardWrapper() {
  return (
    <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">בדוק יינות ויקבים</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">בדוק מרכיבים בסיסיים</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#disabled" >
              סרוק ברקוד
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
