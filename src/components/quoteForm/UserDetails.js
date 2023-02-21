import React, { Component } from 'react';
import { Dropdown, Form, Button, Col, Container } from 'react-bootstrap';


class UserDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        if(this.props.inputValues.firstName === ''){
            alert('Enter First name ')
        }
        else if(this.props.inputValues.lastName === ''){
            alert('Enter Last name ')
        }
        else if( !(this.props.inputValues.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))){
            alert('Incorrect Email ')
        }
        else if (this.props.inputValues.age < 18 || this.props.inputValues.age >= 80) {
            alert('Age should be between 18 and 80 ')
        }
        else {
            e.preventDefault();
            this.props.nextStep();
        }
        
    };


    render() {
        return (<Container>
            <h1 classname="text-center">Get a Quote</h1>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formFirstName">
                        <Form.Label className="label">First Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={this.props.inputValues.firstName}
                            name="firstName"
                            required
                            onChange={this.props.handleChange}

                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formLastName">
                        <Form.Label className="label">Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={this.props.inputValues.lastName}
                            name="lastName"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                </Form.Row>



                <Form.Group controlId="formEmail">
                    <Form.Label className="label">Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        defaultValue={this.props.inputValues.email}
                        name="email"
                        required
                        onChange={this.props.handleChange}
                    />
                </Form.Group>


                <Form.Row>
                    <Form.Group controlId="formage">
                        <Form.Label className="label">Age</Form.Label>
                        <Form.Control
                            type="age"
                            defaultValue={this.props.inputValues.age}
                            name="age"
                            required
                            onChange={this.props.handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formLOB">
                        <Form.Label>LOB</Form.Label>
                        <Form.Control as="select" name="lob" defaultValue={this.props.inputValues.lob} onChange={this.props.handleChange}>
                            <option value="">Select</option>
                            <option value="AUTO">AUTO</option>
                            <option value="LIFE">LIFE</option>
                            <option value="HOME">HOME</option>
                        </Form.Control>
                    </Form.Group>

                </Form.Row>
                <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
            </Form>
        </Container>
        );
    }
}

export default UserDetails;