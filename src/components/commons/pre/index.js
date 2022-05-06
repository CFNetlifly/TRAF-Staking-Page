/* eslint-disable no-nested-ternary */
import { useEffect } from 'react';

import LoadingComponent from 'src/components/commons/loading-component';

import { useCelesteSelector } from '@celeste-js/react';

import { useSelector, useDispatch } from 'react-redux';
import { fetch_app_data_request } from 'src/redux/actions/appActions';

const PreComponent = ({ children }) => {
    // celeste state
    const { web3Reducer } = useCelesteSelector(state => state);

    // appp reducer
    const dispatch = useDispatch();
    const { appReducer } = useSelector(state => state);

    useEffect(() => {
        if (!web3Reducer.readonly_initialized) return;
        dispatch(fetch_app_data_request());
    }, [dispatch, web3Reducer.readonly_initialized]);

    return appReducer.loading ? (
        <div
            className="has-background-hdark is-flex is-flex-direction-column"
            style={{ height: '100vh', width: '100vw', zIndex: '100000', position: 'absolute', top: '0', left: '0' }}
        >
            <div className="is-flex-grow-1" style={{ height: '100%' }}>
                <LoadingComponent style={{ height: '100%' }} msg={`Loading ${appReducer.loadingPercent} %`} />
            </div>
        </div>
    ) : appReducer.ready ? (
        children
    ) : null;
};

export default PreComponent;
