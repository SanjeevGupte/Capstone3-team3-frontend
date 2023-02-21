import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import QuotePresent from "./QuotePresent";
import Container from 'react-bootstrap/Container';
import APIService from "../../apiService";

class MultiStepForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        premium: Math.floor(Math.random() * 200) + 100
    }

    client = new APIService();

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { step, firstName, lastName, email, address, city, state, zip ,premium} = this.state;
        const inputValues = { firstName, lastName, email, address, city, state, zip ,premium};

        switch (step) {
            case 1:
                return <UserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 2:
                return <AddressDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 3:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                />
            case 4:
                return <QuotePresent
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                />

        }
    }
}

export default MultiStepForm;