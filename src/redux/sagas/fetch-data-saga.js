/* eslint-disable camelcase */

import { put, call, takeLatest } from 'redux-saga/effects';

import { fetch_app_data_success, set_app_loading_percentage, fetch_app_data_failure } from '../actions';
import { FETCH_APP_DATA_REQUEST } from '../constants';
import fetch_genesis_tokens_saga from './genesis-tokens/fetch-genesis-tokens-saga';
import fetch_staked_tokens_saga from './staked-tokens/fetch-staked-tokens-saga';

function* fetch_app_data() {
    try {
        yield put(set_app_loading_percentage(5));

        const genesisTokens = yield call(fetch_genesis_tokens_saga);

        yield put(set_app_loading_percentage(10));

        const stakedTokens = yield call(fetch_staked_tokens_saga);

        yield put(set_app_loading_percentage(20));

        yield put(set_app_loading_percentage(50));

        yield put(fetch_app_data_success({ genesisTokens, stakedTokens }));

        yield put(set_app_loading_percentage(100));
    } catch (error) {
        yield put(fetch_app_data_failure(error));
    }
}

export default function* app_data() {
    yield takeLatest(FETCH_APP_DATA_REQUEST, fetch_app_data);
}
