import React from 'react';
import { Redirect } from 'react-router-dom';
import getactivity from '../Content/project-get';
import './Details.scss';

export default class Details extends React.Component {

    constructor() {
        super();

        this.state = {
            sport: {},
        };
    }

    componentDidMount() {
        let sportId = this.props.match.params.sportId;
        let sport = getactivity().find((activity) => activity.id === sportId);
        this.setState({ sport });
    }
    render() {
        return(
            this.state.sport ?
                this.state.sport.name ?
               ( <section>
                   
                <div className='Details'>
                
                <h1>{this.state.sport.name} app</h1>
                    <div className='underBar'></div>
                    <div className="item-zoom">
                    <img
                        className='image'
                        srcset={`${require(`../img/${this.state.sport.logo}-320w.png`)} 320w,
                        ${require(`../img/${this.state.sport.logo}-480w.png`)} 480w,
                        ${require(`../img/${this.state.sport.logo}-800w.png`)} 800w`}
                        sizes="(max-width: 800px) and (min-width: 450px) 480px, (max-width: 450px) 320px, 800px"
                        src={require(`../img/${this.state.sport.logo}-800w.png`)}
                        alt={this.state.sport.name} />
                    </div>
                    <div className='content'>
                    
                        <div className='info'>
                        <div className='demo-link' ><a className='demo-button' href={this.state.sport.address}>Demo {this.state.sport.name} app</a></div>
                            <h3>Technology:</h3>
        
                            <ul>
                            {this.state.sport.tech && this.state.sport.tech.map((t, index) => <li key={index} className="tech-items">{t}</li>)}
                            </ul>
                            <h3>Description:</h3>
                            <p>{this.state.sport.details}</p>
                        </div>
                    </div>
                </div>
            </section>)
            : null
            : 
            <Redirect to='/not-found' />
        )
    }
}