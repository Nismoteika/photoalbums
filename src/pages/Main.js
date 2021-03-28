import { useEffect } from 'react';

import { connect } from 'react-redux';
import { getUsers } from '../actions/userAction';

import AlbumsByUser from '../components/AlbumsByUser';

function Main({ users, usersLoaded, getUsers }) {
  useEffect(() => {
    getUsers();
  }, [usersLoaded])

  var usersRender = [];
  if(usersLoaded) {
    usersRender = users.map((user) => (
      <li key={user.id}>
        <h5>{user.name}</h5>
        <AlbumsByUser userId={user.id} />
      </li>)
    )
  }

  return (
    <ul>
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