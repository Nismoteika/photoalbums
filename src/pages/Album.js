import { useEffect, useState } from 'react';
import '../styles/grid-list.sass';

import { connect } from 'react-redux';
import { getPhotosByAlbum } from '../actions/photoActions';
import { setCountPhotos, showGallery } from '../actions/galeryActions';
import { apiBase } from '../api';

import PhotoGridItem from '../components/PhotoGridItem';
import PhotoGallery from '../components/PhotoGallery';

function Album({ match, photos, getPhotosByAlbum, isModalShow, showGallery, setCountPhotos }) {
  const [albumName, setAlbumName] = useState('');

  useEffect(() => {
    fetch(`${apiBase}/albums/${match.params.id}`)
      .then(res => res.json())
      .then(data => {
        setAlbumName(data.title);
      })
      
    getPhotosByAlbum(match.params.id);
  }, [])

  var photosRender = [];
  if(photos) {
    setCountPhotos(photos.length);
    photosRender = photos.map((photo, idx) => 
      (
        <li className="grid-list__item" key={photo.id} onClick={() => showGallery(idx)}>
          <PhotoGridItem photo={photo} />
        </li>
      )
    )
  }

  return (
    <div>
      <h2 className="text-center">{albumName}</h2>
      {isModalShow && photos ? <PhotoGallery albumId={match.params.id} /> : null}
      <ul className="grid-list">
        { photos && photos.length > 0 ? photosRender : <li>Loading...</li> }
      </ul>
    </div>
  );
}

const mapStateToProps = (store, { match }) => {
  const obj = {}
  if(store.photos[match.params.id]) {
    obj.photos = store.photos[match.params.id].photos;
  }
  const object = {
    ...obj,
    isModalShow: store.galery.isModalShow
  }
  return object;
}

const mapDispatchToProps = (dispatch) => ({
  getPhotosByAlbum: (args) => dispatch(getPhotosByAlbum(args)),
  showGallery: (args) => dispatch(showGallery(args)),
  setCountPhotos: (args) => dispatch(setCountPhotos(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Album);