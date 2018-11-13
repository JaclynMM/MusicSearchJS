import React from 'react';
import { Link } from 'react-router-dom';

// import Artist from '../bands/Artist.js'

 const Artists = (props) => {
    const { first_name, last_name } = props.artist;
    console.log(props);


    
    return (
        <div className="col-md-5 text-center mx-auto">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{first_name} {last_name}</h5>

                    {/* <p className="card-text">
                        <strong><i className="fas fa-home"></i> Hometown</strong>: {hometown}
                        <br></br>
                        <strong><i className="fab fa-twitter"></i> Twitter</strong>: {twitter_id}
                    </p> */}

                    <Link to={`/search_artist/${props.artist.artist_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"> Find out more </i>
                        {/* {artist.id} */}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Artists;