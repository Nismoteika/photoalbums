import { useEffect, useState } from 'react';
import '../styles/grid-list.sass';

import { connect } from 'react-redux';
import { getPhotosByAlbum } from '../actions/photoActions';
import { apiBase } from '../api';

import PhotoGridItem from '../components/PhotoGridItem';
import PhotoGallery from '../components/PhotoGallery';

function Album({ match, photos, getPhotosByAlbum }) {
  const [albumName, setAlbumName] = useState('');

  const [isModalShow, setModalShow] = useState(false);

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
    photosRender = photos.map((photo) => 
      (
        <li className="grid-list__item" onClick={() => setModalShow(!isModalShow)}>
          <PhotoGridItem photo={photo} key={photo.id} />
        </li>
      )
    )
  }

  return (
    <div>
      <h2 className="text-center">{albumName}</h2>
      {isModalShow && photos ? <PhotoGallery photos={photos} /> : null}
      <ul className="grid-list">
        { photos && photos.length > 0 ? photosRender : <li>Loading...</li> }
      </ul>
    </div>
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