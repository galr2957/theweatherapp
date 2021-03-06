import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/reducersCombiner.js'

import './index.css';

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
         <App/>
      </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
