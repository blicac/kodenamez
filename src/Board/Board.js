import React from 'react';
import Card from '../Card/Card';
import './Board.css';


const board = (props) => {
    const cards = props.cards.map((card)=>{

        return (
            <Card 
                key={card.id} 
                word={card.word}
                isFlipped={card.isFlipped}
                color={card.color}
                clicked = {()=>props.cardClicked(card.id)}
            />);
    })

    return (
        <div className='Board'>
            {cards}
        </div>
    );
}

export default board;