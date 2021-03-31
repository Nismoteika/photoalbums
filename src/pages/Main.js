import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';

import AlbumsByUser from '../components/AlbumsByUser';

function Main({ users, usersLoaded, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [usersLoaded])

  var usersRender = [];
  if(usersLoaded) {
    usersRender = users.map((user) => (
      <li key={user.id}>
        <h2>Автор {user.name}</h2>
        <AlbumsByUser userId={user.id} />
      </li>)
    )
  }

  return (
    <ul className="users-list">
      { usersRender.length > 0 ? usersRender : <li>Loading...</li> }
    </ul>
  );
}

const mapStateToProps = (store) => ({
  users: store.users.users,
  usersLoaded: store.users.loaded,
})

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);