import React from 'react';

const AddPlace = () => {
    return (
        <div className="mb-4">
            <h1 className="text-center my-4 font-weight-light">Add Places</h1>
            <form action="" className="custom-form">
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name" required/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Location" required/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Type" required/>
                    </div>
                    <button className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlace;
