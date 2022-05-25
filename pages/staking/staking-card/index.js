/* eslint-disable @next/next/no-img-element */
import { useDispatch, useSelector } from 'react-redux';
import CardLayout from 'src/layouts/card';
import appConfig from 'src/static/app.config';
import { open_modal } from 'src/redux/actions';
import WithDrawButton from './select-button';

const StakingCard = () => {
    const dispatch = useDispatch();
    const { lockTimeReducer } = useSelector(state => state);

    const handleMonthClick = () => {
        dispatch(open_modal({ modalName: appConfig.modals[0].name, modalData: null }));
    };

    return (
        <CardLayout
            content={
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <div className="column is-flex is-justify-content-center">
                                <figure className="image is-300x300">
                                    <img
                                        className="has-border-radius-30"
                                        src="media/nfts/episode2.jpg"
                                        alt="Episode 3"
                                    />
                                </figure>
                            </div>
                            <div className="column">
                                <h1 className="subtitle is-size-4 has-text-white has-font-spacegrotesk">
                                    The Red Ape Family
                                    <span className="has-font-ptmono">#523</span>
                                </h1>
                            </div>
                            <hr
                                className="has-background-hamber-o-2"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns is-flex is-align-items-center">
                                <div className="column is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">APR</h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-ptmono">
                                        {lockTimeReducer.apr} %
                                    </h2>
                                </div>
                            </div>
                            <hr
                                className="has-background-hamber-o-2 mt-0"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns is-flex is-align-items-center">
                                <div className="column is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">ROI</h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-ptmono">
                                        {lockTimeReducer.roiDisplay} OCA
                                    </h2>
                                </div>
                            </div>
                            <hr
                                className="has-background-hamber-o-2 mt-0"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns is-flex is-align-items-center" style={{ height: '55px' }}>
                                <div className="column is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">
                                        Lock Time
                                    </h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <button
                                        className="button  is-rounded has-background-transparent has-text-white has-border-1-hamber-o-10"
                                        type="button"
                                        onClick={handleMonthClick}
                                    >
                                        <span className="has-font-ptmono">{lockTimeReducer.lockTimeButtonName}</span>
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
                            <p className="subtitle is-size-6 has-text-white has-font-spacegrotesk">
                                Increase the lock time to get higher APR %
                            </p>
                            <WithDrawButton />
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default StakingCard;
