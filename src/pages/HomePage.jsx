
import { LinkCard } from "../cmps/UI/LinkCard"


export function HomePage() {
  return (
    <>
      <div className="home-page">
          <div className="headline">
            <h2 style={{fontSize:'2rem', marginTop:'0'}}>ברוכים הבאים לפק"ל הטבעוני</h2>
            <p>האתר שמאפשר לכם לחפש יינות ומרכיבים ולבדוק האם הם טבעוניים.</p>
        </div>
        <div className="home-links" >
          <LinkCard title="לבדיקת יינות ויקבים" dir="/winery" dirName="לחץ כאן!" />
          <LinkCard title="לבדיקת מרכיבי מזון" dir="/ings" dirName="לחץ כאן!" />
        </div>
      </div>
    </>
  )
}









