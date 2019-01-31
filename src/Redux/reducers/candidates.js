import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
  CONFIRM_CANDIDATES_READY_STATE,
} from '../constants';

const initialState = {
  candidates: [],
  readyState: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES:
      return {
        ...state,
        candidates: action.payload,
      };
    case SET_CANDIDATES_RANDOM_STATUSES:
      return {
        ...state,
        candidates: action.payload,
      };
    case CONFIRM_CANDIDATES_READY_STATE: {
      return {
        ...state,
        readyState: true,
      };
    }
    default:
      return state;
  }
};
