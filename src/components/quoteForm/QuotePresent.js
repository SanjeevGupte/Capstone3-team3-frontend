import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';

class QuotePresent extends Component{
    
    
    render(){
        const {inputValues: { firstName, lastName, email, address, city, state, zip ,premium}} = this.props;
        console.log(firstName, lastName, email, address, city, state, zip,premium);
        return(
            <Container>
                
                <p><h1>Your Quote with the Premium is ${premium}</h1></p>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Adress: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
                
                
                
            </Container>
            
        )
    }
}

export default QuotePresent;