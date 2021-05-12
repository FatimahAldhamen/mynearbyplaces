import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';



const Details = () => {
    let { id } = useParams();
    let [reviews, setReviews] = useState([]);
    const [details, setDetails] = useState({ name: '', stars: '', body: '' })
    const submitHandler = async () => {
        const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/place/" + id + "/review";
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: details.name,
                stars: details.stars,
                body: details.body
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
                            <Form.Control id="name" type="text" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} placeholder="Enter Name" required />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Rating</Form.Label>
                            <Form.Control id="rating" as="select" onChange={e => setDetails({ ...details, stars: e.target.value })} value={details.stars} defaultChecked="1">
                                <option value="" disabled>Choose...</option>
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
                        <Form.Control id="reviewText" onChange={e => setDetails({ ...details, body: e.target.value })} value={details.body} as="textarea" rows={3} required />
                    </Form.Group>
                    <Button onClick={submitHandler} variant="primary">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default Details
