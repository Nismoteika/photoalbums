import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getAlbumsByUser } from '../actions/albumActions';

import AlbumGridItem from './AlbumGridItem';

function AlBumsByUser({ objAlbums, getAlbumsByUser, userId }) {
  useEffect(() => {
    getAlbumsByUser(userId);
  }, [])

  var albumsRender = [];
  if (objAlbums && objAlbums.albums.length > 0) {
    albumsRender = objAlbums.albums.map((album) => 
      (
        <AlbumGridItem album={album} key={album.id} />
      )
    )
  }

  return (
    <ul className="grid-list">
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

export default connect(mapStateToProps, mapDispatchToProps)(AlBumsByUser);