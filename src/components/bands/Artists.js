import React from 'react';
import { Link } from 'react-router-dom';

 const Artists = (props) => {
    const { first_name, last_name } = props.artist;
    console.log(props);
    
    return (
        <div className="col-md-5 text-center mx-auto">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{first_name} {last_name}</h5>

                    <Link to={`/artist_detail/${props.artist.id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"> Find out more </i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Artists;