import * as types from '../constants/albumTypes';

const initialState = {}

export default function album(state = initialState, action) {
  switch(action.type) {
    case types.GET_ALBUMS_BY_USER:
      return { 
        ...state,
        [action.payload.userId]: {
          albums: action.payload.albums,
          loaded: true,
        }
      }
    default:
      return state;
  }
}