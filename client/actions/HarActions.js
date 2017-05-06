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
            dispatch({
                type: LOAD_HAR_SUCCESS,
                payload: data.log
            })
        };
        reader.readAsText(input.files[0]);
    }
}