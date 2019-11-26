import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ContactList from '../ContactList';
import ContactDesc from '../ContactDesc';
import ContactAdd from '../ContactAdd';
import './App.scss';

const App: React.FC = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={ContactList} exact />
					<Route path="/contact/:id" component={ContactDesc} />
					<Route path="/new" component={ContactAdd} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
