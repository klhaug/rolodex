import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      input: '',
      monsters: [
          {
            name: 'Jackie'
          },
          {
            name: 'Chang'
          },
          {
            name: 'Shrek'
          }
        ]
      }
    }

  

  render() {
   const {monsters, input} = this.state

    return (
      <div className="App">
       <input type='search' onChange={(event) => {
        this.setState(
          () => {
            return {
              input: event.target.value
            }
          },
          () => {
            console.log(input)
          }
        )
       }}></input>
        {monsters.map((i) => {
          return (
            <h1>{i.name} ❤️</h1>
          )
        })}
      </div>
    );
  }
}


export default App;
