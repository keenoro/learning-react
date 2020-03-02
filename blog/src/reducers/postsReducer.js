export default (state = [], action) => {
 switch (action.type) {
  case 'FETCH_POSTS':
    return action.payload;
  default:
    return state;
 }
  
  // bad! do not reach outside itself 
  // return document.querySelector('input')
  // return axios.get('/posts')

  // bad! do not mutate/change values in reducers
  // state[0] = 'Sam'
  // state.pop()
  // state.push()
  // state.name = 'Same'
};