import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import finalCreateStore from './stores/store'
import routes from './routes/route'
import reducer from './reducers/index'


// 给增强后的store传入reducer
const store = finalCreateStore(reducer)

// 创建一个增强版的history来结合store同步导航事件
const history = syncHistoryWithStore(hashHistory, store)

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
