import appConfig from 'src/static/app.config';
import { useDispatch } from 'react-redux';
import { open_modal } from 'src/redux/actions';

const WithdrawButton = ({ time }) => {
    const dispatch = useDispatch();
    const { days, hours, minutes, seconds } = time;

    return days && hours && minutes && seconds > 0 ? (
        <div className="columns is-centered">
            <div className="column is-6">
                <button
                    className="button is-fullwidth is-rounded is-borderless has-background-hred-o-2 has-text-hred2"
                    type="submit"
                    onClick={() => {
                        dispatch(open_modal({ modalName: appConfig.modals[1].name, modalData: null }));
                        console.log(appConfig.modals[1].name);
                    }}
                >
                    <span className="has-text-weight-bold">Select</span>
                </button>
            </div>
        </div>
    ) : (
        <div className="columns is-centered">
            <div className="column is-6">
                <button
                    className="button is-fullwidth is-rounded is-borderless has-background-hamber-o-2 has-text-hamber"
                    type="submit"
                >
                    <span className="has-text-weight-bold">Select</span>
                </button>
            </div>
        </div>
    );
};

export default WithdrawButton;
