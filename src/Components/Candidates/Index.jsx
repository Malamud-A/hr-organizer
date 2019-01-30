import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Candidate from './Candidate';

class Candidates extends Component {
  async componentDidMount() {
    await this.props.getCandidates();
    this.props.setCandidatesRandomStatuses();
  }

  render() {
    const { candidates } = this.props;
    return (
      <div className="candidates-lists">
        <div className="candidates lists__applied-list">
          {candidates
            .filter(candidate => candidate.status === 'Applied')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
              />
            ))}
        </div>
        <div className="candidates lists__interviewing-list">
          {candidates
            .filter(candidate => candidate.status === 'Interviewing')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
              />
            ))}
        </div>
        <div className="candidates lists__hired-list">
          {candidates
            .filter(candidate => candidate.status === 'Hired')
            .map(candidate => (
              <Candidate
                key={`candidate-${candidate.email}`}
                thumbNail={candidate.picture.thumbnail}
                name={`${candidate.name.first} ${candidate.name.last}`}
              />
            ))}
        </div>
      </div>
    );
  }
}

Candidates.propTypes = {
  candidates: PropTypes.array.isRequired,
  getCandidates: PropTypes.func.isRequired,
  setCandidatesRandomStatuses: PropTypes.func.isRequired,
};

export default Candidates;
