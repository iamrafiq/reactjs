import React, { Component } from 'react'
import ForwardInputRefs from './ForwardInputRefs'

class ForwardingParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
             
        }
    }
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <ForwardInputRefs ref={this.inputRef}></ForwardInputRefs>
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardingParentInput
