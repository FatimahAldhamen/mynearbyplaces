import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const Details = () => {
    let { id } = useParams();
    let [reviews, setReviews] = useState([]);
    const submitHandler = async () => {
        const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/place/" + id + "/review";
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                stars: document.getElementById("rating").value,
                body: document.getElementById("reviewText").value
            })
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Review Added!");
            })
        window.location.reload();
    };

    useEffect(() => {
        async function fetchData() {
            const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/place/" + id + "/review";
            await fetch(URL, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    setReviews([data]);
                });
        }
        fetchData();
    }, [id]);

    return (
        <div>
            <h1 className="text-center font-weight-light my-4">Reviews</h1>
            <div className='reviews-container'>
                {reviews.map((review, key) => (
                    <Card key={key}>
                        <Card.Header>{review.name} <span className="rating-stars">({review.stars}) </span></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {review.body}
                                </p>

                            </blockquote>
                        </Card.Body>
                    </Card>))}

            </div>
            <div className="form-container">
                <Form >
                    <Row>

                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control id="name" type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Rating</Form.Label>
                            <Form.Control id="rating" as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option value="★">1</option>
                                <option value="★★">2</option>
                                <option value="★★★">3</option>
                                <option value="★★★★">4</option>
                                <option value="★★★★★">5</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>
                    <Form.Group >
                        <Form.Label>Write a Review</Form.Label>
                        <Form.Control id="reviewText" as="textarea" rows={3} />
                    </Form.Group>
                    <Button onClick={submitHandler} variant="primary">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Details
