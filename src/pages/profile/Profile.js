import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getUserEmail } from "../../utils/authHelper";
import {generateAuthHeader} from "../../utils/authHelper";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const apiURL = process.env.REACT_APP_API_URL
class Profiles extends Component {
    state = {
        appointments:[]
    }
    componentDidMount(){ 
        fetch(`${apiURL}/api/appointment?userEmail=${getUserEmail()}`, {
            method: "GET", //make sure whe set our method to GET when creating records    
            headers: {
                'content-type': 'application/json', //make sure we set the content-type headers so the API knows it is recieveing JSON data 
                ...generateAuthHeader()
            },
            body: JSON.stringify(this.state.formData) //send our data form state int he body of the request */
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)                
            this.setState({
                appointments:data
            });
        })            
        .catch((error) => {
            console.log(error)
        })
    };
    render() {
        return (
            <div className="container mb-3">
                <Row xs={1} lg={3} className="g-4">
                    {this.state.appointments.map((appointment, idx) => (
                        <Col>
                            <Card className="h-100" border="light">
                                <Card.Img variant="top" src = "IMAGE.jpg"/>
                                <Card.Body class="text-center">
                                    <Card.Title>{appointment.appointmentDate}</Card.Title>
                                    <Card.Text>
                                        <b>Description:</b> {appointment.appointmentTime}
                                        <br/>
                                        <br/>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Header isAuthenticated={this.props.isAuthenticated}/>
                <Footer/>
            </div>
        );
    }
}
export default mustBeAuthenticated(Profiles);