import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class App extends Component {
  constructor() {
    super()
    this.state = {
      groceries: []
    }
  }

  addGrocery = (grocery) => {
    const newGrocery = {...grocery, starred: false}

    this.setState({
      groceries: [...this.state.groceries, newGrocery]
    })
  }

  render() {
    return (
      <div className="App">
        <Grocery name='apples' starred={false} />
      </div>
    );
  }
}

export default App;
