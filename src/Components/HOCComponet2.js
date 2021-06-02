import React, { Component } from 'react'
import HOCComponent from './HOCComponent'

 class HOCComponet2 extends Component {
    render() {
        
        return (
            <div>
                <h2 onMouseOver={this.HandleCount}>Hover Count  </h2>
            </div>
        )
    }
}

export default HOCComponent(HOCComponet2,5)
