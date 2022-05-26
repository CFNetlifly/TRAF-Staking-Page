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

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    lockTimeReducer,
    exampleReducer,
    modalReducer,
    genesisTokensReducer,
    stakedTokensReducer,
    walletDataReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
