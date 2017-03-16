import React, {Component} from 'react'
import ReactDom from 'react-dom'


class Hello extends Component{
    render(){
        return (<button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
            </button>)
    }
}

ReactDom.render(
    <Hello/>,
    document.getElementById("app")
    )
