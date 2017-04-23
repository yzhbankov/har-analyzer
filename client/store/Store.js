import {createStore} from 'redux'
import rootReducer from '../reducer/RootReducer'

export default function appStore(initialState) {

    const store = createStore(rootReducer, initialState);

    return store;
}