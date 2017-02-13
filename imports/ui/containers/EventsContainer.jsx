import React, { Component } from 'react';

import EventSquare from '../components/EventSquare';

import styles from '../styles/index';
 

export default class EventsContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            display: 'grid'
        };
    }
    
    getEvents() {
        return [
            { 
                _id: 1,
                title: 'Dev Day',
                description: 'Conference that gathers the best developers.',
                picture: 'https://www.madewithmarmalade.com/sites/default/files/styles/620x300_scaled/public/blog/fb_fb_photocover_1_-_copy.png?itok=St910B1f',
                price: 0,
                from: "October 13, 2017 09:00:00",
                to: "October 13, 2017 20:00:00"
            },
            {
                _id: 2,
                title: 'Green Energy Conference',
                description: 'Get to know about the latest developments in green energy!',
                picture: 'https://media.mnn.com/assets/images/2012/07/main_greenenergy.jpg.560x0_q80_crop-smart.jpg',
                price: 100,
                from: "August 25, 2017 10:00:00",
                to: "August 27, 2017 20:00:00"
            },
            {
                _id: 3,
                title: 'Game Lab Hackathon',
                description: 'Create the greatest game ever in 72 hours!',
                picture: 'https://img.evbuc.com/http%3A%2F%2Fcdn.evbuc.com%2Fimages%2F24257385%2F186612756836%2F1%2Foriginal.jpg?h=200&w=450&rect=0%2C0%2C2160%2C1080&s=5f76cc3feb6ca1aabd6f4755cdbcc549',
                price: 75,
                from: "September 04, 2017 10:00:00",
                to: "September 07, 2017 19:00:00"
            }
        ];
    }
 
    renderEvents() {
        
        if (this.state.display === 'grid') {
            return (
                this.getEvents().map((ev) => (
                    <EventSquare key={ev._id.toString()} event={ev} handleOnClickTitle={this.showOneEvent.bind(this, ev._id)}/>
                ))
            )
        } else {
            return (
                //to do: line events
                <div></div>
            )
        }
    }
    
    getDisplayButton() {
        
        if (this.state.display === 'grid') {
            return (
                <a onClick={this.changeDisplay.bind(this)}>
                    <span style={styles.glyphicons} className="glyphicon glyphicon-align-justify" aria-hidden="true"></span>
                </a>
            )
        } else {
            return (
                <a onClick={this.changeDisplay.bind(this)}>
                    <span style={styles.glyphicons} className="glyphicon glyphicon-th" aria-hidden="true"></span>
                </a>
            )
        }
    }
    
    showOneEvent(id) {
        FlowRouter.go('/event/' + id);
    }
    
    changeDisplay() {
        if (this.state.display === 'grid') {
            this.setState({
                display: 'line'
            });
        } else{
            this.setState({
                display: 'grid'
            });
        }
    }


 
    render() {
        return (
            <div className="container">
                <div style={styles.displayIcons}>
                    <div className="pull-right">
                        {this.getDisplayButton()}
                    </div>
                </div>
                <div className="row">
                    {this.renderEvents()}
                </div>
            </div>
        );
    }
    
}



