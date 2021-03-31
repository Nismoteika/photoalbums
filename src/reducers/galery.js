import * as types from '../constants/galleryTypes';

const initialState = {
  isModalShow: false,
  currentPhoto: 0,
  countPhotos: 0,
}

export default function galery(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        isModalShow: !state.isModalShow
      }
    case types.SET_CURRENT_PHOTO:
      return {
        ...state,
        currentPhoto: action.payload.currentPhoto
      }
    case types.SET_COUNT_PHOTOS:
      return {
        ...state,
        countPhotos: action.payload.countPhotos
      }
    case types.PREV_PHOTO:
      var current = state.currentPhoto;
      if(current === 0)
        current = state.countPhotos - 1;
      else 
        current--;

      return {
        ...state,
        currentPhoto: current
      }
    case types.NEXT_PHOTO:
      var current = state.currentPhoto;
      if(current === state.countPhotos - 1)
        current = 0;
      else
        current++;
      
      return {
        ...state,
        currentPhoto: current
      }
    default:
      return state;
  }
}