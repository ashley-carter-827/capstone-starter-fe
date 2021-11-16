import Carousel from 'react-bootstrap/Carousel';

function Slideshow(props) {

    return (
        <div className="Slideshow container mb-3">
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/pawshDog.png" heigth="50" width="100"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>Pooch Pampering</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/dogwash.jpg" width="100"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Baths</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/cucumberDog.jpg" width="100"
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
