import React, {Component} from 'react'
import ReactDom from 'react-dom'


class Hello extends Component{
    render(){
        return <strong>Helo</strong>
    }
}

    ReactDom.render(
        <Hello/>,
        document.getElementById("app")
    )
