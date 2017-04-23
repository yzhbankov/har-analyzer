import {
    GET_HAR_CONTENT,
    GET_HAR_SUCCESS
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