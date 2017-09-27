import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Landing from './Landing';
import Music from './Music';
import Footer from './Footer';
import Bio from './Bio';
import Swag from './Swag';
import Play from './Play';

import './App.css';
const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header className="header-fixed" />
					<main>
						<Route exact path="/" component={Landing} />
						<Route exact path="/play" component={Play} />
						<Route exact path="/music" component={Music} />
						<Route exact path="/bio" component={Bio} />
						<Route exact path="/swag" component={Swag} />
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
