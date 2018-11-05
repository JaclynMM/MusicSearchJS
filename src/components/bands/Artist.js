import React, { Component } from 'react';

class Artist extends Component {
    constructor() {
        super()
        this.state = {
            artist: {name: "THE BAND"},
        }

    }

    componentDidMount () {
        fetch('http://127.0.0.1:8000/Artist/')
        .then( results => {
            return results.json();
        }).then(results => {
            console.log(results)
        })
    }

    render () {
        return (
            <div>
                <h1>Artist</h1>
                {this.state.name}
            </div>

        );
    }
} 

export default Artist;