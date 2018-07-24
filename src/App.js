import React, { Component } from 'react';
import './App.css';
import PluggableTodo from './components/PluggableTodo/PluggableTodo';

class App extends Component {
  render() {
    return (
      <PluggableTodo listId={1} />
    );
  }
}

export default App;
