import { Link } from "react-router-dom"


export const LinkCard = (props) => {


  return (
    <div className="flip-card-container card-link">
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <figcaption>
              { props.title}
            </figcaption>
          </figure>
          <img src={props.svg} alt="" />
        </div>
        <div className="card-back">
           <Link to={props.dir}>{props.dirName }</Link>
          <div className="design-container">
            <span className="design design--1"></span>
            <span className="design design--2"></span>
            <span className="design design--3"></span>
            <span className="design design--4"></span>
            <span className="design design--5"></span>
            <span className="design design--6"></span>
            <span className="design design--7"></span>
            <span className="design design--8"></span>
        </div>
        </div>
      </div>
    </div>
  )
}


