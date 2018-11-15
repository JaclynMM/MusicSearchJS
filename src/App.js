import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Details from './components/bands/Details';
import EventDetails from './components/bands/EventDetails';

import { Provider } from './context';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel)

// render full app display from Index and show 3 routes
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Navbar />
            
            <div className="containter">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/artist_detail/:id" component={Details} />
                <Route exact path="/event_detail/:artist/:eventID" component={EventDetails} />
              </Switch>

              <br></br>
            </div>
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
