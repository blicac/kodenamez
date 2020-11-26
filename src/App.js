import { Component } from 'react';
import './App.css';
import Board from './Board/Board';

class App extends Component {
  state = {
    cards: [
      {id: '0', word: "incididunt blahblah", isFlipped: false, color: 'blue'},
      {id: '1', word: "fëj", isFlipped: false, color: 'blue'},
      {id: '2', word: "idhuhuahah", isFlipped: false, color: 'blue'},
      {id: '3', word: "in", isFlipped: false, color: 'blue'},
      {id: '4', word: "aliquip", isFlipped: false, color: 'blue'},
      {id: '5', word: "irure", isFlipped: false, color: 'blue'},
      {id: '6', word: "nostrud", isFlipped: false, color: 'blue'},
      {id: '7', word: "anürb", isFlipped: false, color: 'blue'},
      {id: '8', word: "culpa", isFlipped: false, color: 'red'},
      {id: '9', word: "eiusmod", isFlipped: false, color: 'red'},
      {id: '10', word: "quis", isFlipped: false, color: 'red'},
      {id: '11', word: "dolor", isFlipped: false, color: 'red'},
      {id: '12', word: "non", isFlipped: false, color: 'red'},
      {id: '13', word: "irure", isFlipped: false, color: 'red'},
      {id: '14', word: "banana", isFlipped: false, color: 'red'},
      {id: '15', word: "tempor", isFlipped: false, color: 'red'},
      {id: '16', word: "duis", isFlipped: false, color: 'assassin'},
      {id: '17', word: "nisi", isFlipped: false, color: 'random'},
      {id: '18', word: "esse", isFlipped: false, color: 'random'},
      {id: '19', word: "cake", isFlipped: false, color: 'random'},
      {id: '20', word: "in", isFlipped: false, color: 'random'},
      {id: '21', word: "culpa", isFlipped: false, color: 'random'},
      {id: '22', word: "laborum", isFlipped: false, color: 'random'},
      {id: '23', word: "qui", isFlipped: false, color: 'random'},
      {id: '24', word: "occaecat", isFlipped: false, color: 'random'}
    ]}


  cardClicked = (id) => {
    //console.log(id);
    const cardIndex = this.state.cards.findIndex(p => {
      return p.id === id;
    });

    const card = {
      ...this.state.cards[cardIndex]
    };

    card.isFlipped = true;
    const cards = [...this.state.cards];
    cards[cardIndex] = card;

    this.setState({ cards: cards });
  }
    
  render() {
   return (
      <div className="App">
        <Board 
          cards = {this.state.cards} 
          cardClicked = {(id)=> this.cardClicked(id)}
          />
  
        <header className="App-header">
          <p>
            Delish brazilian cake
          </p>
          <img src='https://milkandpop.com/wp-content/uploads/2020/08/brazilian-carrot-cake-1-2-720x540.jpg' className="App-logo" alt="logo" />
        </header>
      </div>
    );
  } 
}

export default App;
