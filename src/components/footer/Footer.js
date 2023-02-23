import Jumbotron from 'react-bootstrap/Jumbotron'
import { Form, Button, Col, Container, Row, Image, Card, CardColumns } from 'react-bootstrap';
import img from './hero_image1.png';
import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <Container>
            <Container className = "jumbotron-fluid">
            <Jumbotron className = "bg-primary" style={{ padding: '1rem' }}>
                <Row>
                    <Col >
                        <h6 className= "text-white"> ESS Insurance </h6>
                        <Image className="d-block w-25 h-50 justify-content-md-center"
                            src={logo}
                            alt="logo image" />
                    </Col>
                    <Col>
                        <h6 className= "text-white"> Get a quote today </h6>
                        <p><Link className= "text-white" to="/agent">Find an Agent</Link></p>
                        <p><Link className= "text-white" to="/quote">Get Quote</Link></p>
                    </Col>
                    <Col>
                        <h6 className= "text-white"> Contact Us </h6>
                        <p className= "text-white"> Email: ESS_CustomerService@ESSInsurance.com</p>
                        <p className= "text-white"> Phone Number: 1-888-888-8888</p>
                    </Col>
                </Row>
                </Jumbotron>

            </Container>
        </Container>
        


    );
}

export default Slideshow;
