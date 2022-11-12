import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'

export function CarouselHome() {
  return (
    <Carousel variant="white">
      <Carousel.Item interval={2000}>
        <Image
          className="d-block square-3 "
          src="https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block square-3 "
          src="https://images.unsplash.com/photo-1519996409144-56c88c9aa612?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <Image
          className="d-block square-3 "
          src="https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
