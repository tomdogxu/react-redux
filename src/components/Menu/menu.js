import React from 'react'
import {  Link } from 'react-router'

class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Link to="/chats">chats</Link>
                <Link to="/groups">groups</Link>
                <Link to="/address">address</Link>
            </div>
        )
    }
}
export default Menu
