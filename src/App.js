import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Students from './Students';
import Campuses from './Campuses';
import Campus from './Campus';
import Student from './Student';
import Nav from './Nav';
import { fetchCampuses } from './reducers/campuses';
import { fetchStudents } from './reducers/students';

class App extends Component {
  componentDidMount() {
    this.props.fetchCampuses();
    this.props.fetchStudents();
    console.log(this.props);
  }
  render() {
    return (
      <HashRouter>
        <h1>Acme Enrollment Management</h1>
        <Nav />
        <Route
          exact
          path="/"
          render={() => <h4>Welcome to Acme Enrollment Management!</h4>}
        />
        <Route exact path="/students" component={Students} />
        <Route exact path="/campuses" component={Campuses} />
        <Route exact path="/campuses/:id" component={Campus} />
        <Route exact path="/students/:id" component={Student} />
      </HashRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCampuses: () => dispatch(fetchCampuses()),
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
