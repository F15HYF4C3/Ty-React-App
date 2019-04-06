import React, { Component } from 'react';
import Comp1 from './Comp1.js';
import Comp2 from './Comp2.js';
import Comp3 from './Comp3.js';
import Comp4 from './Comp4.js';
import Comp5 from './Comp5.js';
import Comp6 from './Comp6.js';
import Comp7 from './Comp7.js';
import Comp8 from './Comp8.js';
import Comp9 from './Comp9.js';
import Comp10 from './Comp10.js';
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
        <Comp2/>
        <Comp3/>
        <Comp4/>
        <Comp5/>
        <Comp6/>
        <Comp7/>
        <Comp8/>
        <Comp9/>
        <Comp10/>


        </div>
        </div>
      </div>
    );
  }
}

export default App;