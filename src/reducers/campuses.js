import axios from 'axios';

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const CREATED_CAMPUS = 'CREATE_CAMPUS';
const DELETED_CAMPUS = 'DELETED_CAMPUS';

const gotCampuses = campuses => {
  return {
    type: GOT_CAMPUSES,
    campuses,
  };
};

const createdCampus = campus => {
  return {
    type: CREATED_CAMPUS,
    campus,
  };
};

const deletedCampus = id => {
  return {
    type: DELETED_CAMPUS,
    id,
  };
};

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get('api/campuses')
      .then(response => dispatch(gotCampuses(response.data)));
  };
};

export const deleteCampusThunk = id => {
  return dispatch => {
    return axios
      .delete(`/api/campuses/${id}`)
      .then(() => dispatch(deletedCampus(id)));
  };
};

export const createCampusThunk = campus => {
  return dispatch => {
    return axios.post('/api/campuses', campus).then(res => {
      dispatch(createdCampus(res.data));
    });
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case CREATED_CAMPUS:
      return [...state, action.campus];
    case DELETED_CAMPUS:
      return state.filter(campus => campus.id !== action.id);
    default:
      return state;
  }
};

export default campusReducer;
