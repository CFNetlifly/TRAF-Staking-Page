import { all } from 'redux-saga/effects';

import exampleSaga from './example-saga';
import fetchGenesisTokensSaga from './genesis-tokens/fetch-genesis-tokens-saga';
import fetchStakedTokensSaga from './staked-tokens/fetch-staked-tokens-saga';

export default function* rootSaga() {
    yield all([exampleSaga(), fetchGenesisTokensSaga(), fetchStakedTokensSaga()]);
}
