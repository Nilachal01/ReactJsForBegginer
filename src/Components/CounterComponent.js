import React, {Component} from 'react'

class CounterComponet extends Component
{
    
    constructor(props)
    {

        super(props)

        this.state={
            MessegesCount:0
        }
    }

    updatemessagecount =()=>
    {
        this.setState({

            MessegesCount:this.state.MessegesCount+1
        }, ()=>console.log(this.state.MessegesCount));
    }

    render()
    {
        console.log("counterComponent")
        return(
            <div>
                Count is {this.state.MessegesCount} <br/>
                <button onClick={()=>this.updatemessagecount()}>Subscribe</button>
            </div>
        )
    };

}

export default CounterComponet