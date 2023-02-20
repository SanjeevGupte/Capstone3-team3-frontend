import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert';

import { connect } from "react-redux";
import * as authActions from "../../redux/actions/auth";
import { bindActionCreators } from "redux";

import AuthService from "../../authService";
import { Redirect, withRouter } from "react-router-dom";
import LoginForm from "../../components/quoteForm/QuoteForm";
import Header from "../../components/header/Header";

class Quote extends Component {

    state = {
        errorMessage: null,
        success: false,
        formData: {
            email: "",
            password: ""
        }
    }

    client = new AuthService();

    handleChange = (event) => {
        let formData = { ...this.state.formData };
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
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
            this.props.actions.quote(response.data)
            this.setState({ success: true })
        })
            .catch((error) => {
                this.setState({ errorMessage: "Invalid Quote Combination" })
            })
    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const flashMessage = params.get('message');
        if (this.state.success) {
            const redirect = params.get('redirect');
            return <Redirect to={(redirect) ? redirect : "/quote"} />
        }
        return (
            <div className="QuoteForm">

                <Header />

                <div className="container">
                    {this.state.errorMessage && <Alert variant="danger">{this.state.errorMessage}</Alert>}
                    {flashMessage && <Alert variant="info">{flashMessage}</Alert>}
                </div>

                <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    formData={this.state.formData}
                />

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
)(withRouter(Quote));
