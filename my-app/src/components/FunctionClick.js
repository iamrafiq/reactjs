import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
// const clickHandler = () => {
//     console.log("Button clicked")
// }

// function clickHandler(){
//     console.log("Button clicked")
// }
export default FunctionClick
