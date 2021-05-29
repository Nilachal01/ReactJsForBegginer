import React, { Component } from 'react'
import ReactDOM  from 'react-dom'


export class PortalComponent extends Component {
    render() {
        return ReactDOM.createPortal (
            <div>
<h3>This is PortalComponent</h3>
                
            </div>,document.getElementById('Neel-Root')
        )
    }
}

export default PortalComponent
