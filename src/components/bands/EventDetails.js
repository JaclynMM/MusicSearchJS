import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';


class EventDetails extends Component {
    // set the state
    state = {
        url: '',
        on_sale_datetime: '',
        datetime: '',
        description: '',
        venue: {},
        lineup: '',
    }

    // pull the detail infomration for each artist by id
    componentDidMount() {
        this.setState (this.props.event)
        axios
        .get(`https://rest.bandsintown.com/artists/${this.props.match.params.artist}/events?app_id=6f880160bae94cfaeba7644d862d324d`)
        .then(res => {
            console.log(res.data);
            this.setState(res.data[this.props.match.params.eventID]);
        })
        .catch(err => console.log(err))
        }

        render () {

            return (
                // set up the diplay of detail information for the full link
                <div>
                    <h1> Event Details </h1>
                    <ul>
                        <li> {this.state.url} </li> 
                        {/* format the return of datetime in a readable context */}
                        <li> {moment(this.state.datetime).format("MM/DD/YYYY hh:mm a")} </li>
                        {/* <li> {this.state.datetime} </li> */}
                        <li> {this.state.venue.city} </li>
                        <li> {this.state.description} </li>
                        <li> {this.state.on_sale_datetime} </li>
                        <li> {this.state.lineup} </li>
                    </ul>
                </div>
            )
    }
}

export default EventDetails;