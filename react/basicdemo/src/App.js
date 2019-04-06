import React, { Component } from 'react';
import Comp1 from './Comp1.js';
import './App.css';
import MyFirstComponent from './myFirstComponent';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <div>
        <MyFirstComponent/>
        <div>
        <Comp1/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;