import { ConnectedWrapper, NetworkWrapper, useCelesteSelector } from '@celestejs/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetch_wallet_data_request, clean_wallet_data } from 'src/redux/actions';

const ExternalDataHandler = () => {
    const dispatch = useDispatch();

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
    }, [dispatch, walletReducer.address]);

    return null;
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
