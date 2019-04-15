import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class Students extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.students.map(student => (
            <Link to={`/students/${student.id}`} key={student.id}>
              <li key={student.id}>
                {student.firstName} {student.lastName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Students);
