import {
    LOAD_HAR_CONTENT,
    LOAD_HAR_SUCCESS,
    SHOW_HIDE_STATISTICS,
    LINK_GENERATE_SUCCESS,
    LINK_GENERATE_REQUEST,
    LINK_GENERATE_FAILURE
} from '../constants/Constants'

import api from '../api/harApi'


export function loadHarContent(event) {
    return (dispatch) => {
        dispatch({
            type: LOAD_HAR_CONTENT
        });
        const input = event.target;
        const reader = new FileReader();
        reader.onload = function () {
            let data = JSON.parse(reader.result);
            data.log.showStatistics = false;
            dispatch({
                type: LOAD_HAR_SUCCESS,
                payload: data.log
            })
        };
        reader.readAsText(input.files[0]);
    }
}
export function showHideStatistics(showStatistics) {
    return (dispatch) => {
        dispatch({
            type: SHOW_HIDE_STATISTICS,
            payload: !showStatistics
        })
    }
}

export function saveHarContent(harContent) {
    console.log('harContent', harContent);
    return (dispatch) => {
        api.saveHarContent(harContent)
            .then((data) => {
            console.log('response for save har content', data);
                dispatch({
                    type: LINK_GENERATE_SUCCESS,
                    payload: data
                })
            })
            .catch((err) => {
                dispatch({
                    type: LINK_GENERATE_FAILURE,
                    payload: err,
                    error: true
                })
            })
    }
}