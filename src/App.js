import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/searchbox/search-box.component';
import { Component } from 'react';

const App = () => {
  
}


class App extends Component {
  constructor() {
    super();
   
    this.state = {
      searchField: '',
      monsters: [],
      };
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

    return (
      <div className="App">
        <h1>Rolodex</h1>
         <SearchBox 
            onChangeHandler = {onSearchChange}
            placeholder = "search monsters"
            className = 'monsters-search-box'
            />
         <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}


export default App;
