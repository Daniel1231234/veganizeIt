import Carousel from 'react-bootstrap/Carousel';
import Ratio from 'react-bootstrap/Ratio';



const RatioWrapper = (props) => {
  return (
    <div className="wrapper-img">
     <img src={props.imgUrl} alt={props.alt} className="d-block mw-100"  />
    </div>
  )
   
 
}

export function CarouselHome() {
  return (
    <Carousel fade variant="white">
      <Carousel.Item >
        <RatioWrapper imgUrl="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt={"First slide"} />
      </Carousel.Item>
      <Carousel.Item >
        <RatioWrapper imgUrl="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item >
        <RatioWrapper imgUrl="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
