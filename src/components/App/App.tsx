import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ContactList from '../ContactList';
import ContactDesc from '../ContactDesc';
import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ContactList} exact />
					<Route path="/contact/:id" component={ContactDesc} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
