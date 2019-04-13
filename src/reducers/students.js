import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';

const setStudents = students => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get('api/students')
      .then(response => dispatch(setStudents(response.data)));
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default studentReducer;
