import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';
import css from '../../index.css';

function GridCardsQuote({dataFromParent}) {
    console.log(dataFromParent)
    return (
        <div data-testid="gridContainer" className="GridCards container mb-3">
            <Row lg={2}>
                {dataFromParent.map((_, idx) => (
                    
                    <Col key={idx}>
                        <Card border='primary'>
                            
                            <Col>
                                <Card.Body>
                                    <Card.Title>{dataFromParent[idx].firstName} {dataFromParent[idx].lastName}</Card.Title>
                                    <Card.Subtitle>{dataFromParent[idx].Title} </Card.Subtitle>
                                    <br></br>
                                    <Card.Text> 
                                        <p>E-Mail: {dataFromParent[idx].email} </p>
                                        <p>LOB: {dataFromParent[idx].LOB} </p>
                                        <p>Premium: {dataFromParent[idx].Premium}</p>
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

export default GridCardsQuote;
