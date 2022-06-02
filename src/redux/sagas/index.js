import { all } from 'redux-saga/effects';

import fetchWalletDataSaga from './fetch-wallet-data-saga';

export default function* rootSaga() {
    yield all([fetchWalletDataSaga()]);
}
