import { Button } from "bootstrap"
import { Link } from "react-router-dom"
import { CarouselHome } from "../cmps/UI/Carousel.jsx"


export function HomePage() {
  return (
    <div className="home-page">
      <div className="inpts flex column md-font" style={{ padding: '5rem' }}>
        <Link to="/veganizeIt/isvegan">זה טבעוני?</Link>
        <Link to="/veganizeIt/scanner">סרוק ברקוד</Link>
      </div>
      {/* <CarouselHome /> */}
    </div>
  )
}