import {
    GET_HAR_CONTENT,
    GET_HAR_SUCCESS
} from '../constants/Constants'


const initialState = {
    entries: [],
    page: {},
    isDataLoad: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HAR_CONTENT: {
            return Object.assign({}, state, {isDataLoad: true})
        }
        case GET_HAR_SUCCESS: {
            return Object.assign({}, state, {entries: action.payload.entries, page: action.payload.page, isDataLoad: false})
        }
        default: {
            return state
        }
    }
}