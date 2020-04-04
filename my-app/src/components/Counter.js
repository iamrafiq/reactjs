import React, { Component } from 'react'

class Counter extends Component {
   constructor(props){
        super(props)
        this.state = {
            count:0
        }
   }
   increment(){
//        this.setState({ // seState second argument is a call back function, if you want to do something 
//         // after setState function called, write those statement in callback function
//         // like here we are loging callback value
//            count:this.state.count + 1
//        }, ()=>{
//         console.log("Callback value", this.state.count)
//        })
//        //not bellow way
//        //this.state.count = this.state.count + 1

        this.setState(stackTopState =>({
            count:stackTopState.count + 1
        }))
   }

   increment5(){
    console.log("increment5")
    this.increment()

    //    this.increment()
    //    this.increment()
    //    this.increment()
    //    this.increment()
    //    this.increment()

   }
    render() {
        return (
            <div>
              <div>  Count - {this.state.count}</div>
              {/* <button onClick ={()=>this.increment5()}>Increment</button> */}
              <button onClick ={this.increment5}>Increment</button>

            </div>
        )
    }
}

export default Counter
