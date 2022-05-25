import Modal from 'src/components/commons/modal';
import { useSelector, useDispatch } from 'react-redux';
import {
    start_close_modal,
    set_lock_time,
    set_lock_time_name,
    set_apr,
    set_roi,
    set_lock_time_button_name,
    set_roi_display,
} from 'src/redux/actions';
import ModalCardLayout from 'src/layouts/modal-card';
import lockTime from 'src/static/lock-time';

import styles from './styles.module.scss';

const { outter_box, closebutton, item_button, active } = styles;

const LockTimeModal = () => {
    const dispatch = useDispatch();

    const { lockTimeModal } = useSelector(state => state.modalReducer);
    const { lockTimeReducer } = useSelector(state => state);

    const closeModal = () => dispatch(start_close_modal());

    /* *~~*~~*~~*~~*~~* CLICK HANDLERS *~~*~~*~~*~~*~~*~~*~~* */

    const handleMonthClick = e => {
        dispatch(set_lock_time(parseInt(e.currentTarget.dataset.lockTime, 10)));
        dispatch(set_lock_time_button_name(e.currentTarget.dataset.lockTimeButtonName));
        dispatch(set_apr(parseInt(e.currentTarget.dataset.apr, 10)));
        dispatch(set_roi(parseInt(e.currentTarget.dataset.roi, 10)));
        dispatch(set_roi_display(e.currentTarget.dataset.roiDisplay));
        dispatch(set_lock_time_name(e.currentTarget.dataset.lockTimeName));
        closeModal();
    };

    return (
        <Modal isOpen={lockTimeModal.isOpen}>
            <div className="resize-manager">
                <div className={`box has-background-hgra2 ${outter_box}`}>
                    <div className="box has-background-hblack2-o-8">
                        <ModalCardLayout
                            header={
                                <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                                    <h1 className="subtitle is-size-5 has-text-white is-flex-grow-a">Lock Time</h1>
                                    <button
                                        className="has-text-white is-small is-flex unstyled-button"
                                        type="button"
                                        onClick={closeModal}
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            }
                            content={
                                <form>
                                    <h1 className="subtitle is-size-5 has-text-white ">
                                        Choose a convenient lock time
                                    </h1>

                                    {lockTime.map(item => (
                                        <div className="columns" key={item.id}>
                                            <div className="column">
                                                <button
                                                    type="button"
                                                    className={`button has-border-1-hwhite-o-5 ${item_button} ${
                                                        lockTimeReducer.lockTime === item.value ? active : ''
                                                    }`}
                                                    data-lock-time={item.value}
                                                    data-lock-time-name={item.name}
                                                    data-lock-time-button-name={item.buttonName}
                                                    data-roi={item.roi}
                                                    data-apr={item.apr}
                                                    data-roi-display={item.roiDisplay}
                                                    onClick={handleMonthClick}
                                                >
                                                    <b>{item.name}</b>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </form>
                            }
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default LockTimeModal;
