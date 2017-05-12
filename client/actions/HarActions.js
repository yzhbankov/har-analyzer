import {
    LOAD_HAR_CONTENT,
    LOAD_HAR_SUCCESS,
    SHOW_HIDE_STATISTICS
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