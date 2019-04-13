import React, { Component } from 'react';

import { connect } from 'react-redux';

class Students extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.students.map(student => (
            <li key={student.id}>
              {student.firstName} {student.lastName}
            </li>
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
