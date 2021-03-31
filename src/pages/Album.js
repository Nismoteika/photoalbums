import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getPhotosByAlbum } from '../actions/photoActions';

import PhotoGridItem from '../components/PhotoGridItem';

function Album({ match, photos, getPhotosByAlbum }) {
  useEffect(() => {
    getPhotosByAlbum(match.params.id);
  }, [])

  var photosRender = [];
  if(photos && photos.length > 0) {
    photosRender = photos.map((photo) => 
      (
        <PhotoGridItem photo={photo} />
      )
    )
  }

  return (
    <ul>
      { photos && photos.length > 0 ? photosRender : <li>Loading...</li> }
    </ul>
  );
}

const mapStateToProps = (store, { match }) => {

  if(store.photos[match.params.id]) {
    return {
      photos: store.photos[match.params.id].photos
    };
  } else { 
    return {};
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPhotosByAlbum: (args) => dispatch(getPhotosByAlbum(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Album);