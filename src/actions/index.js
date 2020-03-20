import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_MISSIONS = 'UPDATE_MISSIONS';
export const SET_ERROR = 'SET_ERROR';
export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get('https://api.spacexdata.com/v3/missions')
      .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_MISSIONS, payload: res.data });
      })
      .catch(err => {
        console.error('error fetching data from api, err: ', err);
        dispatch({ type: SET_ERROR, payload: 'Error fetching data from api' });
      });
  };
};

// // Middleware first!
// const thunk = store => action => next => {
//   if (typeof action === 'function') {
//     action(store.dispatch);
//   } else {
//     next(action);
//   }
// };

// // dispatch && reducers

// const createStore = (reducer, middleWareArray) => {
//   let currentState = {};

//   const dispatch = action => {
//     // run middleware functions first

//     // check if the action is an object and has a type property
//     if (typeof action !== 'object') {
//       throw new Error(
//         'Actions must be plain objects. Use custom middleware for async actions.'
//       );
//     }
//     if (action.type === undefined) {
//       throw new Error('Actions must have a type property');
//     }

//     currentState = reducer(currentState, action) // ==> always return a brand new state object!

//     // subscriptions are updated and components re-render

//   };
// };
