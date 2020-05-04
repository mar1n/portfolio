import React from 'react';
import { Redirect } from 'react-router-dom';
import getactivity from '../project-get';
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
                <section>
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
                                <h3>Technology:</h3>
                                <ul>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                </ul>
                                <h3>Description:</h3>
                                <p>{this.state.sport.details}</p>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }
}