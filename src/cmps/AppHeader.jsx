import { useState } from "react"
import { Link } from "react-router-dom"


export function AppHeader() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)


  const hamburger = (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path  strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
  </svg>)


  return (
    <div className="app-header">
      <nav>
        <Link to="/veganizeIt/" className="logo"><h2 className="logo">טבען-לי</h2></Link>
        <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}> {hamburger}</button>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li>
                      <Link to="/veganizeIt/" className={isNavExpanded ? "home-nav expanded" : "home-nav"} onClick={() => {setIsNavExpanded(!isNavExpanded)}}>דף הבית</Link>
                    </li>
                    <li>
                      <Link to="/veganizeIt/isvegan"  onClick={() => {setIsNavExpanded(!isNavExpanded)}}>זה טבעוני?</Link>
                    </li>
                    <li>
                      <Link to="/veganizeIt/scanner"  onClick={() => {setIsNavExpanded(!isNavExpanded)}}>בדיקת ברקוד</Link>
                    </li>
                </ul>
            </div>
      </nav>
   </div>
  )
}



// git remote add origin http://github.com/Daniel1231234/veganizeIt.git