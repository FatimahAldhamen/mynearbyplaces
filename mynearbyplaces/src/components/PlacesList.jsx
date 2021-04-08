import React from 'react';
import {Table }from "react-bootstrap";
import  { useHistory } from 'react-router-dom';
import '../App.css';



const PlacesList = () => {
    let history = useHistory();

    const handlePlaceClick = (id) =>{
        history.push(`/${id}/details`)
    }
    const handleUpdateClick = (e,id) =>{
        e.stopPropagation();
        history.push(`/${id}/update`)
    }
    const handleRemoveClick = (e,id) =>{
        e.stopPropagation();
        console.log("Removed")
    }
    return (
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
                <tr onClick={()=>handlePlaceClick(1)}>
                        <td>1</td>
                        <td>Banocci</td>
                        <td>California</td>
                        <td>Resturant</td>
                        <td>0 Reviews</td>
                        <td><button onClick={(e)=>handleUpdateClick(e,1)} className="btn btn-primary">Update</button></td>
                        <td><button onClick={(e)=>handleRemoveClick(e,2)} className="btn btn-primary">Remove</button></td>
                    </tr>
                     <tr onClick={()=>handlePlaceClick(2)}>
                        <td>2</td>
                        <td>Banocci</td>
                        <td>California</td>
                        <td>Resturant</td>
                        <td>0 Reviews</td>
                        <td><button onClick={(e)=>handleUpdateClick(e,1)} className="btn btn-primary">Update</button></td>
                        <td><button onClick={(e)=>handleRemoveClick(e,2)} className="btn btn-primary">Remove</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PlacesList
