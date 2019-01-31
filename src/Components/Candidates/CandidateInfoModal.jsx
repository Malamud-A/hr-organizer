import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faCalendarDay,
  faClock,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import dateFormatter from '../../utils/dateFormatter';


const CandidateInfoModal = ({ candidate }) => (
  <div className="candidate-info">
    <img src={candidate.picture.medium} alt="" className="candidate-info__photo" />
    <h3 className="candidate-info__name">{`${candidate.name.first} ${candidate.name.last}`}</h3>
    <p className="candidate-info__paragraph">
      <span><FontAwesomeIcon icon={faEnvelope} /></span>
      {' '}
      {candidate.email}
    </p>
    <p className="candidate-info__paragraph">
      <span><FontAwesomeIcon icon={faPhone} /></span>
      {' '}
      {candidate.cell}
    </p>
    <p className="candidate-info__paragraph">
      <span><FontAwesomeIcon icon={faCalendarDay} /></span>
      {' '}
      {dateFormatter(candidate.dob.date)}
    </p>
    <p className="candidate-info__paragraph">
      <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
      {' '}
      {candidate.location.city}
    </p>
    <p className="candidate-info__paragraph">
      <span><FontAwesomeIcon icon={faClock} /></span>
      {' '}
      {candidate.status.lingual}
    </p>
  </div>
);

CandidateInfoModal.propTypes = {
  candidate: PropTypes.object.isRequired,
};

export default CandidateInfoModal;
