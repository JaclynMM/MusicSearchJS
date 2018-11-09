import React, { Component } from 'react';
import { Consumer } from '../../context';

import Bands from '../bands/Bands.js'

class Band extends Component {

    render () {
        return (
            <Consumer>
                {value => {
                    const { band_list } = value;
                    // console.log(value);
                    return (
                        <React.Fragment>
                            <h3 className="text-center mb-4">Band Results</h3>

                            <div className="row">
                                {band_list.map(band => (
                                    <Bands key={band.band_id} band={band} />
                                ))}
                            </div>
                        </React.Fragment>
                    )
                }}
            </Consumer>

        );
    }
} 

export default Band;