import { Link } from "react-router-dom"


export function AppHeader() {
  return (
      <div className="app-header">
      <h2 className="logo">טבען-לי</h2>
      <nav>
        <Link to="/">חיפוש מתכון</Link> |{" "}
        <Link to="/explore">מתכונים מומלצים</Link>|{" "}
        <Link to="/isvegan">זה טבעוני?</Link>|
        <Link to="/scanner">בדיקת ברקוד</Link>
      </nav>
      </div>
  )
}