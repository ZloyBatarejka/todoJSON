import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './css/styles.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './App';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
