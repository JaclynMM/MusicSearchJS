import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Grid, Jumbotron } from 'react-bootstrap';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
// import SearchForm from './components/SearchForm';
// import Results from './components/Results';
import Details from './components/bands/Details';


import { Provider } from './context';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Navbar />

            {/* <Jumbotron>
              <Grid>
                <p>Do I want something here?</p>
              </Grid>
            </Jumbotron> */}
            
            <div className="containter">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/artist_detail/:id" component={Details} />
                {/* <Route exact path="/artist_detail/:id" component={Bandsintown} /> */}
              </Switch>
              {/* <SearchForm/> */}
              {/* <SearchForm onSearch={this}/> */}

              <br></br>
              {/* <Results /> */}
            </div>

            {/* <div className="containter">
              <h1>Search Musicians</h1>
              <p></p>
              <SearchForm />
              <br></br>
              <Results />
            </div>

            <br></br>
            <br></br>
            <br></br>

            <Grid>
              <h1>Search Bands</h1>
              <p></p>
              <SearchForm />
              <br></br>
              <Results />
            </Grid>

            <br></br>
            <br></br>
            <br></br>

            <Grid>
              <h1>Search Albums</h1>
              <p></p>
              <SearchForm />
              <br></br>
              <Results />
            </Grid> */}
          </div>
        </Router>
      </Provider>

      // <Provider>
      //   <Router>
      //     <div>
      //       <Navbar />

      //       {/* <Jumbotron>
      //         <Grid>
      //           <p>Do I want something here?</p>
      //         </Grid>
      //       </Jumbotron> */}
            
      //       <div className="containter">
      //         <Switch>
      //           <Route exact path="/" component={Index} />
      //         </Switch>
      //       </div>
      //     </div>
      //   </Router>
      // </Provider>
    );
  }
}

export default App;
