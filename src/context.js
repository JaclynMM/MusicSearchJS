import React, { Component } from 'react';
import axios from 'axios';

//create the context
const Context = React.createContext();

// create the provider
export class Provider extends Component {
    state = {
        artist_list: [],
        heading: 'Artist Results'
    };

    componentDidMount() {
        axios
            .get(`http://127.0.0.1:8000/Artist/`)
            .then(res => {
                // console.log(res.data);
                this.setState({artist_list: res.data});
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

//     componentDidMount () {
//         fetch('http://127.0.0.1:8000/')
//         .then( results => {
//             console.log(results)
//             return results.json();
//         }).then(results => {
//             artist_list = results.map((artist_list) => {
//                 return (
//                     <div>
//                         <h3>{artist_list}</h3>
//                     </div>
//                 )
//             })
//         })
//         this.setState({artist_list: artist_list});
//         console.log("state", this.state.artist_list)
//     }

//     render () {
//         return (
//             <div>{this.state.artist_list}</div>
//         )

//     }



/**
 * fetch('http://127.0.0.1:8000/Artist', {
 *   mode: 'POST',
 *   body: JSON.stringify(this.state),
 *   headers: {
 *     'Content-Type': 'application/json'
 *   })
 * })
 */

export const Consumer = Context.Consumer;