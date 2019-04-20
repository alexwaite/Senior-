import axios from 'axios';

const SET_STUDENTS = 'SET_STUDENTS';
const CREATED_STUDENT = 'CREATED_STUDENT';
const DELETED_STUDENT = 'DELETED_STUDENT';

const setStudents = students => {
  return {
    type: SET_STUDENTS,
    students,
  };
};

const createdStudent = student => {
  return {
    type: CREATED_STUDENT,
    student,
  };
};

const deletedStudent = id => {
  return {
    type: DELETED_STUDENT,
    id,
  };
};

export const fetchStudents = () => {
  return dispatch => {
    return axios
      .get('api/students')
      .then(response => dispatch(setStudents(response.data)));
  };
};

export const deleteStudentThunk = id => {
  return dispatch => {
    return axios
      .delete(`/api/students/${id}`)
      .then(() => dispatch(deletedStudent(id)));
  };
};

export const createStudentThunk = student => {
  return dispatch => {
    return axios.post('/api/students', student).then(res => {
      dispatch(createdStudent(res.data));
    });
  };
};

const studentReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case CREATED_STUDENT:
      return [...state, action.student];
    case DELETED_STUDENT:
      return state.filter(student => student.id !== action.id);
    default:
      return state;
  }
};

export default studentReducer;
