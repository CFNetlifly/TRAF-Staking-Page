import Modal from 'src/components/commons/modal';
import { useSelector, useDispatch } from 'react-redux';
import { start_close_modal, edit_genesis_nft } from 'src/redux/actions';
import ModalCardLayout from 'src/layouts/modal-card';
import lockTime from 'src/static/lock-time-stats';

import styles from './styles.module.scss';

const { outter_box, item_button, active } = styles;

const LockTimeModal = () => {
    const dispatch = useDispatch();

    const { lockTimeModal } = useSelector(state => state.modalReducer);

    const { lockTimeReducer } = useSelector(state => state);

    const closeModal = () => dispatch(start_close_modal());

    /* *~~*~~*~~*~~*~~* CLICK HANDLERS *~~*~~*~~*~~*~~*~~*~~* */

    const handleMonthClick = e => {
        const lockData = JSON.parse(e.currentTarget.dataset.lockData);
        dispatch(edit_genesis_nft({ ...lockData, tokenId: lockTimeModal.data }));
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
                                    <h1 className="subtitle is-size-5 has-text-white is-flex-grow-a has-font-montserrat">
                                        Lock Time
                                    </h1>
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
                                    <h1 className="subtitle is-size-5 has-text-white has-font-spacegrotesk">
                                        Choose a convenient lock time
                                    </h1>

                                    {lockTime.map(item => (
                                        <div className="columns" key={item.uniqueId}>
                                            <div className="column">
                                                <button
                                                    type="button"
                                                    className={`button has-border-1-hwhite-o-5 ${item_button} ${
                                                        lockTimeReducer.lockTime === item.value ? active : ''
                                                    }`}
                                                    data-lock-data={JSON.stringify(item)}
                                                    onClick={handleMonthClick}
                                                >
                                                    <span className="has-font-montserrat has-text-weight-bold">
                                                        {item.name}
                                                    </span>
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
