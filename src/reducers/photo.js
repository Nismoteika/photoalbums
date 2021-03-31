import * as types from '../constants/photoTypes';

const initialState = {}

export default function photo(state = initialState, action) {
  switch(action.type) {
    case types.GET_PHOTOS_BY_ALBUM:
      return { 
        ...state,
        [action.payload.albumId]: {
          photos: action.payload.photos,
        }
      }
    default:
      return state;
  }
}