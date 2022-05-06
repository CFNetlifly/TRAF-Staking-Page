import {
    FETCH_APP_DATA_REQUEST,
    FETCH_APP_DATA_SUCCESS,
    FETCH_APP_DATA_FAILURE,
    SET_APP_LOADING_PERCENTAGE,
} from '../constants';

export const fetch_app_data_request = () => ({ type: FETCH_APP_DATA_REQUEST });
export const fetch_app_data_success = data => ({ type: FETCH_APP_DATA_SUCCESS, payload: data });
export const fetch_app_data_failure = errorData => ({ type: FETCH_APP_DATA_FAILURE, payload: errorData });
export const set_app_loading_percentage = loadingPercent => ({
    type: SET_APP_LOADING_PERCENTAGE,
    payload: loadingPercent,
});
