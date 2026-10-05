import {Component} from 'react';

class ClassLifeCycle extends Component
{
    constructor(props){
        super(props);
        this.state={count:0};
        console.log("Constructor Called");
    }

    componentDidMount()
    {
        console.log("Mounting Phase");
    }

    componentDidUpdate()
    {
        console.log("Updating Phase");
    }
    
    render()
    {
        console.log("Rendered");
        return(
            <>
                <h3>Class Component</h3>
                <h2>Count:{this.state.count}</h2>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
            </>
        )
    }

}

export default ClassLifeCycle;