import * as types from '../constants/photoTypes';
import { apiBase } from '../api';

export const getPhotosByAlbum = (albumId) => {
  return dispatch => {
    fetch(`${apiBase}/albums/${albumId}/photos`)
      .then(res => res.json())
      .then(data => {
        dispatch(getPhotosByAlbumAction({data, albumId}))
      })
  }
}

const getPhotosByAlbumAction = ({data, albumId}) => ({
  type: types.GET_PHOTOS_BY_ALBUM,
  payload: {
    photos: data,
    albumId
  }
})