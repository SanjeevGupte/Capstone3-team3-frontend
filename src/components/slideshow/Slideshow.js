import Jumbotron from 'react-bootstrap/Jumbotron'
import { Form, Button, Col, Container, Row, Image, Card, CardColumns } from 'react-bootstrap';
import img from './hero_image1.png';
import { Link } from 'react-router-dom';
import logo from './capstone_logo.png';

function Slideshow(props) {

    return (
        <Container>
            <Jumbotron style={{ padding: '1rem' }}>
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
            <Row><hr></hr></Row>
            <Container>
                <Row>
                    <Col>
                        <h2> What is ESS Insurance</h2>
                    </Col>
                    <Col>
                        <p>We know you want affordable choices when it comes to insurance. ESS agents can
                            quote trusted national and regional insurance partners with products that cover your
                            family, income and assets like a home, car, or life. Our local agents are in
                            your community and can guide you through the complex process of finding the right insurance
                            coverage.</p>
                    </Col>
                </Row>
            </Container>
            <Row><hr></hr></Row>
            <Row><hr></hr></Row>
            <Container>
                <h3 className="text-center"> Types of insurance we offer </h3>
            </Container>

            <CardColumns >
                <Card border="primary">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col>
                                <Card.Title>Auto Insurance</Card.Title>
                            </Col>
                            <Col>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kfVzVqOuolyOa1ArqF99uGdohkXGT12Dvg&usqp=CAU" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card border="primary">
                    <Card.Body >
                        <Row className="align-items-center">
                            <Col>
                                <Card.Title>Home Insurance</Card.Title>
                            </Col>
                            <Col>
                                <Card.Img variant="top" src="data:image/png;base64,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" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card border="primary">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col>
                                <Card.Title>Life Insurance</Card.Title>
                            </Col>
                            <Col>
                                <Card.Img variant="top" src="data:image/png;base64,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" />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </CardColumns>
            <Row><hr></hr></Row>
            <Row><hr></hr></Row>
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
