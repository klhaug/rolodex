import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      searchField: '',
      monsters: [],
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

    onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase()
      this.setState(() => {
        return {searchField}
      })
    }

  render() {
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
    });

    console.log("render")
    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={onSearchChange}
         />
         {filteredMonsters.map((filteredMonsters) => {
          return <div key={filteredMonsters.id}>
            <h1>{filteredMonsters.name}</h1> 

          </div>
         })}
      </div>
    );
  }
}


export default App;
