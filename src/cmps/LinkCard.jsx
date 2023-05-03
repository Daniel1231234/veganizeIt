import { Link } from "react-router-dom";

export const LinkCard = ({title, svg, onClick, href}) => {
  
  return (
    <div className="flip-card-container card-link">
      <div className="flip-card">
        <div className="card-front">
          <figure>
            <figcaption>{title}</figcaption>
          </figure>
          {svg && <img src={svg} alt={title} />}
        </div>
        <div className="card-back">
          {href ? <Link to={href}>לחץ כאן</Link> :  <button className="btn-action" onClick={onClick}>לחץ כאן</button>}
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
  );
};
