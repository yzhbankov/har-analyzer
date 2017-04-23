import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import createStore from './store/Store'
import App from './container/App'

const store = createStore();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)