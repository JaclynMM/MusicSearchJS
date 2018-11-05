import React, { Component } from 'react';
import { Consumer } from '../../context';

class Bands extends Component {
    constructor() {
        super()
        this.state = {
            bands: {name: "THE BAND"},
        }

    }

    componentDidMount () {
        fetch('http://127.0.0.1:8000/Band/')
        .then( results => {
            return results.json();
        }).then(results => {
            console.log(results)
        })
    }

    render () {
        return (
            <div>
                <h1>Bands</h1>
                {this.state.name}
            </div>

        );
    }
} 

export default Bands;