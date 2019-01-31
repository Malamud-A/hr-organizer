import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCandidates,
  setCandidatesRandomStatuses,
} from '../Redux/actions/candidates';
import { toggleModalVisibility } from '../Redux/actions/modals';
import Candidates from '../Components/Candidates/Index';

const mapStateToProps = ({ candidates, modals }) => ({
  candidates: candidates.candidates,
  candidatesReadyState: candidates.readyState,
  isCandidateModalVisible: modals.candidateInfo.visible,
  candidateModalData: modals.candidateInfo.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCandidates,
  setCandidatesRandomStatuses,
  toggleModalVisibility,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Candidates));
