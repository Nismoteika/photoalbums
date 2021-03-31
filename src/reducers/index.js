import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import users from './user';
import albums from './album';
import photos from './photo'; 

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    users,
    albums,
    photos
  });

export default createRootReducer;