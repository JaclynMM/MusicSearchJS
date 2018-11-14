import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';

class Search extends Component {
  state = {
    artist: '',
    results: []
  };

  findArtist = (dispatch, e) => {
    
    console.log(this.state)

    axios
      .get(`http://127.0.0.1:8000/artist-search/?q=${this.state.artist}`)
      .then(results => {
        console.log(results.data)
        this.setState({ results: results.data });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value },
      () => 
    this.findArtist (null, e))
  };

  render() {
    console.log(this.state.artists);

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-6 text-center">
                Search For An Artist
              </h1>
              {/* <p className="lead text-center"></p> */}
              <form onSubmit={this.findArtist.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Artist name..."
                    name="artist"
                    value={this.state.artist}
                    onChange={this.onChange}
                  />
                </div>
                {/* <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit">
                    Search
                </button> */}
                <ul className="text-center">
                  {this.state.results.map((artist, index) => (
                      <h1 key={index}> {artist.fields.first_name} {artist.fields.last_name} </h1>
                  ))}
                </ul>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;

