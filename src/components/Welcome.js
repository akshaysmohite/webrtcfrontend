import React, {Component } from 'react'
class Welcome extends Component{
    clickhandler(){
        alert('aler from class')
    }
    render(){
        const {name} = this.props;
        return <h2 onClick={this.clickhandler}>Welcome {name} to Free video chatting</h2>;
    }
}

export default Welcome; 