import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class ProfilesGridCards extends Component {
    state = {
        profiles: []
    }
    componentDidMount(){
        
        fetch("http://localhost:5000/api/profiles")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)                
                this.setState({
                    profiles: data
                });
            })            
            .catch((error) => {
                console.log(error)
            });
    }
    render() {
        return (
            <div className="ProfilesGridCards container mb-3">
                <Row xs={1} lg={3} className="g-4">
                    {this.state.profiles.map((profile, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="http://via.placeholder.com/300" />
                                <Card.Body>
                                    <Card.Title>{profile.profileName}</Card.Title>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}
export default ProfilesGridCards;