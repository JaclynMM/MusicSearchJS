import React from 'react';


 const Albums = (props) => {
    const { name, members } = props.album;
    console.log(props);

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{name} {members}</h5>
                    {/* <p className="card-text">
                        <strong><i className="fas fa-home"></i> Hometown</strong>: {hometown}
                        <br></br>
                        <strong><i className="fab fa-twitter"></i> Twitter</strong>: {twitter_id}
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Albums;