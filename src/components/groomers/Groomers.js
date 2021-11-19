import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Groomers(props) {

    return (
        <div className="Groomers container mb-3">
            <Row xs={1} lg={4} className="g-4">
                    <Col>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>All Clean Ashley</Card.Title>
                                <Card.Text>
                                Ashley is the president and co-founder for Pawsitively Pawsh. She envisioned a 
place where our furry family members could go to feel Pawsitively pampered and 
to get professional spa-like services. She loves all pets and is committed to 
giving your pet a Pawsitivley perfect experience.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Groomer Gabe</Card.Title>
                                <Card.Text>
                                Gabe is a grooming machine. He specializes in all furry animals big or small. 
He is the tri-county award winning groomer of the year. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>   
                    <Col>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Do it all Deb</Card.Title>
                                <Card.Text>
                                Deb has been a groomer for 7 years and has a passion for all pets. If it is walks,
crawls, slithers, or hops she has you covered. Ask us about our eccentric pet services
and we will hook you up with Deb. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Tailwag Todd</Card.Title>
                                <Card.Text>
                                Todd specializes in all dog breeds and has 8 years of dog grooming experience.
The dogs love him because he has all the good nummy treats.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>   
            </Row>
        </div>
    );
}

export default Groomers;
