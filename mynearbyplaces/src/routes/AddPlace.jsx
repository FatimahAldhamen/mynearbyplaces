import React, { useState } from 'react';


const AddPlace = () => {
    const [details, setDetails] = useState({ name: '', place: '', location: '' })
    const submitHandler = async (event) => {
        const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/add/place";
        event.preventDefault();
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: details.name,
                place: details.place,
                location: details.location
            })
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Place Added Successfully!", data);
            })
        window.location.reload();
    }
    return (
        <div className="mb-4">
            <h1 className="text-center my-4 font-weight-light">Add Places</h1>
            <form onSubmit={submitHandler} className="custom-form">
                <div className="form-row">
                    <div className="col">
                        <input id="name" type="text" className="form-control" placeholder="Name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
                    </div>
                    <div className="col">
                        <input id="location" type="text" className="form-control" placeholder="Location" onChange={e => setDetails({ ...details, location: e.target.value })} value={details.location} required />
                    </div>
                    <div className="col">
                        <input id="place" type="text" className="form-control" placeholder="place" onChange={e => setDetails({ ...details, place: e.target.value })} value={details.place} required />
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlace;
