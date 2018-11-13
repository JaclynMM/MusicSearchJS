import React from 'react';
import Artist from '../bands/Artist';
import Bandsintown from '../bandsintown';
// import Bands from '../bands/Band';
// import Album from '../bands/Album';

import SearchForm from '../SearchForm';
import ArtistResultsList from '../ArtistResultsList';

// import Results from '../Results';


const Index = () => {

    state = {
        artist: {},
    }

    return (
        <React.Fragment>
            {/* <h1>Search Artists</h1> */}
            <p></p>
            <div>
              <div className="main-header">
                <div className="inner">
                  <h1 className="main-title">ArtistResults</h1>
                  <SearchForm />
                </div>
              </div>
              <div className="main-content">
                <ArtistResultsList data={this.state.artists} />
              </div>
            </div>

            <br></br>
            <Bandsintown />
            <br></br>
            {/* <Results /> */}
            <Artist />
        </React.Fragment>
    )

}

export default Index;