import { FETCH_STAKED_TOKENS_FAILURE, FETCH_STAKED_TOKENS_REQUEST, FETCH_STAKED_TOKENS_SUCCESS } from '../constants';

export const fetch_staked_tokens_failure = error => ({
    type: FETCH_STAKED_TOKENS_FAILURE,
    payload: error,
});

export const fetch_staked_tokens_request = fetchData => ({
    type: FETCH_STAKED_TOKENS_REQUEST,
    payload: fetchData,
});

export const fetch_staked_tokens_success = data => ({
    type: FETCH_STAKED_TOKENS_SUCCESS,
    payload: data,
});
