import {
    GET_HAR_CONTENT,
    GET_HAR_SUCCESS,
    GET_STATISTICS_SUCCESS
} from '../constants/Constants'


const initialState = {
    entries: [],
    pages: [],
    isDataLoad: false,
    statistics: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_HAR_CONTENT: {
            return Object.assign({}, state, {isDataLoad: true})
        }
        case GET_HAR_SUCCESS: {
            return Object.assign({}, state, {
                entries: action.payload.entries,
                pages: action.payload.pages,
                isDataLoad: false
            })
        }
        case GET_STATISTICS_SUCCESS: {
            return Object.assign({}, state, {statistics: action.payload})
        }
        default: {
            return state
        }
    }
}