import Jumbotron from 'react-bootstrap/Jumbotron'
import { Form, Button, Col, Container, Row, Image } from 'react-bootstrap';
import img from './hero_image1.png';
import { Link } from 'react-router-dom';

function Slideshow(props) {

    return (
        <Container>
            <Jumbotron>
                <Row >
                    <Col>
                        <h1> Expert Insurance Advice from a member of your local community </h1>

                        <p> Talk to a local agent near you or start a quote online.</p>

                        <Link to="/agent"> <Button>Find an Agent</Button></Link>
                        <Link to="/quote"> <Button>Get Quote</Button></Link>
                    </Col>
                    <Col md="auto" >
                        <Image className="d-block w-100 h-75 justify-content-md-center"
                            src={img}
                            alt="hero image" />
                    </Col>
                </Row>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
                        <h2> What is ESS Insurance</h2>
                    </Col>
                    <Col>
                        <p>We know you want affordable choices when it comes to insurance. Comparion agents can
                            quote trusted national and regional insurance partners with products that cover your
                            family, income and assets like a home, car, boat or jewelry. Our local agents are in
                            your community and can guide you through the complex process of finding the right insurance
                            coverage.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h3> Types of insurance we offer - need to center </h3>
                </Row>
                <Row>
                    <p> Lines of Business - find icons?</p>
                </Row>
            </Container>
        </Container>
    );
}

export default Slideshow;
