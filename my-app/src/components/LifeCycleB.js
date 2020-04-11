import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'suru B'
        }
        console.log("Life cycle B Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("Life cycle B getDerivedStateFromProps");

        return null;
    }
    shouldComponentUpdate(){
        console.log("Life cycle B shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("Life cycle B getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("Life cycle B componentDidUpdate");

    }
    render() {
        console.log("Life cycle B render");
        return (
            <div>
                LifeCycleB
            </div>
        )
    }

    componentDidMount(){
        console.log("Life cycle B componentDidMount");
    }
}

export default LifeCycleB
