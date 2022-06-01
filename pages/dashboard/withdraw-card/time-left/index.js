const TimeLeft = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="columns is-flex" style={{ height: '44px' }}>
            <div className="column is-flex is-justify-content-flex-start">
                <h2 className="subtitle is-size-6 is-size-7-mobile  has-text-white has-font-spacegrotesk">Time Left</h2>
            </div>
            <div className="column is-flex is-justify-content-flex-end">
                <div className="columns is-gapless is-flex is-align-items-center">
                    <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                        <h4 className="has-text-white has-font-ptmono pr-2 is-size-7-mobile ">D</h4>
                        <h2 className="is-size-6 is-size-7-mobile has-text-white has-font-ptmono">{days}:</h2>
                    </div>
                    <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                        <h4 className="has-text-white  is-size-7-mobile has-font-ptmono pr-2">H</h4>
                        <h2 className="is-size-6 is-size-7-mobile has-text-white has-font-ptmono">{hours}:</h2>
                    </div>
                    <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                        <h4 className="has-text-white  is-size-7-mobile has-font-ptmono pr-2">M</h4>
                        <h2 className="is-size-6 is-size-7-mobile has-text-white has-font-ptmono">{minutes}:</h2>
                    </div>
                    <div className="column is-flex is-flex-direction-column is-justify-content-flex-start">
                        <h4 className="has-text-white is-size-7-mobile has-font-ptmono">S</h4>
                        <h2 className="is-size-6 is-size-7-mobile has-text-white has-font-ptmono">{seconds}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLeft;
