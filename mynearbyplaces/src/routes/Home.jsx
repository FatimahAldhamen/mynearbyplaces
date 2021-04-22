import React from 'react';
import "../App.css";
import { Carousel } from 'react-bootstrap';
import Header from "../components/Header";
import slide_1 from "../images/slide_1.jpg";
import slide_2 from "../images/slide_2.jpg";

const submitHandler=(event)=>{
    event.preventDefault();
    window.location="#/searchresults/"+document.getElementById("location").value+"/"+document.getElementById("place").value;
}

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
                <form onSubmit={submitHandler} className="custom-form">
                    <div className="form-group custom-form"><input type="text" placeholder="Place" id="place" required />
                        <input type="text" placeholder="Location" required id="location" /></div>
                    <button className="btn btn-primary">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Home
