import * as types from '../constants/albumTypes';
import { apiBase } from '../api';

export const getAlbumsByUser = (userId) => {
  return dispatch => {
    fetch(`${apiBase}/users/${userId}/albums`)
      .then(res => res.json())
      .then(data => {
        dispatch(getAlbumsByUserAction({data, userId}))
      })
  }
}

const getAlbumsByUserAction = ({data, userId}) => ({
  type: types.GET_ALBUMS_BY_USER,
  payload: {
    albums: data,
    userId
  }
})