import * as types from '../constants/galleryTypes';

export const showGallery = (idx) => {
  return dispatch => {
    dispatch(showModalAction())
    if(idx)
      dispatch(setCurrentPhotoAction(idx))
  }
}

export const setCountPhotos = (countPhotos) => {
  return dispatch => {
    dispatch(setCountPhotosAction(countPhotos))
  }
}

export const prevPhoto = () => {
  return dispatch => {
    dispatch(prevPhotoAction());
  }
}

export const nextPhoto = () => {
  return dispatch => {
    dispatch(nextPhotoAction());
  }
}

const showModalAction = () => ({
  type: types.SHOW_MODAL,
})

const setCurrentPhotoAction = (currentPhoto) => ({
  type: types.SET_CURRENT_PHOTO,
  payload: {
    currentPhoto
  }
})

const setCountPhotosAction = (countPhotos) => ({
  type: types.SET_COUNT_PHOTOS,
  payload: {
    countPhotos
  }
})

const prevPhotoAction = () => ({
  type: types.PREV_PHOTO,
})

const nextPhotoAction = () => ({
  type: types.NEXT_PHOTO,
})