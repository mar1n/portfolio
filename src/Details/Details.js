import React from 'react';
import { Redirect } from 'react-router-dom';
import getactivity from '../activity-get';
import './Details.css';

export default class Details extends React.Component {

    constructor() {
        super();

        this.state = {
            sport: {}
        };
    }

    componentDidMount() {
        let sportId = this.props.match.params.sportId;
        let sport = getactivity()
            .find((activity) => activity.id === sportId);
        this.setState({ sport });
    }
    render() {
        if (this.state.sport === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='Details'>
                    
                    <div className='demo-link' ><a className='demo-button' href={this.state.sport.address}>Demo {this.state.sport.name} app</a></div>
                    <div className='underBar'></div>
                    <img
                            className='image'
                            src={this.state.sport.logo}
                            alt={this.state.sport.name} />
                    <h1>{this.state.sport.name} app</h1>
                    <div className='content'>
                    
                        <div className='text'>
                            <p>{this.state.sport.details}</p>
                        </div>
                    </div>
                </div>
            );
        }
    }
}