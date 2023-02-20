import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class Confirmation extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    createQuote = (e) => {
        console.log("Creating Quote")
        console.log()
        this.client.createQuote(this.state.inputValues)
    }

    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;
        console.log({inputValues: { firstName, lastName, email, address, city, state, zip }})
        return(
            <Container>
                <h1 class="text-center">Get a Quote</h1>
                <p>Confirm if the following details are correct.</p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Adress: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onClick = {this.createQuote}>Confirm</Button>
            </Container>
        )
    }
}

export default Confirmation;