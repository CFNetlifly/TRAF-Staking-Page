import { FETCH_GENESIS_TOKENS_FAILURE, FETCH_GENESIS_TOKENS_REQUEST, FETCH_GENESIS_TOKENS_SUCCESS } from '../constants';

export const fetch_genesis_tokens_failure = error => ({ type: FETCH_GENESIS_TOKENS_FAILURE, payload: error });

export const fetch_genesis_tokens_request = fetchData => ({ type: FETCH_GENESIS_TOKENS_REQUEST, payload: fetchData });

export const fetch_genesis_tokens_success = data => ({ type: FETCH_GENESIS_TOKENS_SUCCESS, payload: data });
