import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'suru A'
        }
        console.log("Life cycle A Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Life cycle A getDerivedStateFromProps");

        return null;
    }
    shouldComponentUpdate(){
        console.log("Life cycle A shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("Life cycle A getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("Life cycle A componentDidUpdate");

    }
    changeState = ()=>{
        this.setState({
            name:"Nora"
        })
    }
    render() {
        console.log("Life cycle A render");
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }

    componentDidMount(){
        console.log("Life cycle A componentDidMount");
    }
}

export default LifeCycleA
