import React, {Component} from 'react'

class FormController extends Component
{
    constructor(props)
    {
        super(props)

        this.state={
            Name:'',
            Description :'',
            Gender:''

        }
        
    }
        HandleName = event => {
                this.setState({
                    Name : event.target.value
                } )
            }

            HandleDescription = event =>{
                this.setState({
                    Description : event.target.value
                })
                }
                HandleGender = event =>{
                    this.setState({
                        Gender : event.target.value
                    })
                    }

                    SubmitForm =event=>
                    {
                        alert(`${this.state.Name}, ${this.state.Description}, ${this.state.Gender}`)
                        event.preventDefault()

                    }


render()
{
    console.log("formsComponent")
    return (<div>
        <h3>Forms Controller</h3> <br/>
        <form onSubmit={this.SubmitForm}>
            <label>Name</label>
        <input type="text" value={this.state.Name} onChange={this.HandleName}></input>
        <br/>
        <label>Description</label>
        <textarea value={this.state.Description} onChange={this.HandleDescription}></textarea> <br/>
        <label>Select Gender</label>
        <select value= {this.state.Gender} onChange={this.HandleGender}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select> <br/> <br/>
        <input type="submit"></input>
        </form>
    </div>)
}
}

export default FormController