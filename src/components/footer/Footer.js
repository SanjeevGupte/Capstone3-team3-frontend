import Jumbotron from 'react-bootstrap/Jumbotron'
import { Form, Button, Col, Container, Row, Image, Card, CardColumns } from 'react-bootstrap';
//import img from './hero_image1.png';
import { Link } from 'react-router-dom';
import logo from '../slideshow/capstone_logo.png';

function Footer(props) {

    return (
<footer> 
            <Container >
                <Jumbotron className = "bg-primary" style={{ padding: '1rem' , postion: 'absolute', bottom: '0', width: '100%' }} >
 
                <Row>
                    <Col >
                        <h6 > ESS Insurance </h6>
                        <Image
                            src={logo}
                            alt="logo image" />
                    </Col>
                    <Col>
                        <h6> Get a quote today </h6>
                        <p><Link  href= "/agent">Find an Agent</Link></p>
                        <p><Link href= "/quote">Get Quote</Link></p>
                    </Col>
                    <Col>
                        <h6> Contact Us </h6>
                        <p> Email: ESS_CustomerService@ESSInsurance.com</p>
                        <p > Phone Number: 1-888-888-8888</p>
                    </Col>
                </Row>
                </Jumbotron> 
                        </Container>
                        </footer>


    );
}


export default Footer;
