// Warning: React depends on requestAnimationFrame.
// Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
