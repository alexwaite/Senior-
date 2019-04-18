import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from './reducers/students';
import axios from 'axios';

class CreateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: '',
    };
  }

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSave = ev => {
    ev.preventDefault();
    return axios
      .post('/api/students', this.state)
      .then(() => this.props.fetchStudents())
      .catch(error => console.error(error));
  };

  render() {
    return (
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <h3>Add New Student</h3>
          <label>
            <em>Student First Name</em>
          </label>
          <input
            onChange={this.onChange}
            name="firstName"
            id="firstName"
            className="form-control"
            value={this.state.firstName}
          />
          <label>
            <em>Student Last Name</em>
          </label>
          <input
            onChange={this.onChange}
            name="lastName"
            id="lastName"
            className="form-control"
            value={this.state.lastName}
          />
          <label>
            <em>Student E-mail Address</em>
          </label>
          <input
            onChange={this.onChange}
            name="email"
            id="email"
            className="form-control"
            value={this.state.email}
          />
          <label>
            <em>Student Image URL</em>
          </label>
          <input
            onChange={this.onChange}
            name="imageUrl"
            id="imageUrl"
            className="form-control"
            value={this.state.imageUrl}
          />
          <label>
            <em>Student GPA</em>
          </label>
          <input
            onChange={this.onChange}
            name="gpa"
            id="gpa"
            className="form-control"
            value={this.state.gpa}
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
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
