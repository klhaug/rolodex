import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: {firstName: 'Kristian', lastName: 'Haug'}
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hei {this.state.firstName}, is your last name {this.state.lastName}?
          </p>
          <button 
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Andrei", lastName: 'Neagoi'})
                  }
                }
        }}>
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
