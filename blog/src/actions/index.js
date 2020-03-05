import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // userIds.forEach(id => dispatch(fetchUser(id)));

  //Compact version with Lodash chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

//Correct approach! Using redux-thunk as Middleware. And refactored
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');  

  dispatch({ type: 'FETCH_POSTS', payload: response.data });

  //Bad approach!! Due to async and await, and API time.
  // const response = await jsonPlaceholder.get('/posts');  

  // return {
  //   type: 'FETCH _POSTS',
  //   payload: response
  // };
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};


//Memoized version with Lodash
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

//This is totally fine, still can make normal action creators
// export const selectPost = () => {
//   return {
//     type: 'SELECT_POST'
//   }
// };