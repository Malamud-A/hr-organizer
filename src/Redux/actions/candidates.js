import api from '../../utils/api';
import {
  GET_CANDIDATES,
  SET_CANDIDATES_RANDOM_STATUSES,
  CONFIRM_CANDIDATES_READY_STATE,
  MODIFY_CANDIDATE_STATUS,
  GET_CANDIDATES_FILTERS,
  SET_CANDIDATES_FILTERS,
} from '../constants';
import { statuses, randomizeStatus } from '../../utils/candidateStatusUtils';

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
    candidateCopy.status = randomizeStatus();
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

export const modifyCandidateStatus = (name, direction) => async (dispatch, getState) => {
  const { candidates } = getState().candidates;
  const candidateToBeUpdated = candidates.find(candidate => `${candidate.name.first} ${candidate.name.last}` === name);
  console.log();
  try {
    switch (direction) {
      case 'prev':
        candidateToBeUpdated.status = statuses[candidateToBeUpdated.status.numeric - 1];
        break;
      case 'next':
        candidateToBeUpdated.status = statuses[candidateToBeUpdated.status.numeric + 1];
        break;
      default:
        throw { message: `${direction} is not an option for status modification` };
    }

    const modifiedCandidatesList = [...candidates
      .filter(candidate => `${candidate.name.first} ${candidate.name.last}` !== name),
    candidateToBeUpdated,
    ];
    await dispatch({
      type: MODIFY_CANDIDATE_STATUS,
      payload: modifiedCandidatesList,
    });
  } catch (e) {
    console.error(e.message);
  }
};

export const getCandidatesFilters = () => (dispatch, getState) => {
  const filters = JSON.parse(localStorage.getItem('filters'));
  const filtersState = getState().candidates.filters;
  if (filters.name !== filtersState.name || filters.city !== filtersState.city) {
    dispatch({
      type: GET_CANDIDATES_FILTERS,
      payload: filters,
    });
  }
  return filters;
};

export const setCandidatesFilters = filters => (dispatch) => {
  const filtersJSON = JSON.stringify(filters);
  localStorage.setItem('filters', filtersJSON);
  dispatch({
    type: SET_CANDIDATES_FILTERS,
    payload: filters,
  });
};
