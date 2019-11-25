import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

const startApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
	serviceWorker.register();
};

if ('cordova' in window) {
	document.addEventListener('deviceready', startApp, false);
} else {
	startApp();
}