import React from 'react';
import "../App.css";
import { Carousel } from 'react-bootstrap';
import Header from "../components/Header";
import slide_1 from "../images/slide_1.jpg";
import slide_2 from "../images/slide_2.jpg";

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel fade pause={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide_2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="container">
                <form action="/mynearbyplaces/#/searchresults" className="custom-form">
                    <div className="form-group custom-form"><input type="text" placeholder="Place" required />
                        <input type="text" placeholder="Location" required /></div>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Home
