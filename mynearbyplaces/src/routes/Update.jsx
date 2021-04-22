import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const Update = () => {
    const submitHandler = async (event) => {
        const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/place/" + details.id;
        event.preventDefault();
        await fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById("name").value,
                place: document.getElementById("place").value,
                location: document.getElementById("location").value
            })
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Place Updated:\nId: " + data.place.id + "\nName: " + data.place.name + "\nLocation: " + data.place.location + "\nPlace: " + data.place.place);
            })
        window.location.reload();
    }

    let [details, setDetails] = useState({ id: "", name: "", location: "", place: "" });
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const URL = "https://fatimahaldhamen-mynearbyplace.herokuapp.com/place/" + id;
            await fetch(URL, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    setDetails(data);
                });
        }
        fetchData();
    }, [id]);
    return (
        <div className="mb-4">
            <h1 className="text-center my-4 font-weight-light">Update {details.name}</h1>
            <form onSubmit={submitHandler} className='custom-form'>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" id="name" placeholder="Name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="location" placeholder="Location" onChange={e => setDetails({ ...details, location: e.target.value })} value={details.location} required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" id="place" placeholder="Place" onChange={e => setDetails({ ...details, place: e.target.value })} value={details.place} required />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Update
