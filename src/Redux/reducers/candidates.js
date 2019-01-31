import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
  CONFIRM_CANDIDATES_READY_STATE,
  MODIFY_CANDIDATE_STATUS,
  GET_CANDIDATES_FILTERS,
  SET_CANDIDATES_FILTERS,
} from '../constants';

const initialState = {
  candidates: [],
  readyState: false,
  filters: {
    name: '',
    city: '',
  },
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

    case CONFIRM_CANDIDATES_READY_STATE:
      return {
        ...state,
        readyState: true,
      };

    case MODIFY_CANDIDATE_STATUS:
      return {
        ...state,
        candidates: action.payload,
      };
    case GET_CANDIDATES_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      };
    }
    case SET_CANDIDATES_FILTERS: {
      return {
        ...state,
        filters: action.payload,
      }
    }

    default:
      return state;
  }
};
