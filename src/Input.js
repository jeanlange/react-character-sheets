import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.inputType} 
                      value={this.props.value} 
                      placeholder="Enter your name"
                      onChange={this.props.onChange}/>
            </div>
        );
    }
}

export default Input;