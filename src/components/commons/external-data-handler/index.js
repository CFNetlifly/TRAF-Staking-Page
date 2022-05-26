import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celeste-js/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_wallet_data_request, clean_wallet_data } from 'src/redux/actions';

const ExternalDataHandler = () => {
    const dispatch = useDispatch();
    const { walletDataReducer } = useSelector(state => state);
    console.log('🚀 ~ file: index.js ~ line 9 ~ ExternalDataHandler ~ walletDataReducer', walletDataReducer);
    const { walletReducer } = useCelesteSelector(state => state);

    useEffect(() => {
        dispatch(
            fetch_wallet_data_request({
                userAddress: walletReducer.address,
            })
        );
        return () => {
            dispatch(clean_wallet_data());
        };
    }, [dispatch, walletReducer.userAddress]);
};

const ComponentWrapper = () => {
    return (
        <ConnectedWrapper>
            <NetworkWrapper>
                <ExternalDataHandler />
            </NetworkWrapper>
        </ConnectedWrapper>
    );
};

export default ComponentWrapper;
