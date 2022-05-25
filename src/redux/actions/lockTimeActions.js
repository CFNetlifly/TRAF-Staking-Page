import {
    SET_LOCK_TIME,
    SET_LOCK_TIME_NAME,
    SET_APR,
    SET_ROI,
    SET_LOCK_TIME_BUTTON_NAME,
    SET_ROI_DISPLAY,
} from '../constants';

export const set_lock_time = lockTime => ({
    type: SET_LOCK_TIME,
    payload: lockTime,
});

export const set_lock_time_name = lockTimeName => ({
    type: SET_LOCK_TIME_NAME,
    payload: lockTimeName,
});

export const set_lock_time_button_name = lockTimeButtonName => ({
    type: SET_LOCK_TIME_BUTTON_NAME,
    payload: lockTimeButtonName,
});

export const set_apr = apr => ({
    type: SET_APR,
    payload: apr,
});

export const set_roi = roi => ({
    type: SET_ROI,
    payload: roi,
});

export const set_roi_display = roiDisplay => ({
    type: SET_ROI_DISPLAY,
    payload: roiDisplay,
});
