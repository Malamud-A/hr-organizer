import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Candidate = (props) => {
  const { thumbNail, name, candidate } = props;

  const toggleModal = () => {
    props.toggleModal(candidate);
  };

  return (
    <div className="candidate">
      <img src={thumbNail} alt="thumbnail" className="candidate__photo" />
      <p className="candidate__name">{name}</p>
      <div className="candidate__controls">
        <button type="button" className="candidate__controls--change-stage candidate__controls--change-stage_prev" />
        <button
          type="button"
          className="candidate__controls--more-info"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
        </button>
        <button type="button" className="candidate__controls--change-stage candidate__controls--change-stage_next" />
      </div>
    </div>
  );
};

Candidate.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  candidate: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Candidate;
