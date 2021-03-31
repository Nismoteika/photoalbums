import { connect } from 'react-redux';

import { prevPhoto, nextPhoto } from '../actions/galeryActions';

function PhotoGallery({ src, albumId, prevPhoto, nextPhoto }) {

  return (
    <div className="gallery">
      <button
        className="gallery__btn_prev"
        onClick={() => prevPhoto()}>
        &lt;
      </button>
      <img src={src} alt="" />
      <button
        className="gallery__btn_next"
        onClick={() => nextPhoto()}>
        &gt;
      </button>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);