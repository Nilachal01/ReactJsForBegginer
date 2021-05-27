import React, { Component } from 'react'

 class RefCompnent extends Component {
    constructor(props) {
        super(props)
    
        this.refdata=React.createRef()
      
    }
    componentDidMount=()=>{
       this.refdata.current.focus()
    }
    
    render() {
        return (
            <div>
                <label>Focous Input</label>
                <input type="text" ref={this.refdata}></input>
            </div>
        )
    }
}

export default RefCompnent
