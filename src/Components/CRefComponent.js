import React from 'react'

 const CRefComponent =React.forwardRef((props,ref)=> {
    
    return (
        <div>
            <label>Child ref textbox</label>
            <input type="text" ref={ref}></input>
        </div>
    )
})


export default CRefComponent
