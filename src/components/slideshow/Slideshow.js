import Carousel from 'react-bootstrap/Carousel';


import slide1 from './insurance1.PNG'; // Tell Webpack this JS file uses this image
import slide2 from './insurance2.PNG'; // Tell Webpack this JS file uses this image
import slide3 from './insurance3.PNG'; // Tell Webpack this JS file uses this image

function Slideshow(props) {

    return (
        <div className="Slideshow container mb-3">
            <Carousel variant="dark">

                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Proud to offer insurances for all needs</h5>
                        <p>Easy to use , proud and Trusted company.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Easiest way to get the insurance</h5>
                        <p>Discuss with our agents</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Talk with our Agents</h5>
                        <p>Check your needs and Talk to our agents</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;
