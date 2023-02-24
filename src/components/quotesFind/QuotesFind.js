import Jumbotron from 'react-bootstrap/Jumbotron'
import { Form, Button, Col, Container, Row, Image, Card, CardColumns } from 'react-bootstrap';
import img from './Blue-man-need-a-quote.jpg';
import { Link } from 'react-router-dom';
import logo from './capstone_logo.png';
import React, { Component } from "react";

import * as authActions from "../../redux/actions/customAPI";
import APIService from "../../apiService";
import GridCardsQuote from '../gridcardsquote/GridCardsQuote';


export class QuotesFind extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: ""
            },
            agentData: []
        }
    }
    client = new APIService();

    handleChange = (event) => {
        let formData = { ...this.state.formData };
        console.log("In Handle Change Form Data " + formData);
        console.log("Input Values " + this.props.inputValues)
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
        console.log("handle change happening")
        console.log(event.target.value)
        //This calls the API GetQuote with the state; The response has the data 
        this.client.GetQuote(event.target.value).then((response) => {
            console.log(response.data)
            // let agentData = { ...this.state.agentData };
            let agentData = response.data
            this.setState({ agentData })
            console.log(agentData)

            // console.log("Card Data " + localStorage.getItem('agentcards'))
            // response.data.map((agentdata,index) => 
            //     console.log(index + " = " + agentdata.lastName));

        })
    }

    handleClick = (event) => {
        let formData = { ...this.state.formData };
        console.log("In Handle Click Form Data " );
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
        console.log("handle click happening")
        console.log("Value is : " + event.target.value)
        //This calls the API GetQuote with the state; The response has the data 
        this.client.GetQuote(event.target.value).then((response) => {
            console.log(response.data)
            // let agentData = { ...this.state.agentData };
            let agentData = response.data
            this.setState({ agentData })
            console.log(agentData)

            // console.log("Card Data " + localStorage.getItem('agentcards'))
            // response.data.map((agentdata,index) => 
            //     console.log(index + " = " + agentdata.lastName));

        })
    }

    render() {


        return (


            <Container>
                <Jumbotron style={{ padding: '1rem' }}>
                    <Row >
                        <Col>
                            <h1> ESS Insurance - Quote </h1>

                            <p> Fast , Reliable Quotes </p>



                        </Col>
                        <Col md="auto" >
                            <Image className="d-block w-100 h-75 justify-content-md-center"
                                src={img}
                                alt="hero image" />
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Form.Group controlId="formEmail">
                            <Form.Label className="label">Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email id here " />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-center">
                        <Button variant="primary" type="submit" icon="arrow-circle-right" onClick={this.handleClick}>Search</Button>
                    </Row>
                </Jumbotron>
                <Container className="jumbotron-fluid">
                    <Jumbotron className="bg-primary" style={{ padding: '1rem' }}>
                        <Row>
                            <Col >
                                <h6 className="text-white"> ESS Insurance </h6>
                                <Image className="d-block w-25 h-50 justify-content-md-center"
                                    src={logo}
                                    alt="logo image" />
                            </Col>
                            <Col>
                                <h6 className="text-white"> Get a quote today </h6>
                                <p><Link className="text-white" to="/agent">Find an Agent</Link></p>
                                <p><Link className="text-white" to="/quote">Get Quote</Link></p>
                            </Col>
                            <Col>
                                <h6 className="text-white"> Contact Us </h6>
                                <p className="text-white"> Email: ESS_CustomerService@ESSInsurance.com</p>
                                <p className="text-white"> Phone Number: 1-888-888-8888</p>
                            </Col>
                        </Row>
                    </Jumbotron>

                </Container>
                <GridCardsQuote dataFromParent={this.state.agentData} />
            </Container>


        )
    }
}

export default QuotesFind;
