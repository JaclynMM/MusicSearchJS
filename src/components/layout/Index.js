import React from 'react';

import Artist from '../bands/Artist';
import Bandsintown from '../bandsintown';
import SearchForm from '../SearchForm';


// Index formatting pulled into app.js
// View the top 3 components of the app
const Index = () => {

    return (
        <React.Fragment>
            <div>
              <div className="main-header">
                <div className="inner">
                  <SearchForm />
                </div>
              </div>
            </div>

            <br></br>
            <Bandsintown />

            <br></br>
            <Artist />
        </React.Fragment>
    )

}

export default Index;