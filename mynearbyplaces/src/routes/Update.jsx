import React from 'react'

const Update = () => {
    return (
        <div className="mb-4">
            <h1 className="text-center my-4 font-weight-light">Update Banocci</h1>
            <form action="" className='custom-form'>
                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Name" defaultValue="Banocci"  required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Location" defaultValue="California" required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Type" defaultValue="Resturant" required />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Update
