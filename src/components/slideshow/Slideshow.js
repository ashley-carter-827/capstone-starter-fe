import Carousel from 'react-bootstrap/Carousel';

function Slideshow(props) {

    return (
        <div className="Slideshow container mb-3">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/images/pawshDog.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Pooch Pampering</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/images/DogWash2.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Baths</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto"
                        src="/images/cucumberDog.jpg"
                        alt="Third Slide"
                    />
                    <Carousel.Caption>
                        <h5>Complete Spa Packages</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;
