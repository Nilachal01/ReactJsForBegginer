import React, {Component} from 'react'

class CComponent extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                <button onClick={()=>this.props.greetparent('abb')}>Greet Parent Button</button>
            </div>
        )
    }

}

export default CComponent