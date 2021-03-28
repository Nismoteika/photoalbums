import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getAlbumsByUser } from '../actions/albumAction';

function Main({ objAlbums, getAlbumsByUser, userId }) {
  useEffect(() => {
    getAlbumsByUser(userId);
  }, [])

  var albumsRender = [];
  if (objAlbums && objAlbums.albums.length > 0) {
    albumsRender = objAlbums.albums.map((album) => (
      <li key={album.id}>
        <h5>{album.title}</h5>
      </li>)
    )
  }

  return (
    <ul>
      { albumsRender.length > 0 ? albumsRender : <li>Loading...</li>}
    </ul>
  );
}

const mapStateToProps = (store, { userId }) => ({
  objAlbums: store.albums[userId],
})

const mapDispatchToProps = (dispatch) => ({
  getAlbumsByUser: (args) => dispatch(getAlbumsByUser(args)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);