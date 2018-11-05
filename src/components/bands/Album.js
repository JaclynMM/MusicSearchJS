import React, { Component } from 'react';

class Album extends Component {
    constructor() {
        super()
        this.state = {
            album: {name: "THE BAND"},
        }

    }

    componentDidMount () {
        fetch('http://127.0.0.1:8000/Album/')
        .then( results => {
            return results.json();
        }).then(results => {
            console.log(results)
        })
    }

    render () {
        return (
            <div>
                <h1>Album</h1>
                {this.state.name}
            </div>

        );
    }
} 

export default Album;