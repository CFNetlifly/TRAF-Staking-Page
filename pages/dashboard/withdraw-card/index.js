import CardLayout from 'src/layouts/card';
import WithDrawButton from './select-button';
// import WithDrawButton from './select-button';

const WithdrawCard = () => {
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
                                    <span className="has-font-ptmono">#999</span>
                                </h1>
                            </div>
                            <hr
                                className="has-background-hamber-o-2"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns is-flex is-align-items-center">
                                <div className="column is-narrow is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">
                                        Date of Staking
                                    </h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-ptmono">
                                        September 12, 2019
                                    </h2>
                                </div>
                            </div>
                            <hr
                                className="has-background-hamber-o-2 mt-0"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns" style={{ height: '44px' }}>
                                <div className="column is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">
                                        Time Left
                                    </h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <div className="columns is-gapless is-flex is-align-items-center">
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono pr-2">Y</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00:</h2>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono pr-2">M</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00:</h2>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono pr-2">D</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00:</h2>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono pr-2">H</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00:</h2>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono pr-2">m</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00:</h2>
                                        </div>
                                        <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                                            <h4 className="has-text-white has-font-ptmono">S</h4>
                                            <h2 className="is-size-6 has-text-white has-font-ptmono">00</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr
                                className="has-background-hamber-o-2 mt-0"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <div className="columns is-flex is-align-items-center">
                                <div className="column is-flex is-justify-content-flex-start">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">
                                        TRAF Earned
                                    </h2>
                                </div>
                                <div className="column is-flex is-justify-content-flex-end">
                                    <h2 className="subtitle is-size-6 has-text-white has-font-ptmono">5000</h2>
                                </div>
                            </div>
                            <hr
                                className="has-background-hamber-o-2 mt-0"
                                style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
                            />
                            <WithDrawButton />
                        </div>
                    </div>
                </div>
            }
        />
    );
};

export default WithdrawCard;
