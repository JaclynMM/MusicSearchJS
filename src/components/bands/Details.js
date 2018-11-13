import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
state = {
    first_name: {},
    last_name: {},
    hometown: {},
    twitter_id: {},
}

componentDidMount() {
    axios
        .get(`http://127.0.0.1:8000/search-artist/`)
        .then(res => {
            console.log(res.data);
            this.setState({artist_id: res.data});
        })
        .catch(err => console.log(err))
    }

    render () {
        return (
            <div>
                <h1> Details </h1>
            </div>
        )
    }

}

export default Details;