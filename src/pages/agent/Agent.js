import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

import { connect } from "react-redux";
import * as authActions from "../../redux/actions/auth";
import { bindActionCreators } from "redux";

import AuthService from "../../authService";
import { Redirect, withRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import { isAuthenticated } from "../../utils/authHelper";

class Login extends Component {

    state = {
        errorMessage: null,
        success: false,
        formData: {
            state: ""
        }
    }

    client = new AuthService();

    handleChange = (event) => {
        let formData = { ...this.state.formData };
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
        console.log("handle change happening")
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.client.login(this.state.formData).then((response) => {
            // handle success
            localStorage.setItem('auth',
                JSON.stringify({
                    token: response.data.token,
                    email: response.data.email
                })
            );
            this.props.actions.login(response.data)
            this.setState({ success: true })
        })
            .catch((error) => {
                this.setState({ errorMessage: "Invalid Username/Password Combination" })
            })
    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const flashMessage = params.get('message');
        // if (this.state.success) {
        //     const redirect = params.get('redirect');
        //     return <Redirect to={(redirect) ? redirect : "/home"} />
        // }
        return (
            <div className="AgentForm">

            <div className="Home">
                    <Header isAuthenticated={isAuthenticated()} />
                    <Hero 
                       handleChange={this.handleChange} />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login));
