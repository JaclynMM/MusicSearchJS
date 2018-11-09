import React from 'react';


 const Bands = (props) => {
    const { members, name } = props.artist;
    console.log(props);

    return (
        <div className="col-md-8 text-center mx-auto">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{name} {members}</h5>
                    <p className="card-text">
                        <strong><i className="fas fa-"></i> Name</strong>: {name}
                        {/* <br></br>
                        <strong><i className="fab fa-"></i> Members</strong>: {members} */}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Bands;