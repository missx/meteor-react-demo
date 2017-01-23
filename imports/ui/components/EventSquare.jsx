import React from 'react';


function EventSquare(props) {
    return (
        <div className="col-lg-12 col-md-4 col-lg-4">
            <h5>{props.event.title}</h5>
            <span>From {props.event.from} to {props.event.to}</span>
            <div>{props.event.description}</div>
            <span>{props.event.price} === 0 ? 'Free' : {props.event.price}</span>
        </div>
    );
}


module.exports = EventSquare;
