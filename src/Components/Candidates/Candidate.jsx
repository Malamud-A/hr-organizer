import React from 'react';
import PropTypes from 'prop-types';

const Candidate = (props) => {
  const { thumbNail, name } = props;

  return (
    <div className="candidate">
      <img src={thumbNail} alt="thumbnail" className="candidate__photo" />
      <p className="candidate__name">{name}</p>
      <div className="candidate__status-controls">
        <button type="button" className="candidate__status-controls--prev-stage" />
        <button type="button" className="candidate__status-controls--next-stage" />
      </div>
    </div>
  );
};

Candidate.propTypes = {
  thumbNail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Candidate;
