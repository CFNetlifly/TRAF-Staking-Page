import {
    SET_LOCK_TIME,
    SET_LOCK_TIME_NAME,
    SET_ROI,
    SET_APR,
    SET_LOCK_TIME_BUTTON_NAME,
    SET_ROI_DISPLAY,
} from '../constants';

const defaultState = {
    lockTime: 2592000,
    lockTimeName: '1 Month - 4% APR',
    lockTimeButtonName: '1 Month',
    apr: 4,
    roi: 50,
    roiDisplay: '50',
};

// eslint-disable-next-line default-param-last
const reducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case SET_LOCK_TIME:
            return {
                ...state,
                lockTime: payload,
            };

        case SET_LOCK_TIME_NAME:
            return {
                ...state,
                lockTimeName: payload,
            };

        case SET_LOCK_TIME_BUTTON_NAME:
            return {
                ...state,
                lockTimeButtonName: payload,
            };

        case SET_ROI:
            return {
                ...state,
                roi: payload,
            };

        case SET_ROI_DISPLAY:
            return {
                ...state,
                roiDisplay: payload,
            };

        case SET_APR:
            return {
                ...state,
                apr: payload,
            };

        default:
            return state;
    }
};

export default reducer;
