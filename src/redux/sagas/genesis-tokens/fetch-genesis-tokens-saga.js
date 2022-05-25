import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_GENESIS_TOKENS_REQUEST } from 'src/redux/constants';
import { fetch_genesis_tokens_success, fetch_genesis_tokens_failure } from 'src/redux/actions/genesisTokensActions';

import api from 'src/api';

function* fetch_genesis_tokens_saga(action) {
    const { fetchData } = action.payload;
    const { requestName, params, callback } = fetchData;

    try {
        const res = yield call(api.get[requestName], params);

        if (callback && typeof callback === 'function') {
            callback(res);
        }

        put(fetch_genesis_tokens_success({ data: res.data, requestName }));
    } catch (error) {
        put(fetch_genesis_tokens_failure({ errorData: error, requestName }));
    }
}

function* saga() {
    yield takeLatest(FETCH_GENESIS_TOKENS_REQUEST, fetch_genesis_tokens_saga);
}

export default saga;
