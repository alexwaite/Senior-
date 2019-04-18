import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import CreateCampus from './CreateCampus';

import axios from 'axios';
import fetchCampuses from './reducers/campuses';

class Campuses extends Component {
  deleteCampus = id => {
    return axios
      .delete(`/api/campuses/${id}`)
      .then(() => this.props.fetchCampuses());
  };

  render() {
    return this.props.campuses ? (
      <div>
        <ul>
          {this.props.campuses.map(campus => (
            <div key={campus.id} id="campus">
              <Link to={`/campuses/${campus.id}`}>
                <li>
                  {campus.name}

                  <br />
                  <div
                    style={{
                      backgroundImage: `url(${campus.imageUrl})`,
                      height: '300px',
                      width: '500px',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeate: 'no-repeat',
                    }}
                  />
                </li>
              </Link>
              <span>&nbsp;</span>
              <button
                type="submit"
                onClick={() => this.deleteCampus(campus.id)}
              >
                X
              </button>
            </div>
          ))}
        </ul>
        <CreateCampus />
      </div>
    ) : (
      <hr />
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return { fetchCampuses: () => dispatch(fetchCampuses()) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
