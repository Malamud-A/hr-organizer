import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';
import Modal from '../common/Modal/Modal';
import CandidateInfoModal from './CandidateInfoModal';
import CandidatesFiltersModal from './CandidatesFiltersModal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';


class Candidates extends Component {
  async componentDidMount() {
    await this.props.getCandidates();
    await this.props.setCandidatesRandomStatuses();
    await this.props.getCandidatesFilters();
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
      isFiltersModalVisible,
      filtersModalData,
      candidatesFilters
    } = this.props;

    const filteredCandidates = candidates
      .filter(candidate =>
        `${candidate.name.first} ${candidate.name.last}`.includes(candidatesFilters.name.toLowerCase())
        &&
        candidate.location.city.includes(candidatesFilters.city.toLowerCase())
      );

    return (
      <div className="candidates-lists">
        <div className="candidates-lists__list candidates-lists__list_applied">
          <div className="candidates-lists__list--caption">Applied</div>
          {candidatesReadyState && filteredCandidates
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
          {candidatesReadyState && filteredCandidates
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
          {candidatesReadyState && filteredCandidates
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
        <button
          className="candidates-lists__filter-button"
          onClick={() => this.props.toggleModalVisibility('candidatesFilters', this.props.getCandidatesFilters())}
        >
          <FontAwesomeIcon icon={faFilter}/>
        </button>
        {isCandidateModalVisible &&
        <Modal toggleModal={() => this.props.toggleModalVisibility('candidateInfo')}>
          <CandidateInfoModal
            candidate={candidateModalData}
          />
        </Modal>}

        {isFiltersModalVisible &&
        <Modal toggleModal={() => this.props.toggleModalVisibility('candidatesFilters')}>
          <CandidatesFiltersModal
            filters={filtersModalData}
            setCandidatesFilters={this.props.setCandidatesFilters}
            toggleModal={() => this.props.toggleModalVisibility('candidatesFilters')}
          />
        </Modal>
        }
      </div>
    );
  }
}

Candidates.propTypes = {
  candidates: PropTypes.array.isRequired,
  candidatesReadyState: PropTypes.bool.isRequired,
  isCandidateModalVisible: PropTypes.bool.isRequired,
  candidateModalData: PropTypes.object.isRequired,
  isFiltersModalVisible: PropTypes.bool.isRequired,
  filtersModalData: PropTypes.object.isRequired,
  candidatesFilters: PropTypes.object.isRequired,
  getCandidates: PropTypes.func.isRequired,
  setCandidatesRandomStatuses: PropTypes.func.isRequired,
  modifyCandidateStatus: PropTypes.func.isRequired,
  toggleModalVisibility: PropTypes.func.isRequired,
  getCandidatesFilters: PropTypes.func.isRequired,
  setCandidatesFilters: PropTypes.func.isRequired,
};

export default Candidates;
