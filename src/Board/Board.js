import React from 'react';
import Card from '../Card/Card'


const board = (props) => {
    const cards = props.words.map((word)=>{
        console.log(word.name);
        return (
            <Card 
                key={word.id} 
                word={word.name}
                clicked = {()=>props.cardClicked(word.id)}
            />);
    })

    return (
        <div>
            {cards}
        </div>
    );
}

export default board;