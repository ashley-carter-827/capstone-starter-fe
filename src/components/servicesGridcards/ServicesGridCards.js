import Header from "../../components/header/Header";
import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import { isAuthenticated } from "../../utils/authHelper";

class ServicesGridCards extends Component {
    state = {
        services: []
    }
    componentDidMount(){

        const apiURL = process.env.REACT_APP_API_URL
        
        fetch(`${apiURL}/api/services`)
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
            <div className="container mb-3">
                <Header isAuthenticated={isAuthenticated()}/>
                <Row xs={1} lg={3} className="g-4">
                    {this.state.services.map((service, idx) => (
                        <Col>
                            <Card className="h-100 mb-5 p-3 d-flex justify-content-between" border="light">
                                <Card.Img class="img" variant="top" src = {`./images/${service.serviceImage}`}/>
                                <Card.Body class="text-center">
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
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer class="text-center">
                                        <br/>
                                        <a href="/appointment" class="btn btn-dark">Book Now!</a>
                                        <br/>
                                        <br/>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
export default ServicesGridCards;