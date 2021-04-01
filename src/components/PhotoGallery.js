import { connect } from 'react-redux';

import { prevPhoto, nextPhoto, showGallery } from '../actions/galeryActions';

function PhotoGallery({ src, albumId, prevPhoto, nextPhoto, showGallery }) {

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
      <img src={src} alt="" onClick={() => nextPhoto()} />
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
  return {
    src: store.photos[albumId].photos[store.galery.currentPhoto].url
  }
}

const mapDispatchToProps = (dispatch) => ({
  prevPhoto: () => dispatch(prevPhoto()),
  nextPhoto: () => dispatch(nextPhoto()),
  showGallery: () => dispatch(showGallery()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);