import { SET_LOADING_FAILURE, SET_LOADING_REQUEST, SET_LOADING_SUCCESS } from '../constants';

export const set_loading_request = () => ({
    type: SET_LOADING_REQUEST,
});

export const set_loading_success = () => ({
    type: SET_LOADING_SUCCESS,
});

export const set_loading_failure = () => ({
    type: SET_LOADING_FAILURE,
});
