import React, { Component } from 'react';

//create the context
const Context = React.createContext();

// create the provider
export class Provider extends Component {
    state = {
        artist_list: []
    };

    componentDidMount () {
        fetch('http://127.0.0.1:8000/')
        .then( results => {
            console.log(results)
            return results.json();
        }).then(data => {
            let artist_list = data.results.map((list) => {
                return (
                    <div key = {list.results}>
                    
                    </div>
                )
            })
        })
        this.setState({artist_list: artist_list});
        console.log("state", this.state.list)
    }

    render () {
        return (
            <Context.Provider value={this.state}>
                {this.props.list}
            </Context.Provider>
        )
    }
}

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