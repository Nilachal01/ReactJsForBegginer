import React, {Component} from 'react'

 class ClassComponet extends Component {
   
     constructor(props)
     {
        super(props);

         this.state ={
             Message:"Hello world",
             Messages:"New Func"

         }
         this.UpdateMessages = this.UpdateMessages.bind(this)
     };

     UpdateMessage =()=>{
        this.setState({
                    Message:"Updaed Hello world"
        
                 }, ()=> console.log("LOgval =", this.state.Message))
     }
     UpdateMessages(){
        this.setState({
                    Messages:"Updaed Hello"
        
                 })
     }
     
render()
{
    return (
        <div>
            {this.state.Message}
            {this.state.Messages}
            <h1>{this.props.name} React from class Components with id {this.props.id}</h1>
            
            <button onClick = {this.UpdateMessage}>Update</button>
            <button onClick = {this.UpdateMessages}>Updates</button>
        </div>
        
    )
    
};
} 

export default ClassComponet