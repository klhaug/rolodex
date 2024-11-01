import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      input: '',
      monsters: []
      }
    }
 
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {
          this.setState(
            () => {
              return {
                monsters: users
              };
            },
            console.log(this.state)
          )
        })
    }
    

  render() {
    return (
      <div className="App">
          {this.state.monsters.map((monsters) => {
              return (
              <div key={monsters.id}> 
                  <h1>{monsters.name} is my name! I'm keeping the streak alive!
                  </h1>
              </div> 
              )
            })}
      </div>
    );
  }
}


export default App;
