import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { createHashHistory } from 'history';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';

import createRootReducer from './reducers';

const history = createHashHistory();
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    ),
  ),
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
