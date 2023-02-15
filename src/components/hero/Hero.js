import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import img from './hero_image1.png'

function Hero(props) {


    return (
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
                                src= {img}
                                alt="hero image"
                            />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <div>
                        <label for="states">Choose a State:</label>
                        <select name="State" id="state">
                            <option value="">Select</option>
                            <option value="MA">Massachusetts</option>
                            <option value="NH">New Hampshire</option>
                            <option value="CT">Connecticut</option>
                            <option value="ME">Maine</option>
                        </select>
                    </div>
                </Row>
            </Container>
        </Jumbotron>

    )
}


export default Hero;