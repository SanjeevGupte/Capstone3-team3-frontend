import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import css from '../../index.css';

function GridCards({dataFromParent}) {
    console.log(dataFromParent)
    return (
        <div data-testid="gridContainer" className="GridCards container mb-3">
            <Row lg={2}>
                {dataFromParent.map((_, idx) => (
                    
                    <Col key={idx}>
                        <Card border='primary'>
                            <Col>
                                    <Card.Img variant="top"
                                    src={dataFromParent[idx].profileImage}
                                    style = {{width:100, height: 150, display:'block', margin: 'auto'}}/>
                            </Col>
                            <Col>
                                <Card.Body>
                                    <Card.Title>{dataFromParent[idx].firstName} {dataFromParent[idx].lastName}</Card.Title>
                                    <Card.Subtitle>{dataFromParent[idx].Title} </Card.Subtitle>
                                    <br></br>
                                    <Card.Text> 
                                        <p>E-Mail: {dataFromParent[idx].email} </p>
                                        <p>Phone Number: {dataFromParent[idx].phoneNumber} </p>
                                        <p>State: {dataFromParent[idx].state}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Card>
                        <br></br>
                    </Col>
                    
                ))}
            </Row>
        </div>
        
    );
}

export default GridCards;
