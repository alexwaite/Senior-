import React, { Component } from 'react';

import { connect } from 'react-redux';

class Campuses extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map(campus => (
            <li key={campus.id}>
              {campus.name}
              <br />
              <img src={campus.imageUrl} />
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

export default connect(mapStateToProps)(Campuses);
