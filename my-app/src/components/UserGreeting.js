import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoogedIn:true
        }
    }
    
    render() {
        //bellow line is short Curcite operator
        return this.state.isLoogedIn && <div>Welcom suru</div>
       
       
        // return(
        //     this.state.isLoogedIn?
        //     <div>Welcome Suru</div>:
        //     <div>Welcome Guest</div>
        // )
        // let message
        // if(this.state.isLoogedIn){
        //     message="Welcome suru"
        // }else{
        //     message="welcome Guest"
        // }
        // return <div>{message}</div>


        // if(this.state.isLoogedIn){
        //     return <div>Wecome suru</div>
        // }else{
        //     return <div>Welcom Guest</div>
        // }

        // return (
        //     <div>
        //         <div>Welcome Suru</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
