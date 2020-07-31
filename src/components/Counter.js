import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 0 }
    }

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    counter() {
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.increment()}>Increase count</button>
            </div>
        )
    }
}

export default Counter
