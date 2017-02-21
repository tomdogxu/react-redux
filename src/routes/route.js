import React from 'react'
import { Route, IndexRoute,Redirect } from 'react-router'

import App from '../app'
import Chats from '../components/Chats/chats'
import Groups from '../components/Groups/groups'
import Address from '../components/Address/address'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Chats}/>
        <Route path="groups" component={Groups}/>
        <Route path="address" component={Address}/>
    </Route>
)