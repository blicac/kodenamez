import { Component } from 'react';
import './App.css';
import Board from './Board/Board';

class App extends Component {
  state = {
    words: [
      {id: '0', name: "incididunt blahblah"},
      {id: '1', name: "fëj"},
      {id: '2', name: "idhuhuahah"},
      {id: '3', name: "in"},
      {id: '4', name: "aliquip"},
      {id: '5', name: "irure"},
      {id: '6', name: "nostrud"},
      {id: '7', name: "anürb"},
      {id: '8', name: "culpa"},
      {id: '9', name: "eiusmod"},
      {id: '10', name: "quis"},
      {id: '11', name: "dolor"},
      {id: '12', name: "non"},
      {id: '13', name: "irure"},
      {id: '14', name: "banana"},
      {id: '15', name: "tempor"},
      {id: '16', name: "duis"},
      {id: '17', name: "nisi"},
      {id: '18', name: "esse"},
      {id: '19', name: "cake"},
      {id: '20', name: "in"},
      {id: '21', name: "culpa"},
      {id: '22', name: "laborum"},
      {id: '23', name: "qui"},
      {id: '24', name: "occaecat"}
    ]}


  cardClicked = (id) => {
    console.log(id);
  }
    
  render() {
   return (
      <div className="App">
        <Board 
          words = {this.state.words} 
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
