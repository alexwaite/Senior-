import axios from 'axios';

const SET_CAMPUSES = 'SET_CAMPUSES';

const setCampuses = campuses => {
  return {
    type: SET_CAMPUSES,
    campuses,
  };
};

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get('api/campuses')
      .then(response => dispatch(setCampuses(response.data)));
  };
};

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default campusReducer;
