import { connect } from 'react-redux';

import { prevPhoto, nextPhoto } from '../actions/galeryActions';

function PhotoGallery({ src, albumId, prevPhoto, nextPhoto }) {

  return (
    <div className="gallery">
      <button onClick={() => prevPhoto()}>prev</button>
      <img src={src} alt="" />
      <button onClick={() => nextPhoto()}>next</button>
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