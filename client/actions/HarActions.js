import {
    GET_HAR_CONTENT,
    GET_HAR_SUCCESS,
    GET_STATISTICS_SUCCESS
} from '../constants/Constants'


export function getHarContent(event) {
    return (dispatch) => {
        dispatch({
            type: GET_HAR_CONTENT
        });
        const input = event.target;
        const reader = new FileReader();
        reader.onload = function () {
            let data = JSON.parse(reader.result);
            dispatch({
                type: GET_HAR_SUCCESS,
                payload: data.log
            })
        };
        reader.readAsText(input.files[0]);
    }
}

export function getStatistics(entries) {
    return (dispatch) => {
        const responseContent = {
            image: 0,
            css: 0,
            html: 0,
            javascript: 0,
            others: 0
        };
        const statistics = {responseContent: responseContent};
        entries.forEach((entrie) => {
            let mimeType = entrie.response.content.mimeType;
            let size = entrie.response.content.size;
            if (mimeType.match('html')) responseContent.html += size;
            else if (mimeType.match('css')) responseContent.css += size;
            else if (mimeType.match('image')) responseContent.image += size;
            else if (mimeType.match('javascript')) responseContent.javascript += size;
            else responseContent.others += size;
        });

        dispatch({
            type: GET_STATISTICS_SUCCESS,
            payload: statistics
        })
    }

}