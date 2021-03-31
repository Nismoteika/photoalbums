import * as types from '../constants/userTypes';

const initialState = {
  users: [],
  loaded: false,
}

export default function users(state = initialState, action) {
  switch(action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload.users,
        loaded: true
      }
    default:
      return state;
  }
}