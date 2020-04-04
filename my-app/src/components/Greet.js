import React from 'react'

//const Greet = ({name, power}) =>{
//or

const Greet = props =>{
  const{name, power} = props
  return( 
      <div>
        <h1> Hello {name} power {power}</h1>
        {/* <p>{props.children}</p> */}
      </div>
    )
} 
// function Greet(){
//     return <h1> Hello Suru Mama</h1>
// }

export default Greet;