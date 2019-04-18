import axios from 'axios';

const GOT_CAMPUSES = 'GOT_CAMPUSES';
const CREATED_CAMPUS = 'CREATE_CAMPUS';

const gotCampuses = campuses => {
  return {
    type: GOT_CAMPUSES,
    campuses,
  };
};

// const createdCampus = campus => {

//   return {
//     type: CREATED_CAMPUS,
//     campus,
//   };
// };

export const fetchCampuses = () => {
  return dispatch => {
    return axios
      .get('api/campuses')
      .then(response => dispatch(gotCampuses(response.data)));
  };
};

// export const createCampus = campus => {

//   return dispatch => {
//     return axios.post('/api/campuses', campus).then(res => {
//       console.log('createCampus', res.data);
//       dispatch(createdCampus(res.data));
//     });
//   };
// };

const campusReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case CREATED_CAMPUS:
      return [...state.campuses, action.campus];
    default:
      return state;
  }
};

export default campusReducer;
