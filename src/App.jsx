import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

import Home from './components/pages/home'; // Create a new Home component to manage all sections
import Facilities from './components/pages/facilities';
import ContactUs from './components/pages/contact';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/facilities"
					element={<Facilities />}
				/>
				<Route
					path="/contact-us"
					element={<ContactUs />}
				/>
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
