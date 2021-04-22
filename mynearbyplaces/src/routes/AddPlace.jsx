import React from 'react';

const submitHandler=async (event)=>{
    const URL = "http://localhost:3001/add/place";
    event.preventDefault();
    await fetch(URL, { method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: document.getElementById("name").value,
    place: document.getElementById("place").value,
     location: document.getElementById("location").value})})
    .then((res) => res.json())
    .then((data) => {
         alert("Place Added:\nId: "+data.id+"\nName: "+data.name+"\nLocation: "+data.location+"\nPlace: "+data.place);
})
    window.location.reload();
}

const AddPlace = () => {
    return (
        <div className="mb-4">
            <h1 className="text-center my-4 font-weight-light">Add Places</h1>
            <form onSubmit={submitHandler} className="custom-form">
                <div className="form-row">
                    <div className="col">
                        <input id="name" type="text" className="form-control" placeholder="Name" required/>
                    </div>
                    <div className="col">
                        <input id="location" type="text" className="form-control" placeholder="Location" required/>
                    </div>
                    <div className="col">
                        <input id="place" type="text" className="form-control" placeholder="place" required/>
                    </div>
                    <button  className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlace;
