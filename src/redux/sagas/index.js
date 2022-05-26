import { all } from 'redux-saga/effects';

import exampleSaga from './example-saga';
import fetchWalletDataSaga from './fetch-wallet-data-saga';

export default function* rootSaga() {
    yield all([exampleSaga(), fetchWalletDataSaga()]);
}
