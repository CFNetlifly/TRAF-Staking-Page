import Modal from 'src/components/commons/modal';
import { useSelector, useDispatch } from 'react-redux';
import { start_close_modal } from 'src/redux/actions';

import ModalCardLayout from 'src/layouts/modal-card';

import styles from './styles.module.scss';

const { outter_box } = styles;

const WithdrawEarlyModal = () => {
    const dispatch = useDispatch();

    const { withdrawEarlyModal } = useSelector(state => state.modalReducer);
    const closeModal = () => dispatch(start_close_modal());

    return (
        <Modal isOpen={withdrawEarlyModal.isOpen}>
            <div className="resize-manager">
                <div className={`box has-background-hgra2 ${outter_box}`}>
                    <div className="box has-background-hblack2-o-8">
                        <ModalCardLayout
                            header={
                                <div className="is-flex is-flex-direction-row is-justify-content-space-between">
                                    <h1 className="subtitle is-size-5 has-text-white is-flex-grow-a has-text-warning has-font-montserrat">
                                        Warning
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
                                    <div className="content">
                                        <p className="is-size-5 has-text-white has-font-spacegrotesk">
                                            You are about to withdraw your NFT from staking earlier than expected. By
                                            doing so, you will lose the expected rewards.
                                        </p>
                                    </div>
                                    <div className="columns is-centered">
                                        <div className="column is-7">
                                            <button
                                                className="button has-background-transparent has-border-1-hamber-o-5 is-rounded is-fullwidth"
                                                type="button"
                                                onClick={closeModal}
                                            >
                                                <span className="has-text-weight-bold has-text-hamber has-font-montserrat">
                                                    I understand
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            }
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default WithdrawEarlyModal;
