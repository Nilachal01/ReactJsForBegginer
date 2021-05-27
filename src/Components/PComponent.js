import React, {Component} from 'react'
import CComponent from './CComponent'

class PComponent extends Component
{
    constructor(props)
    {
        super()
        this.state ={
            Name : "Parent class",
            Age: 24
        }
    }
    GreetMethod =(propvs)=>
    {
        alert(`This is Parent class ${this.state.Name} age ${this.state.Age} and ${propvs} `)
    }

    render()
    {
        console.log("PComponent")
        return (
            <div>
                <CComponent greetparent={this.GreetMethod} />
            </div>
        )
    }
}

export default PComponent