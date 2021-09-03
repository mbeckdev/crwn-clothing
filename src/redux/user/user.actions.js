// action creator functions
// functions that return objects

export const setCurrentUser = (user) => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

//capital and snake-case  like SET_CURRENT_USER because it'll never change
// 'SET_CURRENT_USER' is the exact same string that our user reducer is expecting
