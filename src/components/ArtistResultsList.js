import React from 'react';
import ArtistResults from './ArtistResults';

const ArtistList = props => {

    return (
        <ul className="artist-list">
            <ArtistResults />
        </ul>
    );
}

export default ArtistList;