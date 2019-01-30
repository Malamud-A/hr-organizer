import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
} from '../constants';

const initialState = {
  candidates: [],
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
    default:
      return state;
  }
};
