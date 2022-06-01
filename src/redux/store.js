import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';

import lockTimeReducer from './reducers/lockTimeReducer';
import exampleReducer from './reducers/exampleReducer';
import modalReducer from './reducers/modalReducer';
import genesisTokensReducer from './reducers/genesisTokensReducer';
import stakedTokensReducer from './reducers/stakedTokensReducer';
import walletDataReducer from './reducers/walletDataReducer';
import tokenSelectedReducer from './reducers/tokenSelectedReducer';
import approveNFTReducer from './reducers/approveNFTReducer';
import withdrawNFTReducer from './reducers/withdrawNFTReducer';
import stakeNFTReducer from './reducers/stakeNFTReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    lockTimeReducer,
    exampleReducer,
    modalReducer,
    genesisTokensReducer,
    stakedTokensReducer,
    walletDataReducer,
    tokenSelectedReducer,
    withdrawNFTReducer,
    approveNFTReducer,
    stakeNFTReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
