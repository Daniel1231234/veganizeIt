
import bgcImg from "../assets/imgs/img-bgc.jpg"


export function HomePage() {


  return (
    <div className="home-page" style={{backgroundImage: "url(" + bgcImg + ")"}}>
      <h1>Home</h1>
    </div>
  )
}