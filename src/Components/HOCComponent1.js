import React, { Component } from 'react'
import HOCComponent from './HOCComponent'

 class HOCComponent1 extends Component {
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.HandleCount}>clicked {this.state} times</button>
            </div>
        )
    }
}

export default HOCComponent(HOCComponent1,5)
