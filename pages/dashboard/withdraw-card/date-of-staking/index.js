import timeToDate from 'src/static/dates-handler';

const DateOfStaking = ({ startingTime }) => {
    return (
        <div className="columns is-flex is-align-items-center">
            <div className="column is-narrow is-flex is-justify-content-flex-start">
                <h2 className="subtitle is-size-6 has-text-white has-font-spacegrotesk">Date of Staking</h2>
            </div>
            <div className="column is-flex is-justify-content-flex-end">
                <h2 className="subtitle is-size-6 has-text-white has-font-ptmono">{timeToDate(startingTime)}</h2>
            </div>
        </div>
    );
};

export default DateOfStaking;
