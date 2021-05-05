import React from 'react';
import Dashboard from './Dashboard';
import ImageList from './Contest/ImagesList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
	return (
		<>
			<Dashboard />
			<Router>
				<Switch>
					{/* for Contest */}
					{/* <Route path="/active-contest/" component={Contest} exact /> */}

					{/* For Admin Panel */}
					<Route path="/admin/imglist" component={ImageList} exact />

					{/* <Route component={Notfound} exact /> */}
				</Switch>
			</Router>
		</>
	);
}
export default App;
