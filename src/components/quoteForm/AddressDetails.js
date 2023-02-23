import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'


class AddressDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        if (this.props.inputValues.address === '') {
            alert('Enter Address ')
        }
        else if (this.props.inputValues.city === '') {
            alert('Enter City name ')
        }
        else if (this.props.inputValues.state === '') {
            alert('Enter State name ')
        }
        else if (this.props.inputValues.zip === '' || this.props.inputValues.zip > 99999) {
            alert('Enter proper Zip Code ')
        }
        else {
            e.preventDefault();
            this.props.nextStep();
        }
    };


    render() {
        return (<Container>
            <Jumbotron style={{ padding: '1rem' }}>
                <h1 classname="text-center">Get a Quote</h1>
                <Form>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={this.props.inputValues.address}
                            name="address"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.city}
                                name="city"
                                required
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" name="state" defaultValue={this.props.inputValues.state} onChange={this.props.handleChange}>
                                <option value="">Select</option>
                                <option value="MA">Massachusetts</option>
                                <option value="NH">New Hampshire</option>
                                <option value="CT">Connecticut</option>
                                <option value="ME">Maine</option>
                                <option value="VT">Vermont</option>
                                <option value="RI">Rhode Island</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={this.props.inputValues.zip}
                                name="zip"
                                required
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>

                    </Form.Row>

                    <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                    <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                </Form>
            </Jumbotron>
        </Container>
        );
    }
}

export default AddressDetails;