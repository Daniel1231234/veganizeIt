import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';

export function AppHeader() {
  return (
    <>
      <Navbar  bg="dark" variant="dark" expand="sm" className="mb-1" style={{lineHeight:'0'}}>
        <Container>
      
          <LinkContainer to="/veganizeIt/">
          <Navbar.Brand>טבען-לי</Navbar.Brand>
            </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
        
              <LinkContainer to="/veganizeIt/isvegan" className="mb-2">
              <Nav.Link>זה טבעוני?</Nav.Link>
              </LinkContainer>

         
              <LinkContainer to="/veganizeIt/scanner" className="mb-2">
              <Nav.Link>ברקוד</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}





// git remote add origin http://github.com/Daniel1231234/veganizeIt.git