import {
    LOAD_HAR_CONTENT,
    LOAD_HAR_SUCCESS,
    SHOW_HIDE_STATISTICS,
    LINK_GENERATE_SUCCESS,
    LINK_GENERATE_REQUEST,
    LINK_GENERATE_FAILURE
} from '../constants/Constants'


const initialState = {
    entries: [],
    pages: [],
    isDataLoad: false,
    statistics: {},
    showStatistics: false,
    generatedLink:'',
    isLoading: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_HAR_CONTENT:
        {
            return Object.assign({}, state, {})
        }
        case LOAD_HAR_SUCCESS:
        {
            const pages = action.payload.pages;
            const entries = getPagesEntriesList(action.payload.entries, action.payload.pages);
            const maxTimes = getSetOfMaxTimes(entries, pages);
            const statistics = getPagesListStatistics(entries);
            const showStatistics = action.payload.showStatistics;
            return Object.assign({}, state, {
                entries: entries,
                pages: pages,
                statistics: statistics,
                isDataLoad: true,
                maxTimes: maxTimes,
                showStatistics: showStatistics
            })
        }
        case SHOW_HIDE_STATISTICS:
        {
            console.log(action.payload);
            return Object.assign({}, state, {
                showStatistics: action.payload
            })
        }

        case LINK_GENERATE_SUCCESS:
        {
            return Object.assign({}, state, {
                generatedLink: action.payload,
                isLoading: false
            })
        }
        case LINK_GENERATE_FAILURE:
        {
            return Object.assign({}, state, {
                error: action.payload,
                isLoading: false
            })
        }

        default:
        {
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

function getPageStatistics(entries) {
    const responseContent = {
        image: 0,
        css: 0,
        html: 0,
        javascript: 0,
        others: 0
    };
    const timing = {
        blocked: 0,
        dns: 0,
        ssl: 0,
        connect: 0,
        send: 0,
        wait: 0,
        receive: 0
    };
    const headBody = {
        headSend: 0,
        bodySend: 0,
        headReceive: 0,
        bodyReceive: 0
    };
    const statistics = {
        responseContent: responseContent,
        timing: timing,
        headBody: headBody
    };
    entries.forEach(entrie => {
        let mimeType = entrie.response.content.mimeType;
        let size = entrie.response.content.size;
        if (mimeType.match('html')) responseContent.html += size;
        else if (mimeType.match('css')) responseContent.css += size;
        else if (mimeType.match('image')) responseContent.image += size;
        else if (mimeType.match('javascript')) responseContent.javascript += size;
        else responseContent.others += size;
    });

    entries.forEach(entrie => {
        if (entrie.timings.blocked >= 0) timing.blocked += Math.round(entrie.timings.blocked);
        if (entrie.timings.dns >= 0) timing.dns += Math.round(entrie.timings.dns);
        if (entrie.timings.ssl >= 0) timing.ssl += Math.round(entrie.timings.ssl);
        if (entrie.timings.connect >= 0) timing.connect += Math.round(entrie.timings.connect);
        if (entrie.timings.send >= 0) timing.send += Math.round(entrie.timings.send);
        if (entrie.timings.wait >= 0) timing.wait += Math.round(entrie.timings.wait);
        if (entrie.timings.receive >= 0) timing.receive += Math.round(entrie.timings.receive);
    });

    entries.forEach(entrie => {
        if (entrie.request.bodySize >= 0) headBody.bodySend += entrie.request.bodySize;
        if (entrie.request.headersSize >= 0) headBody.headSend += entrie.request.headersSize;
        if (entrie.response.bodySize >= 0) headBody.bodyReceive += entrie.response.bodySize;
        if (entrie.response.headersSize >= 0) headBody.headReceive += entrie.response.headersSize;
    });
    return statistics;
}

function getPagesListStatistics(entries) {
    let result = [];
    for (let i = 0; i < entries.length; i++) {
        result.push(getPageStatistics(entries[i]))
    }
    return result;
}