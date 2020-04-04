import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name, power} = this.props
    return <h1>From Class component {name} power is {power}</h1>
    }   
} 

export default Welcome