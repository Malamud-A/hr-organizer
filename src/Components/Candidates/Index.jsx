import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Modal from '../common/Modal/Modal';
import CandidateInfoModal from './CandidateInfoModal';

class Candidates extends Component {
  async componentDidMount() {
    await this.props.getCandidates();
    await this.props.setCandidatesRandomStatuses();
  };

  toggleCandidateInfoModal = (candidate) => {
    this.props.toggleModalVisibility('candidateInfo', candidate);
  };

  render() {
    const {
      candidates,
      isCandidateModalVisible,
      candidateModalData,
      candidatesReadyState,
      modifyCandidateStatus,
    } = this.props;
    return (
      <div className="candidates-lists">
        <div className="candidates-lists__list candidates-lists__list_applied">
          <div className="candidates-lists__list--caption">Applied</div>
          {candidatesReadyState && candidates
            .filter(candidate => candidate.status.lingual === 'Applied')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
                candidate={candidate}
                toggleInfoModal={this.toggleCandidateInfoModal}
                modifyCandidateStatus={modifyCandidateStatus}
              />
            ))}
        </div>
        <div className="candidates-lists__list candidates-lists__list_interviewing">
          <div className="candidates-lists__list--caption">Interviewing</div>
          {candidatesReadyState && candidates
            .filter(candidate => candidate.status.lingual === 'Interviewing')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
                candidate={candidate}
                toggleInfoModal={this.toggleCandidateInfoModal}
                modifyCandidateStatus={modifyCandidateStatus}
              />
            ))}
        </div>
        <div className="candidates-lists__list candidates-lists__list_hired">
          <div className="candidates-lists__list--caption">Hired</div>
          {candidatesReadyState && candidates
            .filter(candidate => candidate.status.lingual === 'Hired')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
                candidate={candidate}
                toggleInfoModal={this.toggleCandidateInfoModal}
                modifyCandidateStatus={modifyCandidateStatus}
              />
            ))}
        </div>
        {isCandidateModalVisible &&
        <Modal toggleModal={() => this.props.toggleModalVisibility('candidateInfo')}>
          <CandidateInfoModal
            candidate={candidateModalData}
          />
        </Modal>}
      </div>
    );
  }
}

Candidates.propTypes = {
  candidates: PropTypes.array.isRequired,
  getCandidates: PropTypes.func.isRequired,
  setCandidatesRandomStatuses: PropTypes.func.isRequired,
  toggleModalVisibility: PropTypes.func.isRequired,
  modifyCandidateStatus: PropTypes.func.isRequired,
};

export default Candidates;
