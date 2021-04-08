import React from 'react';
import "../App.css";

const header = () => {
    return (
        <div className="header">
            <h1 className="header-text text-center font-weight-light">Nearby Places</h1>
            <a className="btn btn-primary" href="/mynearbyplaces/#/addplace">Add Place</a>
        </div>
    )
}

export default header
