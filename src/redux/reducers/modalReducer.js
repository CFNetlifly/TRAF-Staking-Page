import appConfig from 'src/static/app.config';
import { OPEN_MODAL, PLAY_CLOSE_ANIMATION, CLOSE_MODAL } from '../constants';

const defaultModalStructure = {
    isOpen: false,
    data: null,
};

const defaultState = {
    exampleModal: { ...defaultModalStructure },
    currentModal: '',
    animation: '',
};

appConfig.modals.forEach(modal => {
    defaultState[modal.name] = { ...defaultModalStructure };
});

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                [action.payload.modalName]: { isOpen: true, data: action.payload.data },
                currentModal: action.payload.modalName,
                animation: 'open',
            };

        case PLAY_CLOSE_ANIMATION:
            return {
                ...state,
                animation: 'close',
            };

        case CLOSE_MODAL:
            return {
                ...defaultState,
            };

        default:
            return { ...state };
    }
};

export default reducer;
