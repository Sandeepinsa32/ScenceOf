import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './SignIn';
import SignUp from './SignUp';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<>HomePage End Here </>
		<SignIn />
		<>SignIn End Here </>
		<SignUp />
		<>SignUp End Here </>
	</React.StrictMode>,
	document.getElementById('root')
);
