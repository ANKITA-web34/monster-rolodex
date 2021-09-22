import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();    
    this.state = {
      monsters: [
        { 
          name: 'Fankensterin',
           id: 'asci' ,
        },
        { 
          name: 'Dracula',
          id: 'asr2',
        },
        { 
          name: 'Zombie', 
          id: 'as1w',
        },
      ]
    };
  }

  componentDi

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monsters => (<h1 key ={monsters.id}>{monsters.name}</h1>) )
        }
      </div>
    )
  }
}

export default App;
