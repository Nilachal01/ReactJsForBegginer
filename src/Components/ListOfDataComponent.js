import React,{Component} from 'react'
import ParentComponent from './ParentComponent'

class ListOfComponent extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        console.log("ListofComponent")
        let ListData=[
            { 
                id:1,
                Name:"Nila",
                Age:25

            },
            { 
                id:2,
                Name:"Ashutosh",
                Age:28

            },
            { 
                id:3,
                Name:"Saswat",
                Age:26

            }
    ]

    let jsxdata =ListData.map((x,ind)=> <ParentComponent key={ind} detail={x} unuekey={ind}/>) 

    return <div>{jsxdata}</div> 

    }

}

export default ListOfComponent