import React from 'react';
import Artist from '../bands/Artist';
import Bands from '../bands/Bands';
import Album from '../bands/Album';

import SearchForm from '../SearchForm';
import Results from '../Results';


const Index = () => {
    return (
        <React.Fragment>
            <Artist />
            <h1>Search Musicians</h1>
            <p></p>
            <SearchForm />
            <br></br>
            <Results />

            <br></br>
            <br></br>
            <Bands />
            <h1>I don't know</h1>

            <br></br>
            <br></br>
            <Album />
            <h1>Do you?</h1>

        </React.Fragment>
    )

}

export default Index;