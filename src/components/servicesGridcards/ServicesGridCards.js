import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class ServicesGridCards extends Component {
    state = {
        services: []
    }
    componentDidMount(){
        
        fetch("http://localhost:5000/api/services")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)                
                this.setState({
                    services: data
                });
            })            
            .catch((error) => {
                console.log(error)
            });
    };
    render() {
        return (
            <div className="ServicesGridCards container mb-3">
                <Row xs={1} lg={3} className="g-4">
                    {this.state.services.map((service, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src = {`./images/${service.serviceImage}`}/>
                                <Card.Body class="card text-center">
                                    <Card.Title>{service.serviceName}</Card.Title>
                                    <Card.Text>
                                        <b>Description:</b> {service.serviceDescription}
                                        <br/>
                                        <br/>
                                        <b>Duration:</b> {service.serviceDuration}
                                        <br/>
                                        <br/>
                                        <b>Price:</b> {service.servicePrice}
                                        <br/>
                                        <br/>
                                        <a href="#" class="btn btn-primary">Book Now!</a>
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
export default ServicesGridCards;