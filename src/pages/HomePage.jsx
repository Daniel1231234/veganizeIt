
import { LinkCard } from "../cmps/UI/LinkCard"
import wineSvg from "../assets/imgs/wine2.svg"
import ingSvg from "../assets/imgs/ings3.svg"
import conSvg from "../assets/imgs/vegan2.svg"

export function HomePage() {
  return (
    <>
      <div className="home-page">
          <div className="headline">
            <h2 style={{fontSize:'2rem', marginTop:'0'}}>ברוכים הבאים לפק"ל הטבעוני</h2>
            <p>האתר שמאפשר לכם לחפש יינות ומרכיבים ולבדוק האם הם טבעוניים.</p>
        </div>
        <div className="home-links" >
          <LinkCard svg={wineSvg} title="לבדיקת יינות ויקבים" dir="/winery" dirName="לחץ כאן!" />
          <LinkCard svg={ingSvg} title="לבדיקת מרכיבי מזון" dir="/ings" dirName="לחץ כאן!" />
          <LinkCard svg={conSvg} title="שמרו על קשר!" dir="/contact" dirName="לחץ כאן!" />
        </div>
      </div>
    </>
  )
}









