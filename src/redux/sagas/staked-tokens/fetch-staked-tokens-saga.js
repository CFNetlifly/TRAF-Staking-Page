import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_STAKED_TOKENS_REQUEST } from 'src/redux/constants';
import { fetch_staked_tokens_success, fetch_staked_tokens_failure } from 'src/redux/actions/stakedTokensActions';

import api from 'src/api';

function* fetch_staked_tokens_saga(action) {
    const { fetchData } = action.payload;
    const { requestName, params, callback } = fetchData;

    try {
        const res = yield call(api.get[requestName], params);

        if (callback && typeof callback === 'function') {
            callback(res);
        }

        put(fetch_staked_tokens_success({ data: res.data, requestName }));
    } catch (error) {
        put(fetch_staked_tokens_failure({ errorData: error, requestName }));
    }
}

function* saga() {
    yield takeLatest(FETCH_STAKED_TOKENS_REQUEST, fetch_staked_tokens_saga);
}

export default saga;
