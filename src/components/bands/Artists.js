import React from 'react';
import { Link } from 'react-router-dom';


// this component pulls the artist name from the database and formats it in first and last name order
// then it creates the link to the detail page using the artist id

 const Artists = (props) => {
    const { first_name, last_name } = props.artist;
    console.log(props);
    
    return (
        <div className="col-md-5 text-center mx-auto">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">

                    {/* pull out the frist and last name for display */}
                    <h5>{first_name} {last_name}</h5>

                    {/* create link to eh artist detail page and button under name listing */}
                    <Link to={`/artist_detail/${props.artist.id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"> Find out more </i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Artists;