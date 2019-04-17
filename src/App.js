import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import randomDataSet from './datasets/dataset-randomizer.json';
import randomizer from './helpers/randomizer';

class App extends Component {

  componentDidMount() {
    console.log(randomizer(2, randomDataSet.persons, "random"));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KrAsH</h1>
        </header>
      </div>
    );
  }
}

export default App;
