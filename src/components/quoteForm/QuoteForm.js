//import the boostrap compents we will be using on this form
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function QuoteForm({ handleChange, handleSubmit, formData, isUpdate }) {

    return (
        <div className="QuoteForm container" >
            <h3 className="text-center" >Get a Quote</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group controlId="firstName">
                        <Form.Label><strong>First Name:</strong></Form.Label>
                        <Form.Control size="sm" required minLength="2" maxLength="20" onChange={handleChange} value={formData.firstName} type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <Form.Label><strong>Last Name:</strong></Form.Label>
                        <Form.Control size="sm" required minLength="2" onChange={handleChange} value={formData.lastName} type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                
                    <Form.Group controlId="email">
                        <Form.Label><strong>E-mail:</strong></Form.Label>
                        <Form.Control size="sm" required onChange={handleChange} value={formData.email} type="email" placeholder="Email" {...(isUpdate && { disabled: true })} />
                        {isUpdate ? <Form.Text muted>E-mail is read-only and cannot be updated from here</Form.Text> : null}
                    </Form.Group>
                    
                
                
                    <Form.Group controlId="Address">
                        <Form.Label><strong>Address:</strong></Form.Label>
                        <Form.Control size="sm" required minLength="5" onChange={handleChange} value={formData.lastName} type="text" placeholder="Address" />
                    </Form.Group>
                    <Form.Row>
                    <Form.Group controlId="VIN">
                        <Form.Label><strong>VIN:</strong></Form.Label>
                        <Form.Control size="sm" required minLength="5" onChange={handleChange} value={formData.lastName} type="text" placeholder="VIN" />
                    </Form.Group>
                    <Form.Group controlId="LOB">
                        <Form.Label>LOB</Form.Label>
                        <Form.Control size="sm" as="select">
                            <option>AUTO</option>
                            <option>HOME</option>
                            <option>MARINE</option>
                            <option>SHIPPING</option>
                            <option>LIFE</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default QuoteForm
