import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import img from './hero_image1.png'
import React, { Component } from "react";

import * as authActions from "../../redux/actions/customAPI";
import APIService from "../../apiService";

export class Hero extends Component {

    state = {
        errorMessage: null,
        success: false,
        formData: {
            state: ""
        }
    }

    client = new APIService();

    handleChange = (event) => {
        let formData = { ...this.state.formData };
        formData[event.target.id] = event.target.value;
        this.setState({ formData });
        console.log("handle change happening")
        console.log(event.target.value)
        //This calls the API getAgent with the state; The response has the data 
            this.client.findAgent(event.target.value).then((response) => {
            console.log(response)
            // Call API 
            // handle success
            // localStorage.setItem('agentcards',
            //     JSON.stringify({
            //         Title: response.data.Title,
            //         email: response.data.email,
            //         firstName: response.data.firstName,
            //         lastName: response.data.lastName,
            //         phoneNumber: response.data.phoneNumber,
            //         profileImage: response.data.profileImage
            //     })
            //     );
                console.log("Card Data " + response.data)



               
        })
    }
            

render() {

                return(
        <Jumbotron fluid>
            <Container>
                <Row>
                    <Col>
                        <h1>Find a local agent</h1>
                        <p>
                            ESS Insurance Agency is the largest Personal Lines agency in the U.S. by
                            premium with over 2,000 local agents and 180 offices. ESS is owned by
                            ESS Investment Group, a Fortune 25 company.
                        </p>
                    </Col>
                    <Col >

                        <Image
                            className="d-block w-50 h-75 float-right"
                            src={img}
                            alt="hero image"
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <div>
                        <label for="states">Choose a State:</label>
                        <select onChange={this.handleChange} name="State" id="state">
                            <option value="">Select</option>
                            <option value="MA">Massachusetts</option>
                            <option value="NH">New Hampshire</option>
                            <option value="CT">Connecticut</option>
                            <option value="ME">Maine</option>
                        </select>
                    </div>
                </Row>
            </Container>
            <Container>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Agent</Card.Title>
    <Card.Text>
      phoneNumber : 
    </Card.Text>
  </Card.Body>
</Card>
            </Container>
        </Jumbotron>

    )
        }
}

export default Hero;