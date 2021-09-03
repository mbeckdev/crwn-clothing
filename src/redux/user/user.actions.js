// action creator functions
// functions that return objects

import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

//capital and snake-case  like SET_CURRENT_USER because it'll never change
// 'SET_CURRENT_USER' is the exact same string that our user reducer is expecting
