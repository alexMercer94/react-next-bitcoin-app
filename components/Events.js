import React from 'react';
import Event from './Event';

const Events = props => {
    const eventosId = Object.keys(props.eventos);
    return (
        <div className="list-group">
            {eventosId.map(key => (
                <Event key={key} info={props.eventos[key]} />
            ))}
        </div>
    );
};

export default Events;
