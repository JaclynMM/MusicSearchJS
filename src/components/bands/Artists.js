import React from 'react';
// import { Link } from 'react-router-dom';


 const Artists = (props) => {
    const { first_name, last_name } = props.artist;
    console.log(props);

    return (
        <div className="col-md-8 text-center mx-auto">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{first_name} {last_name}</h5>
                    {/* <p className="card-text">
                        <strong><i className="fas fa-home"></i> Hometown</strong>: {hometown}
                        <br></br>
                        <strong><i className="fab fa-twitter"></i> Twitter</strong>: {twitter_id}
                    </p> */}

                    {/* <Link to={`${artist.artist_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"> Artist Details </i>
                    </Link> */}
        {/* setTextById = (artist, id) => {
            this.setState({
                Artists: this.state.Artists.map(Artists => {
                    if(Artists.Artist_id === id) {
                        return {
                        ...Artists,
                        } 
                    } else {
                    return Artists
                    }
                })
            }) */}
                </div>
            </div>
        </div>
    )
}

export default Artists;