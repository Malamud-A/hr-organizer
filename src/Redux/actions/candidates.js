import api from '../../utils/api';
import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
} from '../constants';
import statusRandomizer from '../../utils/statusRandomizer';

export const getCandidates = () => async (dispatch) => {
  try {
    const res = await api.getCandidates();
    dispatch({
      type: GET_CANDIDATES,
      payload: res.data.results,
    });
  } catch (e) {
    console.error(e);
  }
};

export const setCandidatesRandomStatuses = () => (dispatch, getState) => {
  const { candidates } = getState().candidates;
  const modifiedCandidates = candidates.map((candidate) => {
    const candidateCopy = { ...candidate };
    candidateCopy.status = statusRandomizer();
    return candidateCopy;
  });
  dispatch({
    type: SET_CANDIDATES_RANDOM_STATUSES,
    payload: modifiedCandidates,
  });
};
