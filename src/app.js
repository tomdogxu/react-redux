import React, {Component} from 'react'
import Menu from './components/Menu/menu'
import style from './index.css';
class App extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="maincontent">
                 <Menu/>
                {this.props.children}
            </div>
        )
    }
}
export default App
