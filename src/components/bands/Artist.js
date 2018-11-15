import React, { Component } from 'react';
import { Consumer } from '../../context';

import Artists from '../bands/Artists.js'
import Axios from 'axios';


class Artist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artist: {name: "THE BAND"},
        }
    }

    // search through artist database and be sure to return json
    performSearch = () => {
        Axios.get('http://127.0.0.1:8000/Artist/')
        .then( results => {
            return results.json();
        }).then(results => {
            console.log(results)
        })
    }

    //make sure each artist in the database has an id
    render () {
        return (
            <Consumer>
                {value => {
                    const { artist_list, heading } = value;
                    // console.log(value);
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>

                            <div className="row">
                                {artist_list.map((artist, index) => (
                                    <Artists key={index} artist={artist} />
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
        );
    }
} 

export default Artist;