import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AboutUs(props) {

    return (
        <div className="AboutUs container mb-3">
            <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card className="h-100">
                        <Card.Img variant="top" src="/images/ppVan.png" />
                            <Card.Body>
                                <Card.Title>About Us</Card.Title>
                                <Card.Text>
                                At Pawsitively Pawsh, we provide the highest quality grooming services for most pets
at your home or office in one of our state-of-the-art, fully self-contained mobile grooming salons.  Most services done typically in one hour - varies on size and species of your Pet.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                        <Card.Img variant="top" src="/images/ppBlackPaw.PNG"  />
                            <Card.Body>
                                <Card.Title>What to Expect</Card.Title>
                                <Card.Text>
                                Some of the added conveniences of mobile grooming over a traditional salon include:
You avoid taking time from your busy schedule to drop off and pick up your pet(s)…We come to You!
Your pet avoids the stress of traveling in the car and being left in a strange environment.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>   
                    <Col>
                        <Card className="h-100">
                        <Card.Img variant="top" src="/images/dogwash.jpg"  />
                            <Card.Body>
                                <Card.Title>Meet Our Groomers</Card.Title>
                                <Card.Text>
                                Our groomers.
                                Ashley
                                Todd
                                Deb
                                Gabe
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
}

export default AboutUs;
