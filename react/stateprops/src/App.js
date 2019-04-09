import React, { Component } from 'react';
import './App.css';

import Button from './Components/button/Button'

import {generateColor} from './helper';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors:['red', 'yellow', 'green', 'blue'],
      turns:[],
      userTurn: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({
      turns:[...this.state.turns, generateColor(this.state.colors)]
    }) 
  }

handleClick(color){
  console.log(color);
}

  render() {
    const buttons = this.state.colors.map((e)=>{
      return  <Button color={e}/>
    })

    return (
      <div className="App">
        <h1>Simon Says</h1>
        <div className="button-container">
          {buttons}
        </div>
      </div>
    );
  }
}

export default App;