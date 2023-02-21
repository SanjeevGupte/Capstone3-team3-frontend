import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import APIService from "../../apiService";

class Confirmation extends Component{
        
    client = new APIService();

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
        console.log(this.props.inputValues)
        this.client.createQuote({
                        "firstName": this.props.inputValues.firstName,
                        "lastName": this.props.inputValues.lastName,
                        "email" : this.props.inputValues.email,
                        "Address" : this.props.inputValues.address,
                        "age": 30,
                        "LOB" : "AUTO",
                        "VIN": "E-CAR",
                        "Premium" : Math.floor(Math.random() * 200) + 100
                        }) 
        console.log("quote created")
        
    }

    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip }} = this.props;
        console.log(firstName, lastName, email, address, city, state, zip);
        return(
            <Container>
                <h1 classname="text-center">Get a Quote</h1>
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