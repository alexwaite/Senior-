import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampusThunk } from './reducers/campuses';

class CreateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    };
  }

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSave = ev => {
    ev.preventDefault();
    this.props.createCampusThunk(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSave}>
        <div className="form-group">
          <h3>Create New Campus</h3>
          <label>
            <em>Campus Name</em>
          </label>
          <input
            onChange={this.onChange}
            name="name"
            id="name"
            className="form-control"
            value={this.state.name}
          />
          <label>
            <em>Campus Address</em>
          </label>
          <input
            onChange={this.onChange}
            name="address"
            id="address"
            className="form-control"
            value={this.state.address}
          />
          <label>
            <em>Campus Image URL</em>
          </label>
          <input
            onChange={this.onChange}
            name="imageUrl"
            id="imageUrl"
            className="form-control"
            value={this.state.imageUrl}
          />

          <div
            style={{
              backgroundImage: `url(${
                this.state.imageUrl
                  ? this.state.imageUrl
                  : 'https://www.urbansplash.co.uk/images/placeholder-16-9.jpg'
              })`,
              height: '300px',
              width: '500px',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeate: 'no-repeat',
            }}
          />
          <br />

          <label>
            <em>Campus Description</em>
          </label>
          <input
            onChange={this.onChange}
            name="description"
            id="description"
            className="form-control"
            value={this.state.description}
          />

          <button id="saveBtn" type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCampusThunk: campus => dispatch(createCampusThunk(campus)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateCampus);
