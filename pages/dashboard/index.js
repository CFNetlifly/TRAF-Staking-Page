/* eslint-disable no-nested-ternary */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import { ConnectedWrapper, NetworkWrapper, SwitchNetworkButton } from '@celeste-js/react';
import ConnectWallet from 'src/components/commons/connect-wallet';
import { useSelector } from 'react-redux';
import LoadingComponent from 'src/components/commons/loading-component';
import splitEvery from 'src/static/array-splitter';
import WithdrawCard from './withdraw-card';
import SubmitFooter from './dashboard-footer';

const Dashboard = () => {
    const { walletDataReducer } = useSelector(state => state);

    return (
        <section className="section has-text-centered has-font-montserrat ">
            <h3 className="subtitle is-size-7-mobile has-text-weight-bold has-text-hamber">
                Welcome to TRAF Dashoard Page
            </h3>

            <div className="container">
                <ConnectedWrapper
                    disconnectedComponent={
                        <div className="content">
                            <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                In order to view your dashboard, please connect your wallet
                            </p>
                            <ConnectWallet />
                        </div>
                    }
                >
                    <NetworkWrapper
                        info={
                            <div className="content">
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    In order to view your dashboard, please change your network to ethereum mainnet
                                </p>
                                <div className="py-6">
                                    <SwitchNetworkButton
                                        chainId={1}
                                        className="button is-rounded has-text-black has-background-hamber-o-7 has-text-weight-bold is-borderless has-box-shadow-0-0-10-hamber"
                                        onErrorCB={() => {}}
                                    >
                                        <span className="icon">
                                            <i className="fas fa-exchange-alt" />
                                        </span>
                                        <span>Switch to ETH Mainnet</span>
                                    </SwitchNetworkButton>
                                </div>
                            </div>
                        }
                    >
                        {walletDataReducer.success ? (
                            <>
                                {walletDataReducer.data.stakedTokens.staker ? (
                                    <>
                                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                            You currently have {walletDataReducer.data.stakedTokens.nfts.length} staked
                                            NFTs
                                        </p>
                                        {splitEvery(walletDataReducer.data.stakedTokens.nfts, 3).map(nfts => (
                                            <div className="columns is-centered" key={nfts}>
                                                {nfts.map(nft => (
                                                    <div className="column is-one-third" key={nft}>
                                                        <WithdrawCard tokenId={nft} />
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </>
                                ) : walletDataReducer.data.genesisTokens.genesisholder ? (
                                    <div className="content py-4">
                                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                            You currently don&#39;t have any staked NFTs, please stake one to view your
                                            dashboard.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="content py-4">
                                        <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                            You currently don&#39;t own any NFTs, please buy one at{' '}
                                            <a
                                                className="is-underlined has-text-white"
                                                href="https://opensea.io/collection/theredapefamilygenesis"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                opensea
                                            </a>{' '}
                                            to stake.
                                        </p>
                                    </div>
                                )}
                                {walletDataReducer.data.stakedTokens.staker ? <SubmitFooter /> : null}
                            </>
                        ) : walletDataReducer.loading ? (
                            <div className="content py-6">
                                <LoadingComponent />
                                <div className="py-6" />
                            </div>
                        ) : (
                            <div className="content">
                                <p className="subtitle is-size-7-mobile has-text-white has-font-spacegrotesk">
                                    An error occurred while loading your wallet data. Please try again later.
                                </p>
                                <div className="py-6" />
                                <br />
                            </div>
                        )}
                    </NetworkWrapper>
                </ConnectedWrapper>
            </div>
        </section>
    );
};

Dashboard.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Dashboard');
export default Dashboard;
