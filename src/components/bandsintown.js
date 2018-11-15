import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Consumer } from '../context';
import { Link } from 'react-router-dom';


//API hit for external site (bandsintown.com)
class Bandsintown extends Component {
  state = {
    results: [],
  };

  findEvent = (e) => {
    e.preventDefault();
    
    console.log(this.state)

    // pull information from bandsintown.com api
    // filter artist name being searched to find specific event information
    axios
      .get(`https://rest.bandsintown.com/artists/${this.state.artist}/events?app_id=6f880160bae94cfaeba7644d862d324d`)
        .then(results => {
          this.setState({ 
            results: results.data
          });
        })
      .catch(function (error) {
        console.log(error)
      })
    };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render(props) {
    return (
      <Consumer>
        {value => {
          return (

            // html formatting of search bar
            <div className="card card-body mb-4 p-4">
              <h1 className="display-6 text-center">
                When can I see them live?
              </h1>
              <p className="lead text-center">Search BandsInTown</p>
              <form onSubmit={this.findEvent.bind(this)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Name..."
                    name="artist"
                    onChange={this.onChange}
                  />
                </div>

                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                  onClick={this.findEvent}>
                  Get Event Details
                </button>

                {/* loop through the information and pull out certain aspects */}
                <div className="col-md-5 text-center mx-auto">
                  {this.state.results.map((event, index) => (
                      <h4 key={index}>  
                        {/* {event.datetime}  */}
                        {/* format the return of datetime in a readable context */}
                        {moment(event.datetime).format("MM/DD/YYYY hh:mm a")}
                        <br></br>
                        {event.venue.city} 

                        {/* create the custom link to the event details for each event */}
                        <Link to={`/event_detail/${this.state.artist}/${index}`} className="btn btn-dark btn-block">
                            <i className="fas fa-chevron-right"> Event Details </i>
                        </Link>

                        <br></br>
                        
                      </h4>
                  ))}
                </div>

              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Bandsintown;