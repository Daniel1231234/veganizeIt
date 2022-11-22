import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';





import classes from "./Header.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AppHeader(props) {
    const [theme, setTheme] = useState(true);

  return (
    <>
      <header className={classes.header}>
        <h1>טבען-לי</h1>
        <div className={classes.navs}>
          <Link to="/veganizeIt/winery">יקבים</Link>
          <Link  to="/veganizeIt/ings">מרכיבים</Link>
        </div>
      </header>
      <div  className={classes['main-image']}>
        <img src={props.img} alt="" />
      </div>



      {/* <Navbar  bg="dark" variant="dark"  className="mb-1" style={{lineHeight:'0'}}>
        <Container>
      
          <LinkContainer to="/veganizeIt/">
            <Navbar.Brand >
            <div className='logo'>
              טבען-לי
            </div>
            </Navbar.Brand>
            </LinkContainer>
          
        </Container>
      </Navbar> */}
    </>
  );
}





// git remote add origin http://github.com/Daniel1231234/veganizeIt.git