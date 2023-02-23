import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
import APIService from "../../apiService";
import Jumbotron from 'react-bootstrap/Jumbotron'

class Confirmation extends Component {

    client = new APIService();

    back = (e) => {
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
            "email": this.props.inputValues.email,
            "Address": this.props.inputValues.address,
            "City": this.props.inputValues.city,
            "State": this.props.inputValues.state,
            "Zipcode": this.props.inputValues.zip,
            "age": this.props.inputValues.age,
            "LOB": this.props.inputValues.lob,
            "Premium": this.props.inputValues.premium
        })
        console.log("quote created")
        this.props.nextStep();
    }

    render() {
        const { inputValues: { firstName, lastName, email, lob, age, address, city, state, zip, premium } } = this.props;
        console.log(firstName, lastName, email, lob, age, address, city, state, zip);
        return (
            <Container>
                <Jumbotron style={{ padding: '1rem' }}>
                    <h1 class="p-3 mb-2 bg-primary text-dark text-center">  Get a Quote</h1>
                    <p class="p-3 mb-2 bg-info text-white text-center">Confirm if the following details are correct.</p>

                    <Form >

                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label className="label text-primary">First Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.inputValues.firstName}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label className="label text-primary">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.lastName}
                                    readOnly
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="label text-primary">Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={this.props.inputValues.email}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label className="label text-primary">Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.address}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label className="label text-primary">City</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.city}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formState">
                                <Form.Label className="label text-primary">State</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={this.props.inputValues.state}
                                    readOnly
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formZip">
                                <Form.Label className="label text-primary">Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.zip}
                                    readOnly
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formage">
                                <Form.Label className="label text-primary">Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.age}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLOB">
                                <Form.Label className="label text-primary">LOB</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.inputValues.lob}
                                    readOnly>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>

                    <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                    <Button variant="primary" onClick={this.createQuote}>Confirm</Button>
                </Jumbotron>
            </Container>

        )
    }
}

export default Confirmation;