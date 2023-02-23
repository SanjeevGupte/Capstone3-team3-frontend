import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { Button, Container, Form, CardColumns, Col, Card, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Home from "../../pages/home/Home";

<Route exact path="/" component={Home} />

class QuotePresent extends Component {
    buyPolicy = (e) => {
        
            alert('Policy Bought ');
            
                   
    };

    render() {
        const { inputValues: { firstName, lastName, email, lob, age, address, city, state, zip, premium } } = this.props;
        console.log(firstName, lastName, email, lob, age, address, city, state, zip, premium);
        return (
            <Container>
                <Jumbotron style={{ padding: '1rem' }}>
                    <p><h1 class="p-3 mb-2 bg-primary text-dark text-center">Your Quote with the Premium is ${premium}</h1></p>
                    <Form >

                        <Form.Row>
                            <Form.Group as={Col} controlId="formFirstName">
                                <Form.Label className="label text-primary">First Name</Form.Label>
                                <Form.Control type="text" defaultValue={firstName}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formLastName">
                                <Form.Label className="label text-primary">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={lastName}
                                    readOnly
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="label text-primary">Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={email}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label className="label text-primary">Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={address}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formCity">
                                <Form.Label className="label text-primary">City</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={city}
                                    readOnly
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formState">
                                <Form.Label className="label text-primary">State</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={state}
                                    readOnly
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formZip">
                                <Form.Label className="label text-primary">Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={zip}
                                    readOnly
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formage">
                                <Form.Label className="label text-primary">Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={age}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formLOB">
                                <Form.Label className="label text-primary">LOB</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={lob}
                                    readOnly>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Jumbotron>


                <Container className="text-center">
                <CardColumns >
                    <Card border="primary" style={{ width: "18rem" }} >
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col>
                                    <Card.Title>Your Quote is : ${premium} </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Img variant="top" src="https://www.gninsurance.com/wp-content/uploads/2012/05/Blue-man-need-a-quote.jpg" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    </CardColumns>
                </Container>
                <Button variant="primary" onClick={this.buyPolicy}>Buy Policy</Button>
            </Container>


        )
    }
}

export default QuotePresent;