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
            </div>
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
