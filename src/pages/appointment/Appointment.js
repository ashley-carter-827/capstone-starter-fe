import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import Alert from 'react-bootstrap/Alert';
import {generateAuthHeader} from "../../utils/authHelper";
import { Redirect, withRouter } from "react-router-dom";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

class Appointment extends Component {

    state = {
        errorMessage: null,
        success: false,
        formData: {
            appointmentPetName: "",
            appointmentGroomer: "",
            appointmentServices: "",
            appointmentLocation: "",
            appointmentDate: new Date(),
            appointmentTime: new Date()
        }
    }

    handleChange = (event) => {
        let formData = { ...this.state.formData };
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
    }

    handleDateChange = (date) => {
        let formData = {...this.state.formData};
        formData.appointmentDate = date
        this.setState({formData});
    }

    handleTimeChange = (date) => {
        let formData = {...this.state.formData};
        formData.appointmentTime = date
        this.setState({formData});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        //get API url from the environment variables
        const apiURL = process.env.REACT_APP_API_URL
        
        //use fetch to make a POST request with the Data from state that has been populated from
        //the data in the form
        fetch(`${apiURL}/api/appointment`, {
            method: "POST", //make sure whe set our method to POST when creating records
            headers: {
                'content-type': 'application/json', //make sure we set the content-type headers so the API knows it is recieveing JSON data
                ...generateAuthHeader()
            },
            body: JSON.stringify(this.state.formData) //send our data form state int he body of the request
        })
        .then((response) => response.json()) // on success, turn the respons into JSON so we can work with it
        .then((data) => {
            const message = "Appointment has been successfully scheduled!"
            //programatically redirect to another route on success
            this.props.history.push(`/profile?message=${message}`)
        })
        .catch(e => console.log(e.message)) //console.log any errors if the previous steps fail

    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const flashMessage = params.get('message');
        if (this.state.success) {
            const redirect = params.get('redirect');
            return <Redirect to={(redirect) ? redirect : "/profile"} />
        }
        return (
            <div className="AppointmentForm">

                <Header isAuthenticated={this.props.isAuthenticated} />
                <Footer />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {flashMessage && <Alert variant="info">{flashMessage}</Alert>}
                </div>

                <AppointmentForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleDateChange={this.handleDateChange}
                    handleTimeChange={this.handleTimeChange}
                    formData={this.state.formData}
                />

            </div>
        )
    }
}


export default mustBeAuthenticated(Appointment);
