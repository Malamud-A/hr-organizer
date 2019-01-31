import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CandidatesFiltersModal extends Component {
  state = {
    name: '',
    city: '',
  };

  componentDidMount() {
    const {name, city} = this.props.filters;
    this.setState({
      name,
      city
    })
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  setFilters = e => {
    e.preventDefault();
    this.props.setCandidatesFilters(this.state);
    this.props.toggleModal();
  };

  clearFilters = e => {
    e.preventDefault();
    this.setState({
      name: '',
      city: ''
    }, () => this.props.setCandidatesFilters(this.state));
  };

  render() {
    const {name, city} = this.state;

    return (
      <div className="candidates-filters">
        <h3 className="candidates-filters__caption">Set Filters</h3>
        <form className="candidates-filters__form">
          <input
            value={name}
            name="name"
            type="text"
            className="candidates-filters__form--input"
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <input
            value={city}
            name="city"
            type="text"
            placeholder="City"
            className="candidates-filters__form--input"
            onChange={this.handleInputChange}
          />
          <button
            type="button"
            className="candidates-filters__form--btn"
            onClick={this.clearFilters}
          >
            Clear
          </button>
          <button
            type="submit"
            className="candidates-filters__form--btn"
            onClick={this.setFilters}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

CandidatesFiltersModal.propTypes = {
  filters: PropTypes.object.isRequired,
  setCandidatesFilters: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default CandidatesFiltersModal;