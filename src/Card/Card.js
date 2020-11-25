import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className = 'Card' onClick={props.clicked}>
            {props.word}
        </div>
    );
}

export default card;