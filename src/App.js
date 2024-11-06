import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      input: '',
      monsters: []
      };
      console.log("constructor")
    }
 
    componentDidMount() {
      console.log("componentDidMount")
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => {
          this.setState(
            () => {
              return {
                monsters: users
              };
            }, 
            () => {
              console.log(this.state)
            }
          )
        })
      }


  render() {
    console.log("render")
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            const searchBox = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monsters) => {
              return monsters.name.toLocaleLowerCase().includes(searchBox);
            })
            this.setState(() => {
             return {monsters : filteredMonsters};
            })
          }}
         />
         {this.state.monsters.map((monsters) => {
          return <div key={monsters.id}>
            <h1>{monsters.name}</h1> Keeping the streak alive. LAST KEEPING THE STREAK ALIVE. TRUMP WON. 
          </div>
         })}
      </div>
    );
  }
}


export default App;
