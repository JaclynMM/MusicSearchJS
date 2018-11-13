import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';

class Bandsintown extends Component {
  state = {
    Event: []
  };

  findSchedule = (dispatch, e) => {
    // e.preventDefault();

    axios
      .get(`https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0?apikey=6f880160bae94cfaeba7644d862d324d`)
        .then(response => {
        // console.log(response)
          this.setState({ 
            Event: response.data.artist_id
          });
        })
      .catch(function (error) {
        console.log(error)
      })
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
                    placeholder="Event details..."
                    name="Event"
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


// export default class Bandsintown extends Component {
  
//   constructor() {
//     super();
//     this.state = {
//       artist_id: [],
//       datetime: [],
//     };
//   } 

//   componentDidMount() {
//     axios.get(`https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0/artists/{artistname}/events
//             &apikey=${process.env.REACT_APP_BIT_KEY}`)
//           .then(results => {
//             console.log(results)
//             this.setState({ artist_id: 'artist_id' });
          
//     })
    
//       .catch(error => {
//         console.log('Error fetching and parsing data', error);
//       });
//   }

//   render() { 
//     console.log(this.state.artist_id);
//     return (
//       <div>
//         <div className="main-header">
//           <div className="inner">
//             <h1 className="main-title">Artist Search</h1>
//           </div>   
//         </div>    
//         <div className="main-content">
//         </div>
//       </div>
//     );
//   }
// }
