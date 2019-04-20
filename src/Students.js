import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import { deleteStudentThunk } from './reducers/students';

import { connect } from 'react-redux';

class Students extends Component {
  render() {
    return this.props.students !== [] ? (
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
                onClick={() => this.props.deleteStudentThunk(student.id)}
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
    ) : (
      ''
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteStudentThunk: student => dispatch(deleteStudentThunk(student)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
