import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import { fetchStudents } from './reducers/students';

import axios from 'axios';

import { connect } from 'react-redux';

class Students extends Component {
  deleteStudent = id => {
    return axios
      .delete(`/api/students/${id}`)
      .then(() => this.props.fetchStudents());
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
              <span>&nbsp;</span>
              <button
                type="submit"
                onClick={() => this.deleteStudent(student.id)}
              >
                X
              </button>
              <br />
              <br />
            </li>
          ))}
        </ul>
        <CreateStudent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return { fetchStudents: () => dispatch(fetchStudents()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
