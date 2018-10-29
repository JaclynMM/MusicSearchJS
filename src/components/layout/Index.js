import React from 'react';
import Artist from '../bands/Artist';
import Bands from '../bands/Bands';
import Album from '../bands/Album';


const Index = () => {
    return (
        <React.Fragment>
            <Artist />
            <h1>Where are you going?</h1>

            <Bands />
            <h1>I don't know</h1>

            <Album />
            <h1>Do you?</h1>

        </React.Fragment>
    )

}

export default Index;