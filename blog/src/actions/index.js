import jsonPlaceholder from '../apis/jsonPlaceholder';

// Correct approach! Using redux-thunk as Middleware. And refactored
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');  

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

  // Bad approach!! Due to async and await, and API time.
  // const response = await jsonPlaceholder.get('/posts');  

  // return {
  //   type: 'FETCH _POSTS',
  //   payload: response
  // };



// This is totally fine, still can make normal action creators
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// };