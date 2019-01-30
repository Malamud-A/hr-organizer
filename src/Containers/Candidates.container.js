import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  getCandidates,
  setCandidatesRandomStatuses,
} from '../Redux/actions/candidates';
import Candidates from '../Components/Candidates/Index';

const mapStateToProps = ({ candidates }) => ({
  candidates: candidates.candidates,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCandidates,
  setCandidatesRandomStatuses,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Candidates));
