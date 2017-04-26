import {
    LOAD_HAR_CONTENT,
    LOAD_HAR_SUCCESS
} from '../constants/Constants'


const initialState = {
    entries: [],
    pages: [],
    isDataLoad: false,
    statistics: {}
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_HAR_CONTENT: {
            return Object.assign({}, state, {isDataLoad: true})
        }
        case LOAD_HAR_SUCCESS: {
            return Object.assign({}, state, {
                entries: action.payload.entries,
                pages: action.payload.pages,
                statistics: action.payload.statistics,
                isDataLoad: false
            })
        }
        default: {
            return state
        }
    }
}