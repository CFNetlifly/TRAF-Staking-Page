import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { ConnectedWrapper, useCelesteSelector } from '@celeste-js/react';
import ConnectWallet from 'src/components/commons/connect-wallet';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import appConfig from 'src/static/app.config';
import StakingCard from './staking-card';
import SubmitFooter from './staking-footer';

const Staking = () => {
    const { walletReducer, web3Reducer } = useCelesteSelector(state => state);
    const { genesisTokensReducer } = useSelector(state => state);
    // console.log('🚀 ~ file: index.js ~ line 15 ~ Staking ~ genesisTokensReducer', genesisTokensReducer);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (!web3Reducer.initialized || walletReducer.address === null) return;
    //     dispatch(
    //         fetch_genesis_tokens_request_thunk({
    //             requestName: appConfig.api[0].name,
    //             params: {
    //                 userAddress: walletReducer.address,
    //             },
    //         })
    //     );
    // }, [dispatch, walletReducer.address, web3Reducer.initialized]);

    return (
        <section className="section has-text-centered has-font-montserrat ">
            <h3 className="subtitle is-size-7-mobile has-text-weight-bold has-text-hamber">
                Welcome to TRAF Genesis Staking
            </h3>

            <div className="container">
                <ConnectedWrapper
                    disconnectedComponent={
                        <div className="content">
                            <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                In order to stake your NFTs, please connect your wallet
                            </p>
                            <ConnectWallet />
                        </div>
                    }
                >
                    <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                        Stake your TRAF NFTs to earn $TRAF tokens
                    </p>
                    <StakingCard />
                    <SubmitFooter />
                </ConnectedWrapper>
            </div>
        </section>
    );
};

Staking.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Staking');
export default Staking;
