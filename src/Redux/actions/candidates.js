import api from '../../utils/api';
import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
  CONFIRM_CANDIDATES_READY_STATE,
} from '../constants';
import statusRandomizer from '../../utils/statusRandomizer';

export const getCandidates = () => async (dispatch) => {
  try {
    const res = await api.getCandidates();
    await dispatch({
      type: GET_CANDIDATES,
      payload: res.data.results,
    });
    return res;
  } catch (e) {
    console.error(e);
    return 'error';
  }
};

export const setCandidatesRandomStatuses = () => async (dispatch, getState) => {
  const { candidates } = getState().candidates;
  const modifiedCandidates = candidates.map((candidate) => {
    const candidateCopy = { ...candidate };
    candidateCopy.status = statusRandomizer();
    return candidateCopy;
  });
  await dispatch({
    type: SET_CANDIDATES_RANDOM_STATUSES,
    payload: modifiedCandidates,
  });
  await dispatch({
    type: CONFIRM_CANDIDATES_READY_STATE,
  });
  return true;
};
