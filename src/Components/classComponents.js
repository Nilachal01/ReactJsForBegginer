import React, {Component} from 'react'

 class ClassComponet extends Component {
   
     constructor(props)
     {
        super(props);

         this.state ={
             Message:"Hello world"

         }
     };

     UpdateMessage =()=>{
        this.setState({
                    Message:"Updaed Hello world"
        
                 }, ()=> console.log("LOgval =", this.state.Message))
     }

    
render()
{
    return (
        <div>
            {this.state.Message}

            <h1>{this.props.name} React from class Components with id {this.props.id}</h1>
            
            <button onClick = {()=>this.UpdateMessage()}>Update</button>
        </div>
        
    )
    
};
} 

export default ClassComponet