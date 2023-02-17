import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function GridCards({dataFromParent}) {
    console.log(dataFromParent)
    return (
        <div data-testid="gridContainer" className="GridCards container mb-3">
            <Row xs={1} lg={2} className="g-4">
                {dataFromParent.map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={dataFromParent[idx].profileImage.data} />
                            <Card.Body>
                                <Card.Title>{dataFromParent[idx].firstName} {dataFromParent[idx].lastName}</Card.Title>
                                <Card.Subtitle>{dataFromParent[idx].Title} </Card.Subtitle>
                                <Card.Text> 
                                    <p>E-Mail: {dataFromParent[idx].email} </p>
                                    <p>Phone Number: {dataFromParent[idx].phoneNumber} </p>
                                    <p>State: {dataFromParent[idx].state}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default GridCards;
