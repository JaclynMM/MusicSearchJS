import React, { Component } from 'react';
import axios from 'axios';

//create the context
const Context = React.createContext();

// create the provider
export class Provider extends Component {
    state = {
        album_list: [],
        heading: 'Album Results'
    };

    componentDidMount() {
        axios
            .get(`http://127.0.0.1:8000/Album/`)
            .then(res => {
                console.log(res.data);
                this.setState({album_list: res.data});
            })
            .catch(err => console.log(err))
    }

    render () {
        return (
            <AlbumContext.Provider value={this.state}>
                {this.props.children}
            </AlbumContext.Provider>
        )
    }
    
}


export const AlbumConsumer = AlbumContext.Consumer;