import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Nav from './components/nav';

import Home from './components/pages/home';
import Facilities from './components/pages/facilities';
import ContactUs from './components/pages/contact';
import MenuPage from './components/menuPage';

function App() {
	return (
		<Router>
			<AppContent />
		</Router>
	);
}

function AppContent() {
	const location = useLocation();

	// Check if the current path is `/menuPage`
	const isMenuPage = location.pathname === '/menuPage';

	return (
		<>
			{/* Render Nav only if not on /menuPage */}
			{!isMenuPage && <Nav />}

			{/* Define routes */}
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/services"
					element={<Facilities />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs />}
				/>
				<Route
					path="/menuPage"
					element={<MenuPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
