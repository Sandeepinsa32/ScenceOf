import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import App from './Admin/App';
import './Components/utils/config';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
ReactDOM.render(
	<React.StrictMode>
		<App history={history} />
	</React.StrictMode>,
	document.getElementById('root')
);
