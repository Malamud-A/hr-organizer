import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Candidate = (
  {
    thumbNail,
    name,
    candidate,
    modifyCandidateStatus,
    toggleInfoModal,
  },
) => {
  const toggleModal = () => {
    toggleInfoModal(candidate);
  };

  const modifyStatus = (e) => {
    modifyCandidateStatus(name, e.target.dataset.direction);
  };

  return (
    <div className="candidate">
      <img src={thumbNail} alt="thumbnail" className="candidate__photo" />
      <p className="candidate__name">{name}</p>
      <div className="candidate__controls">
        {candidate.status.lingual !== 'Applied'
        && (
          <button
            type="button"
            data-direction="prev"
            className="candidate__controls--change-stage candidate__controls--change-stage_prev"
            onClick={modifyStatus}
          />
        )}
        <button
          type="button"
          className="candidate__controls--more-info"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>

        {candidate.status.lingual !== 'Hired'
        && (
          <button
            type="button"
            data-direction="next"
            className="candidate__controls--change-stage candidate__controls--change-stage_next"
            onClick={modifyStatus}
          />
        )}
      </div>
    </div>
  );
};

Candidate.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  candidate: PropTypes.object.isRequired,
  toggleInfoModal: PropTypes.func.isRequired,
  modifyCandidateStatus: PropTypes.func.isRequired,
};

export default Candidate;
