import React from 'react';


 const Artists = (props) => {
    const { first_name, last_name } = props.artist;
    console.log(props);

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{first_name} {last_name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Artists;