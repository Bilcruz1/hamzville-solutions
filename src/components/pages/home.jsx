import React from 'react';
import HeroSection from '../heroSection.jsx';
import SectionTwo from '../sectionTwo.jsx';
import Explore from '../explore.jsx';
import Amenities from '../amenities.jsx';
import FindUs from '../findUs.jsx';
import Footer from '../footer.jsx';

const Home = () => {
	return (
		<>
			<div className="font-outfit">
				<HeroSection />
				<SectionTwo />
				<Amenities />
				<Explore />
				<FindUs />
				<Footer />
			</div>
		</>
	);
};

export default Home;
