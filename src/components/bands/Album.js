import React, { Component } from 'react';
import { Consumer } from '../../context';

import Albums from '../bands/Albums.js'

class Album extends Component {

    render () {
        return (
            <Consumer>
                {value => {
                    const { album_list, heading } = value;
                    // console.log(value);
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">{heading}</h3>

                            <div className="row">
                                {album_list.map(album => (
                                    <Albums key={album.album_id} album={album} />
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>

        );
    }
} 

export default Album;