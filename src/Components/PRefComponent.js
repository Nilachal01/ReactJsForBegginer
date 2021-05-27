import React, { Component } from 'react'
import CRefComponent from './CRefComponent'

export class PRefComponent extends Component {
     constructor(props) {
         super(props)
     
         this.refdata =React.createRef()
     }
     HandleClick =() =>{
        this.refdata.current.focus()
     }

    render() {
        return (
            <div>
                <CRefComponent ref={this.refdata} />
                <label>Parent ref button</label>  <br/>
                {/* <input type="text" ref={this.refdata}></input> */}
                <button onClick={this.HandleClick}>New Focus</button><br/><br/>
            </div>
        )
    }
}

export default PRefComponent
