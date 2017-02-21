import React, {Component} from 'react'
import Menu from './components/Menu/menu'

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                {this.props.children}

            </div>
        )
    }
}
export default App
