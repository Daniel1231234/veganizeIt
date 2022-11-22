import { Link } from "react-router-dom"
import { LinkCard } from "../cmps/UI/LinkCard"




export function HomePage() {
  return (
    <div className="home-page">
        <div style={{textAlign: 'center', maxWidth:'45rem', width:'90%', margin:'auto', marginTop:'-10rem', position:'relative', backgroundColor:'#383838', color:'white', borderRadius: '14px', padding:'1rem',boxShadow: '0 1px 18px 10px rgba(0, 0, 0, 0.25)'}}>
          <h2 style={{fontSize:'2rem', marginTop:'0'}}>ברוכים הבאים לפק"ל הטבעוני</h2>
          <p>האתר שמאפשר לכם לחפש יינות ומוצרים ולבדוק האם הם טבעוניים.</p>
      </div>
      <div className="home-links" >
        <LinkCard title="לבדיקת מרכיבי מזון" dir="/veganizeIt/ings" dirName="לחץ כאן!" />
        <LinkCard title="לבדיקת יינות ויקבים" dir="/veganizeIt/winery" dirName="לחץ כאן!" />
      </div>
    </div>
  )
}





