import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render(){
        return (
            <div className="button" style={{background:`${this.props.color}`}}>
            </div>
        )
    }
}

export default Button