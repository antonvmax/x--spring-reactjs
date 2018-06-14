// Warning: React depends on requestAnimationFrame.
// Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const middleware = [ thunk ];

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
