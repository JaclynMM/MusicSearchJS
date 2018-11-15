import React, { Component } from 'react';
import axios from 'axios';

//create the context
const Context = React.createContext();

// create the provider
export class Provider extends Component {
    state = {
        artist_list: [],
        heading: 'Full List of Artists'
    };

    componentDidMount() {
        axios
            .get(`http://127.0.0.1:8000/Artist/`)
            .then(res => {
                console.log(res.data);
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

export const Consumer = Context.Consumer;