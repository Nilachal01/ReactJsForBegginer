import React,{Component} from 'react'

const HOCComponent = (OriginalComponent,Countvalue) => {
 console.log('calldes')
  
    class NewHOCComponent extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }

        HandleCount=()=>{
        console.log( this.state.count + Countvalue)
            this.setState( prevState => {
             return {count: prevState.count + Countvalue}   
            })

        }
       
        
       render() {
           return (
               <OriginalComponent/>
           )
       }
   }
   
 
   return NewHOCComponent
}

export default HOCComponent
