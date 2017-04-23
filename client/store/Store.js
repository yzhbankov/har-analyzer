import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer/RootReducer'
import thunk from 'redux-thunk'

export default function appStore(initialState) {

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    return store;
}