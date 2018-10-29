import React, { Component } from 'react';
import { Consumer } from '../../context';

class Bands extends Component {
    render () {
        return (
            <Consumer>
                {value =>{
                    console.log(value);
                    return <h1>Bands</h1>;
                }}
            </Consumer>
        );
    }
} 

export default Bands;