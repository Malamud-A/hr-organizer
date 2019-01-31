import { TOGGLE_MODAL_VISIBILITY } from '../constants';

export const toggleModalVisibility = (modal, data = {}) => (dispatch, getState) => {
  const modalState = getState().modals[modal].visible;
  dispatch({
    type: TOGGLE_MODAL_VISIBILITY,
    payload: {
      modal,
      modalState: !modalState,
      data,
    },
  });
};
