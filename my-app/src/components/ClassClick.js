import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props){
        super(props)
       this.clickHandler=this.clickHandler.bind(this)
       this.logPrint=this.logPrint.bind(this)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class click</button>
                {/* <button onClick={()=>this.clickHandler()}>Class click</button> */}
            </div>
        )
    }

    clickHandler(){
        //this.logPrint()
        console.log("this"+this);

    }
    logPrint(){
        console.log("click the button");

    }
}

export default ClassClick
