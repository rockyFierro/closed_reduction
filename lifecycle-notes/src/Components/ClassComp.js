import React from 'react'

class ClassComp extends React.Component{
    constructor(){
        super();
        console.log("index: app: ClassComp: constructor: constructor has fired.");
        this.state={
            name:"Tim"
        }

        this.handleButton=()=>{
            this.setState({
                name:"Jason"
            })
        }
    }
    
    componentDidMount(){
        console.log("index: app: ClassComp:componentDidMount: component has mounted.");
    }

    componentDidUpdate(){
        console.log("index:app:classcomp:componentDidUpdate: component has updated.")
    }

    render(){
        console.log("index:app:ClassComp: render() has fired.");

        return(
            <div>
                <h2>Class Component.</h2>
                <p>{this.state.name}</p>
                <button onClick={this.handleButton}>Change Name</button>
            </div>
        )
    }
}


export default ClassComp;