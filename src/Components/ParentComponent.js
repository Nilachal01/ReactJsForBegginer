import React, {Component} from 'react'

class ParentComponent extends Component
{ 
    constructor({props})
    {
        super(props)
    }

    render()
    {
        return <div className="abc"><h1>I am {this.props.detail.Name} and I'm {this.props.detail.Age} year old and Unique {this.props.unuekey}</h1></div> 
    }

}

export default ParentComponent