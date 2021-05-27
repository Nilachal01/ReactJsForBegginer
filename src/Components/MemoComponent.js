import React from 'react'

function MemoComponent() {
    return (
        <div>
            Memo componet rendered
        </div>
    )
}

export default React.memo(MemoComponent) 
