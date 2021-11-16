import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GridCards(props) {

    return (
        <div className="GridCards container mb-3">
            <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/images/lipstickMonkey.jpg" />
                            <Card.Body>
                                <Card.Title>Maxine M</Card.Title>
                                <Card.Text>
                                    The mobile pet grooming business is magnificent.  I'd highly recommend.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/images/martiniDog.png" />
                            <Card.Body>
                                <Card.Title>Fernando F.</Card.Title>
                                <Card.Text>
                                    Fabulous!!  Relaxing afternoon of pampering.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="/images/sloth.png" />
                            <Card.Body>
                                <Card.Title>Samantha S.</Card.Title>
                                <Card.Text>
                                    This was such an amazing experience.  Very professional.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
}

export default GridCards;
