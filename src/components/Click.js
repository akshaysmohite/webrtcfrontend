import React from 'react'

function Click() {
    function clickHandler(){
        alert('Button clicked');
    }
    return (
        <div>
            <button onClick = {clickHandler}>Click js</button>
        </div>
    )
}

export default Click
