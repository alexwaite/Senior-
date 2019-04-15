import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Campus extends Component {
  render() {
    console.log(this.props);
    return !this.props.campus ? (
      <hr />
    ) : (
      <div>
        <h4>{this.props.campus.name}</h4>
        <br />
        <img src={this.props.campus.imageUrl} />
        <br />
        <p>Address: {this.props.campus.address}</p>
        <br />
        <p>Description: {this.props.campus.description}</p>
        <h5>Student Roster</h5>
        <ul>
          {this.props.campusStudents.map(student => {
            return (
              <Link key={student.id} to={`/students/${student.id}`}>
                <li>{student.firstName + ' ' + student.lastName}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  if (state.campuses && state.students) {
    const campus = state.campuses.find(
      _campus => _campus.id === +props.match.params.id
    );

    const students = state.students.filter(
      student => student.campusId === +props.match.params.id
    );

    return { ...state, campus: campus, campusStudents: students };
  }
};

export default connect(mapStateToProps)(Campus);
