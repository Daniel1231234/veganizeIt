import classes from "./Header.module.css"
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export function AppHeader(props) {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate()

  return (
    <>
      <header className={classes.header}>
        <h1>טבען-לי</h1>
        <div className={classes.navs}>
          <NavLink to="/winery">יקבים</NavLink>
          <NavLink to="/ings">מרכיבים</NavLink>
        </div>
      </header>
      <div  className={classes['main-image']}>
        <img src={props.img} alt="" />
      </div>
    </>
  );
}





// git remote add origin http://github.com/Daniel1231234/veganizeIt.git