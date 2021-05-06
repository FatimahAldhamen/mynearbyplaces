import React from 'react';
import { Table } from "react-bootstrap";
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchResults = () => {
    let { place, location } = useParams();
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/places/" + location + "/" + place;
            await fetch(URL, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    setPlaces(data);
                });
        }
        fetchData();
    }, [location, place]);
    let history = useHistory();

    const handlePlaceClick = (id) => {
        history.push(`/${id}/details`)
    }
    const handleUpdateClick = (e, id) => {
        e.stopPropagation();
        history.push(`/${id}/update`)
    }
    const handleRemoveClick = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        fetch('https://fatimahaldhamen-mynearbyplace.herokuapp.com/delete/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data));
        alert("Place Removed Successfully!");
    }
    return (
        <div className="search-results">
            <h2 className="text-center font-weight-light my-4">Search Results</h2>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Place</th>
                            <th>Rating</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(places.length) ? (
                            places.map((place, index) => (
                                <tr onClick={() => handlePlaceClick(place.id)} key={index}>
                                    <td>{place.id}</td>
                                    <td>{place.name}</td>
                                    <td>{place.location}</td>
                                    <td>{place.place}</td>
                                    <td>{(place.rating != '') ? ('1') : ('0')} Review(s)</td>
                                    <td><button onClick={(e) => handleUpdateClick(e, place.id)} className="btn btn-primary">Update</button></td>
                                    <td><button onClick={(e) => handleRemoveClick(e, place.id)} className="btn btn-primary">Remove</button></td>
                                </tr>

                            ))
                        ) : (<tr  ><td colSpan="7" >No data found</td></tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SearchResults
