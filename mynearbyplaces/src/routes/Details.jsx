import React from 'react';
import { Button,Card, Form, Col, Row } from 'react-bootstrap';

const Details = () => {
    return (
        <div>
            <h1 className="text-center font-weight-light my-4">Banocci Details</h1>
            <p className='reviews-container'>
                <Card>
                    <Card.Header>Mara <span className="rating-stars">(★★★★)</span></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Hannah <span className="rating-stars">(★★★)</span></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header>Adam <span className="rating-stars">(★★★★★)</span></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{' '}
                            </p>

                        </blockquote>
                    </Card.Body>
                </Card>
            </p>
            <div className="form-container">
                <Form >
                    <Row>

                    <Form.Group as={Col} controlId="formGroupEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    </Row>
                    <Form.Group  controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write a Review</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Details
