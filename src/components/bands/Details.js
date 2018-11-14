import React, { Component } from 'react';
import axios from 'axios';

class Details extends Component {
state = {
    first_name: '',
    last_name: '',
    hometown: '',
    twitter_id: '',
}

componentDidMount() {
    axios
    .get(`http://127.0.0.1:8000/artist-search-id/?id=${this.props.match.params.id}`)
    .then(res => {
        console.log(res.data);
        this.setState(res.data[0].fields);
    })
    .catch(err => console.log(err))
    }

    render () {

        return (
            <div>
                <h1> Details </h1>
            
                <ul >
                    <li> {this.state.first_name} </li> 
                    <li> {this.state.last_name} </li>
                    <li> {this.state.hometown} </li>
                    <li> {this.state.twitter_id} </li>
                </ul>
            </div>
        )
    }

}

export default Details;