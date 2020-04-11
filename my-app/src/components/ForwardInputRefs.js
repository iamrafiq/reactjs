import React from 'react'

// function ForwardInputRefs() {
//     return (
//         <div>
//             <input type = "text"></input>

//         </div>
//     )
// }

const ForwardInputRefs = React.forwardRef((props, ref)=>{
    return (
        <div>
            <input type = "text" ref={ref}></input>

        </div>
    )
}
) 
export default ForwardInputRefs

