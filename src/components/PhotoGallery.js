import { connect } from 'react-redux';

import { prevPhoto, nextPhoto, showGallery } from '../actions/galeryActions';

function PhotoGallery({ src, photoName, photoSrc, prevPhoto, nextPhoto, showGallery }) {

  return (
    <div className="gallery">
      <button 
        className="gallery__close"
        onClick={() => showGallery()}>
        X
      </button>
      <button
        className="gallery__btn_prev"
        onClick={() => prevPhoto()}>
        &lt;
      </button>
      <span className="gallery__title">{photoName}</span>
      <img src={photoSrc} alt="" onClick={() => nextPhoto()} />
      <button
        className="gallery__btn_next"
        onClick={() => nextPhoto()}>
        &gt;
      </button>
      <div className="gallery__background" 
        onClick={() => showGallery()}>
      </div>
    </div>
  )
}

const mapStateToProps = (store, { albumId }) => {
  const photo = store.photos[albumId].photos[store.galery.currentPhoto];
  return {
    photoName: photo.title,
    photoSrc: photo.url,
  }
}

const mapDispatchToProps = (dispatch) => ({
  prevPhoto: () => dispatch(prevPhoto()),
  nextPhoto: () => dispatch(nextPhoto()),
  showGallery: () => dispatch(showGallery()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);