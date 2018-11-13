import React from 'react';
import Artist from '../bands/Artist';
import Bandsintown from '../bandsintown';
// import Bands from '../bands/Band';
// import Album from '../bands/Album';

import SearchForm from '../SearchForm';
// import Results from '../Results';


const Index = () => {
    return (
        <React.Fragment>
            {/* <h1>Search Artists</h1> */}
            <p></p>
            <SearchForm />
            <br></br>
            <Bandsintown />
            <br></br>
            {/* <Results /> */}
            <Artist />
        </React.Fragment>
    )

}

export default Index;