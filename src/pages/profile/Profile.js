import React, { Component } from "react";
import mustBeAuthenticated from "../../redux/hoc/mustBeAuthenticated";
import ProfilesGridCards from "../../components/profileGridCards/profileGridCards";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getUserEmail } from "../../utils/authHelper";




class Profiles extends Component {
    
    render() {
        return (
            <div className="Profile">
                <Header isAuthenticated={this.props.isAuthenticated} />
                <h2>User Profile</h2>
                {
                    getUserEmail()
                }
            </div>
            
        );
    }
    
}

export default mustBeAuthenticated(Profiles);