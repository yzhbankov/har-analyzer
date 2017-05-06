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
            const pages = action.payload.pages;
            const entries = getPagesEntriesList(action.payload.entries, action.payload.pages);
            const maxTimes = getSetOfMaxTimes(entries, pages);
            return Object.assign({}, state, {
                entries: entries,
                pages: pages,
                statistics: action.payload.statistics,
                isDataLoad: true,
                maxTimes: maxTimes
            })
        }
        default: {
            return state
        }
    }
}

function findMaxSubstract(val, arr) {
    var result = 0;
    arr.forEach(function (item, index) {
        const maxDiff = Date.parse(item.startedDateTime) - val + item.time;
        if (maxDiff > result) result = maxDiff;
    });
    return result
}

function getPagesEntriesList(entriesList, pagesList) {
    let result = [];
    let temp = [];
    for (let i = 0; i < pagesList.length; i++) {
        for (let j = 0; j < entriesList.length; j++) {
            if (pagesList[i].id == entriesList[j].pageref) {
                temp.push(entriesList[j]);
            }
        }
        result.push(temp);
        temp = [];
    }
    return result;
}

function getSetOfMaxTimes(entries, pages) {
    let result = [];
    for (let i = 0; i < pages.length; i++) {
        let val = Date.parse(pages[i].startedDateTime);
        let maxTime = findMaxSubstract(val, entries[i]);
        result.push(maxTime);
    }
    return result;
}