import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { children, toggleModal } = this.props;
    return (
      <div className="modal">
        <div className="modal__inner">
          <button
            type="button"
            className="modal__inner--close-button"
            onClick={toggleModal}
          >
            X
          </button>
          <div className="modal__inner--content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
