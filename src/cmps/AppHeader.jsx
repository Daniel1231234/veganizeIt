import classes from "./Header.module.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import veganSvg from "../assets/imgs/vegan2.svg"
import hamburgerSvg from "../assets/imgs/hamburger.svg"
import { Navigation } from "./UI/Navigation";



export function AppHeader1(props) {
   const [isNavExpanded, setIsNavExpanded] = useState(false)
  // const hamburger = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path  strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  // </svg>)

  return (
    <>
    <div className="app-header">
      <nav>
        <h1 className="logo">טבען-לי</h1>
          <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}> <img src={ hamburgerSvg} /></button>

        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li>
                <Link to="/" className={isNavExpanded ? "home-nav expanded" : "home-nav"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>דף הבית</Link>
            </li>
            <li>
                <Link to="/ing"  className={isNavExpanded ? "home-nav expanded" : "home-nav"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>מרכיבים ומוצרי מזון</Link> 
            </li>
            <li>
                <Link to="/winery"  className={isNavExpanded ? "home-nav expanded" : "home-nav"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>יינות ויקבים</Link>  
            </li>
            <li>
                <Link to="/contact"  className={isNavExpanded ? "home-nav expanded" : "home-nav"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>צור קשר</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <div  className={classes['main-image']}>
        <img src={props.img} alt="" />
      </div>
    </>
  );
}


export const AppHeader = (props) => {
  return (
    <>
      <div className="app-header">
      <h1 className="logo">טבען-לי</h1>
        <Navigation />
      </div>
      <div  className={classes['main-image']}>
        <img src={props.img} alt="" />
      </div>
    </>
  )
}


