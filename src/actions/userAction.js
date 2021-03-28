import * as types from '../constants/userTypes';
import { apiBase } from '../api';

export const getUsers = () => {
  return dispatch => {
    fetch(`${apiBase}/users`)
      .then(res => res.json())
      .then(data => {
        dispatch(getUsersAction(data));
      })
  }
}

const getUsersAction = users => ({
  type: types.GET_USERS,
  payload: {
    users: users
  }
})