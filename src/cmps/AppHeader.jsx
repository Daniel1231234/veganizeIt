import classes from "./Header.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AppHeader(props) {
    const [theme, setTheme] = useState(true);

  return (
    <>
      <header className={classes.header}>
        <h1>טבען-לי</h1>
        <nav className={classes.navs}>
          <Link to="/winery">יקבים</Link>
          <Link to="/ings">מרכיבים</Link>
        </nav>
      </header>
      <div  className={classes['main-image']}>
        <img src={props.img} alt="" />
      </div>
    </>
  );
}





// git remote add origin http://github.com/Daniel1231234/veganizeIt.git