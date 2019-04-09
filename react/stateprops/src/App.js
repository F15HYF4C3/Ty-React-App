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
    if(color === this.state.turns[this.state.userTurn]){
      if(this.state.turns.length -1 === this.state.userTurn){
        this.setState({
          turns:[...this.state.turns, generateColor(this.state.colors)],
          userTurn: 0
        })
      }else{
        this.setState({
          userTurn: this.state.userTurn + 1
        })
      }
    }else{
      alert("You done mess up AAron!!!")
      this.setState({
        turns:[],
        userTurn:0
      })
    }
  }

  render() {
    const buttons = this.state.colors.map((e)=>{
      return  <Button key={e} click={this.handleClick} color={e}/>
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