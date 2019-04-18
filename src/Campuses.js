import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import CreateCampus from './CreateCampus';

class Campuses extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.campuses.map(campus => (
            <Link to={`/campuses/${campus.id}`} key={campus.id}>
              <li>
                {campus.name}
                <br />
                <img src={campus.imageUrl} />
              </li>
            </Link>
          ))}
        </ul>
        <CreateCampus />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(Campuses);
