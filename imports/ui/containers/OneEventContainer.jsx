import React, { Component } from 'react';

import styles from '../styles/index';
 

export default class OneEventContainer extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>{this.props.eventId}</div>
        );
    }
}