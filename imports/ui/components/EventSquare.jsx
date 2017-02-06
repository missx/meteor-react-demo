import React from 'react';

import styles from '../styles/index';


function EventSquare(props) {
    return (
        <div className="col-sm-12 col-md-4 col-lg-4" style={styles.eventSquareOuter}>
            <div style={styles.eventSquareInner}>
                <a><h5 style={styles.eventSquareTitle} >{props.event.title}</h5></a>
                <div style={styles.squareDescription}>{props.event.description}</div>
                <div >From {props.event.from} to {props.event.to}</div>                
                <span style={styles.squarePrice}>Price: {props.event.price === 0 ? 'Free' : '$' + props.event.price}</span>
            </div>
        </div>
    );
}


module.exports = EventSquare;
