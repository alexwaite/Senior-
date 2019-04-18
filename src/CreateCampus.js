import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from './reducers/campuses';
import axios from 'axios';

class CreateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    };
  }

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSave = ev => {
    ev.preventDefault();
    return axios
      .post('/api/campuses', this.state)
      .then(() => this.props.fetchCampuses())
      .catch(error => console.error(error));
  };

  render() {
    return (
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <h3>Create New Campus</h3>
          <label>
            <em>Campus Name</em>
          </label>
          <input
            onChange={this.onChange}
            name="name"
            id="name"
            className="form-control"
            value={this.state.name}
          />
          <label>
            <em>Campus Address</em>
          </label>
          <input
            onChange={this.onChange}
            name="address"
            id="address"
            className="form-control"
            value={this.state.address}
          />
          <label>
            <em>Campus Image URL</em>
          </label>
          <input
            onChange={this.onChange}
            name="imageUrl"
            id="imageUrl"
            className="form-control"
            value={this.state.imageUrl}
          />
          <label>
            <em>Campus Description</em>
          </label>
          <input
            onChange={this.onChange}
            name="description"
            id="description"
            className="form-control"
            value={this.state.description}
          />
        </div>
        <button id="saveBtn" type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
