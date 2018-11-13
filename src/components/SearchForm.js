import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';

class Search extends Component {
  state = {
    Artist: ''
  };

  findArtist = (dispatch, e) => {
    
    e.preventDefault();
    console.log(this.state)

    axios
      .get(`http://127.0.0.1:8000/artist-search/?q=${this.state.Artist}`)
      .then(results => {
        console.log(results)
        this.setState({ artist: '' });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
              <p className="lead text-center">with Details</p>
              <form onSubmit={this.findArtist.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Artist name..."
                    name="Artist"
                    value={this.state.artist}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit">
                    Get Artist Details
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>

      
    );
  }
}

export default Search;

// export default class SearchForm extends Component {
  
//   state = {
//     searchText: ''
//   }
  
//   onSearchChange = e => {
//     this.setState({ searchText: e.target.value });
//   }
  
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSearch(this.query.value);
//     e.currentTarget.reset();
//   }
  
//   render() {  
//     return (
//       <form className="search-form" onSubmit={this.handleSubmit} >
//         <label className="is-hidden" htmlFor="search"></label>
//         <input type="text" 
//                onChange={this.onSearchChange}
//                name="artist name" 
//                ref={(input) => this.query = input}
//                value={this.state.artist_name}
//                placeholder="Search..." />
//         <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
//       </form>      
//     );
//   }
// }