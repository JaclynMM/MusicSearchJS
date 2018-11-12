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

    componentDidMount () {
    }

    performSearch = (query) => {
        Axios.get(`http://127.0.0.1:8000/Artist/search?q=${query}`)
        .then( results => {
            return results.json();
        }).then(results => {
            console.log(results)
        })
    }

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
                                {artist_list.map(artist => (
                                    <Artists key={artist.artist_id} artist={artist} />
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>
            // <div>
            //     <h1>Artist</h1>
            //     {this.state.name}
            // </div>

        );
    }
} 

export default Artist;