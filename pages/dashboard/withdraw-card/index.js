import CardLayout from 'src/layouts/card';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TRAFProxy from 'src/abi-functions/TRAF-Proxy';
import appConfig from 'src/static/app.config';
import { add_token, remove_token, clear_all_tokens, open_modal } from 'src/redux/actions';
import useEpochCountdown from 'src/components/hooks/useCountdown';
import CardPicture from 'src/components/commons/card-picture';
import TimeLeft from './time-left';
import DateOfStaking from './date-of-staking';

const WithdrawCard = ({ tokenId }) => {
    const dispatch = useDispatch();

    const [startingTime, setStartingTime] = useState(0);
    const [endingTime, setEndingTime] = useState(0);
    const [OCAEarned, setOCAEarned] = useState(0);

    const [isSelected, setIsSelected] = useState(false);

    const time = useEpochCountdown(endingTime);
    const { days, hours, minutes, seconds } = time;

    const selectHandler = e => {
        e.preventDefault();
        const newValue = !isSelected;
        if (newValue) {
            dispatch(add_token({ token: tokenId, tokenType: 'stakedTokens' }));
        } else {
            dispatch(remove_token({ token: tokenId, tokenType: 'stakedTokens' }));
        }
        setIsSelected(newValue);
    };

    const selectEarlyWithdraw = e => {
        e.preventDefault();
        const newValue = !isSelected;
        if (newValue) {
            dispatch(open_modal({ modalName: appConfig.modals[1].name, modalData: null }));

            dispatch(add_token({ token: tokenId, tokenType: 'stakedTokens' }));
        } else {
            dispatch(remove_token({ token: tokenId, tokenType: 'stakedTokens' }));
        }
        setIsSelected(newValue);
    };

    useEffect(() => {
        (async () => {
            try {
                const TRAF = TRAFProxy();
                const nftStats = await TRAF.stakingStats(tokenId);
                setStartingTime(nftStats.startingTime);
                setOCAEarned(nftStats.earned / 10 ** 18);
                setEndingTime(parseInt(nftStats.startingTime, 10) + parseInt(nftStats.lockTime, 10));
            } catch (e) {
                // console.log(e);
            }
        })();
    }, [tokenId]);

    useEffect(() => {
        return () => {
            dispatch(clear_all_tokens());
        };
    }, [dispatch]);

    return (
        <CardLayout
            content={
                <div
                    className={`card has-background-hblack2 has-border-radius-20 ${
                        isSelected ? 'has-box-shadow-1-1-10-hamber' : 'has-box-shadow-1-1-10-hblack2'
                    }`}
                >
                    <div className="card-content">
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column">
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
                                    <DateOfStaking startingTime={startingTime} />
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <TimeLeft days={days} hours={hours} minutes={minutes} seconds={seconds} />
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    <div className="columns is-flex is-align-items-center">
                                        <div className="column is-flex is-justify-content-flex-start">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-spacegrotesk">
                                                OCA Earned
                                            </h2>
                                        </div>
                                        <div className="column is-flex is-justify-content-flex-end">
                                            <h2 className="subtitle is-size-6 is-size-7-mobile has-text-white has-font-ptmono">
                                                {OCAEarned}
                                            </h2>
                                        </div>
                                    </div>
                                    <hr
                                        className="has-background-hamber-o-2 mt-0"
                                        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                                    />
                                    {days && hours && minutes && seconds > 0 ? (
                                        <div className="columns is-centered">
                                            <div className="column">
                                                <button
                                                    className="button is-fullwidth is-rounded is-borderless has-background-hred-o-2 has-text-hred2"
                                                    type="submit"
                                                    onClick={selectEarlyWithdraw}
                                                >
                                                    <span className="has-text-weight-bold">
                                                        {isSelected ? 'Unselect' : 'Select'}
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="columns is-centered">
                                            <div className="column">
                                                <button
                                                    className="button is-fullwidth is-rounded is-borderless has-background-hamber-o-2 has-text-hamber"
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
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default WithdrawCard;
