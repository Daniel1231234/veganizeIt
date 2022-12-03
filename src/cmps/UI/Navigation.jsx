

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


export function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  

const hamb = <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-three-bars">
    <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
</svg>

  return (
    <div className="navigation">
        <input type='checkbox' className="navigation__checkbox" id="navi-toggle" />
          <div onClick={() => {setIsNavExpanded(!isNavExpanded)}} className="navigation__button">
             {hamb}
              {/* <span className="navigation__icon">&nbsp;</span>  */}
        </div>
        <div className={isNavExpanded ? "expanded navigation__background" : "navigation__background"} >&nbsp;</div>
      
      <nav className={isNavExpanded ? "expanded navigation__nav" : "navigation__nav"}>
              <ul className="navigation__list">
                    <li className="navigation__item" >
                        <Link to="/" className="navigation__link" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>דף הבית</Link>
                    </li>
                    <li className="navigation__item">
                        <Link to="/ing"  className="navigation__link" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>מרכיבים ומוצרים</Link> 
                    </li>
                    <li className="navigation__item">
                        <Link to="/winery"  className="navigation__link" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>יינות ויקבים</Link>  
                    </li>
                    <li className="navigation__item">
                        <Link to="/contact"  className="navigation__link" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>הוסיפו למאגר</Link>
                    </li>
              </ul>
          </nav>  
    </div>
  )
}