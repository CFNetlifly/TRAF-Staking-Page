/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { add_token, remove_token, clear_all_tokens, open_modal } from 'src/redux/actions';
import CardLayout from 'src/layouts/card';
import appConfig from 'src/static/app.config';
import CardPicture from 'src/components/commons/card-picture';

const StakingCard = ({ tokenId }) => {
    const dispatch = useDispatch();
    const { lockTimeReducer, approveNFTReducer } = useSelector(state => state);

    const [lockTimeData, setLockTimeData] = useState(lockTimeReducer.nfts.find(item => item.tokenId === tokenId));
    const [isSelected, setIsSelected] = useState(false);

    const selectHandler = e => {
        e.preventDefault();
        const newValue = !isSelected;
        if (newValue) {
            dispatch(add_token({ token: tokenId, tokenType: 'genesisTokens' }));
        } else {
            dispatch(remove_token({ token: tokenId, tokenType: 'genesisTokens' }));
        }
        setIsSelected(newValue);
    };

    useEffect(() => {
        setLockTimeData(lockTimeReducer.nfts.find(item => item.tokenId === tokenId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lockTimeReducer.nfts]);

    const handleMonthClick = () => {
        dispatch(open_modal({ modalName: appConfig.modals[0].name, modalData: tokenId }));
    };

    useEffect(() => {
        return () => {
            dispatch(clear_all_tokens());
        };
    }, [dispatch]);

    return (
        <CardLayout
            content={
                <div
                    className={`card is-size-7-mobile has-background-hblack2 has-border-radius-20 ${
                        isSelected ? 'has-box-shadow-1-1-10-hamber' : 'has-box-shadow-1-1-10-hblack2'
                    }`}
                >
                    <div className="card-content">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-narrow">
                                    <div className="column is-flex is-justify-content-center">
                                        <CardPicture id={tokenId} />
                                    </div>
                                    <div className="column">
                                        <h1 className="subtitle is-size-4 is-size-6-mobile has-text-white has-font-spacegrotesk">
                                            The Red Ape Family
                                            <span className="has-font-ptmono">#{tokenId}</span>
                                        </h1>
                                    </div>
                                    <hr
                                        className="has-background-hamber-o-2"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <div className="columns is-flex is-align-items-center">
                                        <div className="column is-flex is-justify-content-flex-start">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-spacegrotesk">
                                                APR
                                            </h2>
                                        </div>
                                        <div className="column is-flex is-justify-content-flex-end">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-ptmono">
                                                {lockTimeData.apr} %
                                            </h2>
                                        </div>
                                    </div>
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <div className="columns is-flex is-align-items-center">
                                        <div className="column is-flex is-justify-content-flex-start">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-spacegrotesk">
                                                ROI
                                            </h2>
                                        </div>
                                        <div className="column is-flex is-justify-content-flex-end">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-ptmono">
                                                {lockTimeData.roiDisplay} OCA
                                            </h2>
                                        </div>
                                    </div>
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <div className="columns is-flex is-align-items-center" style={{ height: '55px' }}>
                                        <div className="column is-flex is-justify-content-flex-start">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-spacegrotesk">
                                                Lock Time
                                            </h2>
                                        </div>
                                        <div className="column is-flex is-justify-content-flex-end">
                                            <button
                                                className="button is-rounded is-size-7-mobile has-background-transparent has-text-white has-border-1-hamber-o-10"
                                                type="button"
                                                onClick={handleMonthClick}
                                            >
                                                <span className="has-font-ptmono">{lockTimeData.buttonName}</span>
                                                <span className="icon is-small">
                                                    <i className="fas fa-angle-down" aria-hidden="true" />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <p className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-spacegrotesk">
                                        Increase the lock time to get higher APR %
                                    </p>
                                    <button
                                        className="button is-fullwidth is-size-7-mobile is-rounded is-borderless has-background-hamber-o-2 has-text-hamber"
                                        type="button"
                                        onClick={selectHandler}
                                        // disabled={approveNFTReducer.success === false}
                                    >
                                        <span className="has-text-weight-bold">
                                            {isSelected ? 'Unselect' : 'Select'}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default StakingCard;
