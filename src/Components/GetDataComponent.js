import React, { Component } from 'react'
import axios from 'axios'
import CoinTableComponent from './CoinTableComponent'


 class GetDataComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Data:[]
         }
     }
     componentDidMount()
     {
         axios.get("https://api.coingecko.com/api/v3/coins/list")
         .then(Response=>{
            this.setState({
                Data:Response.data
            })

         })
         
     }
     
    render() {
        
        //let jsxdata = 
        return (
            <div>
                List Of Bitcoin Data
                <table>
                    
                
                    <th>ID</th>
                    <th>Symbol</th>
                    <th>Name</th>
               
                <tbody>
                {
                     this.state.Data.map( x => <CoinTableComponent key={x.id} detail={x} />)
                }
                </tbody>
                </table>
            </div>
        )
    }
}

export default GetDataComponent
