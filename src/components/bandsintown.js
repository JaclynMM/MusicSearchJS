import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';

class Bandsintown extends Component {
  state = {
    Event: ''
  };

  findSchedule = (dispatch, e) => {
    // e.preventDefault();

    axios
      .get(`https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0/artists/{artistname}/events
        &apikey=${process.env.REACT_APP_BIT_KEY}`
        )
        
      .then(results => {
        console.log(results)
        this.setState({ artist_id: 'artist_id' });
      })
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-6 text-center">
                When can I see them live?
              </h1>
              <p className="lead text-center">Search BandsInTown</p>
              <form onSubmit={this.findSchedule.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Artist name..."
                    name="Artist"
                    value={this.state.artist_id}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-primary btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Event Details
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Bandsintown;

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

// //create the context
// const Context = React.createContext();

// // create the provider
// export class Provider extends Component {
//     state = {
//         search_list: []
//     };

//     componentDidMount () {
//         fetch('https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0&apikey=${process.env.REACT_APP_BIT_KEY}')
//         .then( results => {
//             return results.json();
//         }).then(results => {
//             console.log(results)
//         })
//     }

//     render () {
//         return (
//             <Context.Provider value={this.state}>
//                 {this.props.children}
//             </Context.Provider>
//         )
//     }
// }

// export const Consumer = Context.Consumer;