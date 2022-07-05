import React, {Component} from "react";
import StoreContext from "../context/storeContext"

class Bugs extends Component {
    static contextType = StoreContext;
     
    componentDidMount(){
        console.log(this.context)
    }
    render (){
        return <h1>athis is Bugs</h1>
    }
}

// Bugs.contextType = StoreContext;

export default Bugs