import React, { Component } from 'react';

class State extends Component {
    constructor() {
        super();
        this.state = {
            name: "Vikrant Mohite"
        }

    }

    changeMessage(){
        this.setState({
            name:"Akshay Mohite"
        })
    }

    render() {
        return (
            <div>
                <h1>This state change example by {this.state.name}</h1>
                <button onClick={ () => this.changeMessage() }> click me</button>
            </div>
        );
    }
}

export default State;