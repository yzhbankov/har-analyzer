import {
    LOAD_HAR_CONTENT,
    LOAD_HAR_SUCCESS
} from '../constants/Constants'


export function loadHarContent(event) {
    return (dispatch) => {
        dispatch({
            type: LOAD_HAR_CONTENT
        });
        const input = event.target;
        const reader = new FileReader();
        reader.onload = function () {
            let data = JSON.parse(reader.result);
            let statistics = getStatistics(data.log.entries);
            data.log.statistics = statistics;
            dispatch({
                type: LOAD_HAR_SUCCESS,
                payload: data.log
            })
        };
        reader.readAsText(input.files[0]);
    }
}

function getStatistics(entries) {
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