import React from 'react';
import './Card.css';

const card = (props) => {
    const BLUE = 'blue';
    const RED = 'red';
    const RANDOM = 'random';
    const ASSASSIN = 'assassin';

    let cardColor = '';
console.log('color',props.isFlipped,props.color)
    if(props.isFlipped) {
        switch(props.color) {
            case BLUE:
                cardColor = 'Blue';
                break;
            case RED:
                cardColor = 'Red';
                break;
            case RANDOM:
                cardColor = 'Beige';
                break;
            case ASSASSIN:
                cardColor = 'Grey';
                break;
            default: console.log("default")
        }
    }
    let cardClass = 'Card '+ cardColor;
    
    return (
        <div className = {cardClass} onClick={props.clicked}>
            {props.word}
        </div>
    );
}

export default card;