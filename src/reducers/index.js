import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import users from './user';
import albums from './album';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    users: users,
    albums: albums,
  });

export default createRootReducer;