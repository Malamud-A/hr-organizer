import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getCandidates,
  setCandidatesRandomStatuses,
  modifyCandidateStatus,
  getCandidatesFilters,
  setCandidatesFilters,
} from '../Redux/actions/candidates';
import { toggleModalVisibility } from '../Redux/actions/modals';
import Candidates from '../Components/Candidates/Index';

const mapStateToProps = ({ candidates, modals }) => ({
  candidates: candidates.candidates,
  candidatesReadyState: candidates.readyState,
  candidatesFilters: candidates.filters,
  isCandidateModalVisible: modals.candidateInfo.visible,
  candidateModalData: modals.candidateInfo.data,
  isFiltersModalVisible: modals.candidatesFilters.visible,
  filtersModalData: modals.candidatesFilters.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCandidates,
  setCandidatesRandomStatuses,
  modifyCandidateStatus,
  toggleModalVisibility,
  getCandidatesFilters,
  setCandidatesFilters,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
