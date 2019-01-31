import { TOGGLE_MODAL_VISIBILITY } from '../constants';

const initialState = {
  candidateInfo: {
    visible: false,
    data: {},
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_VISIBILITY:
      return {
        ...state,
        [action.payload.modal]: {
          visible: action.payload.modalState,
          data: action.payload.data,
        },
      };
    default:
      return state;
  }
};
