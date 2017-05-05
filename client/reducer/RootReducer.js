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
            return Object.assign({}, state, {})
        }
        case LOAD_HAR_SUCCESS: {
            const val = Date.parse(action.payload.pages[0].startedDateTime);
            const maxTime = findMaxSubstract(val, action.payload.entries);
            return Object.assign({}, state, {
                entries: action.payload.entries,
                pages: action.payload.pages,
                statistics: action.payload.statistics,
                isDataLoad: true,
                maxTime: maxTime
            })
        }
        default: {
            return state
        }
    }
}

function findMaxSubstract(val, arr){
    var result = 0;
    arr.forEach(function(item, index){
        const maxDiff = Date.parse(item.startedDateTime) - val + item.time;
        if (maxDiff > result) result = maxDiff;
    });
    return result
}