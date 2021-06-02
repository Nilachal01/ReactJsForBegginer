
import React, { Component } from 'react'

export class CoinTableComponent extends Component {
    constructor({props}) {
        super(props)
    
    }
    
    render() {
        return (
            <>
            <tr>
                <td>{this.props.detail.id}</td>
                <td>{this.props.detail.symbol}</td>
                <td>{this.props.detail.name}</td>

            </tr>
    
</>
        )
    }
}

export default CoinTableComponent
