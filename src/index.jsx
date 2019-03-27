// Pure React
// // external modules
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";


// // internal modules
// import App from './components/app';
// import '../assets/stylesheets/application.scss';

// // State and reducers

// // render an instance of the component in the DOM
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// The store holds the Redux state
import reducers from './reducers';
// The store needs reducers to work
// We need one reducer for every key in the redux state tree and combine reducers
// to pass to the store

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
