import React from 'react'
import {  Route,IndexRoute, Link } from 'react-router'
import App from '../../app'
class Menu extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
        	<div>
	            <div>
	                <Link to="/chats">chats</Link>
	                <Link to="/groups">groups</Link>
	                <Link to="/address">address</Link>
	            </div>
            </div>
        )
    }
}
export default Menu
