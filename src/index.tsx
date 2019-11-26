import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './pages/App';
import './index.scss';

const startApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
	serviceWorker.register();
};

if ('cordova' in window) {
	document.addEventListener('deviceready', startApp, false);
} else {
	startApp();
}
