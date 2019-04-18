import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Student extends Component {
  render() {
    console.log(this.props);
    return !this.props.student ? (
      <hr />
    ) : (
      <div>
        <span style={{ fontWeight: 'bold' }}>Name:</span>
        <span>
          {' '}
          {this.props.student.firstName + ' ' + this.props.student.lastName}
        </span>
        <br />
        <div
          style={{
            backgroundImage: `url(${this.props.student.imageUrl})`,
            height: '300px',
            width: '300px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeate: 'no-repeat',
          }}
        />
        <br />
        <span style={{ fontWeight: 'bold' }}>Email: </span>
        <span>{this.props.student.email}</span>
        <br />
        <span style={{ fontWeight: 'bold' }}>GPA: </span>
        <span>{this.props.student.gpa}</span>
        <br />
        <span style={{ fontWeight: 'bold' }}>Campus: </span>
        <span>
          {this.props.student.campusId ? (
            <Link to={`/campuses/${this.props.student.campusId}`}>
              {this.props.campus.name}
            </Link>
          ) : (
            'Not currently enrolled'
          )}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (state.campuses.length > 0 && state.students.length > 0) {
    const student = state.students.find(
      _student => _student.id === +props.match.params.id
    );
    const campus = state.campuses.find(
      _campus => _campus.id === student.campusId
    );

    return { ...state, campus: campus, student: student };
  } else return state;
};

export default connect(mapStateToProps)(Student);
