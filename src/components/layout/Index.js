import React from 'react';
import Artist from '../bands/Artist';
import Bands from '../bands/Band';
import Album from '../bands/Album';

import SearchForm from '../SearchForm';
import Results from '../Results';


const Index = () => {
    return (
        <React.Fragment>
            <h1>Search Artists</h1>
            <p></p>
            <SearchForm />
            <br></br>
            {/* <Results /> */}
            <Artist />

            <br></br>
            <br></br>
            <br></br>

            {/* <h1>Search Bands</h1>
            <p></p>
            <SearchForm />
            <br></br>
            <Results />
            <Bands />

            <br></br>
            <br></br>
            <br></br>

            <h1>Search Albums</h1>
            <p></p>
            <SearchForm />
            <br></br>
            <Results />
            <Album /> */}


        </React.Fragment>
    )

}

export default Index;