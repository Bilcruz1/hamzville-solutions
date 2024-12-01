import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/bryana-logo-header.svg';
import { HiMenu } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // For routing
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling inside homepage
import locations from '../assets/icons/location-icon-header.svg';
import phone from '../assets/icons/phone-icon-header.svg';
import mail from '../assets/icons/mail-icon-header.svg';
import youtube from '../assets/icons/youtube-icon-footer.svg';
import instagram from '../assets/icons/instagram-icon-footer.svg';
import twitter from '../assets/icons/twitter-icon-footer.svg';
import facebook from '../assets/icons/facebook-icon-footer.svg';

export default function FooterContact() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Sections to track for scrolling
	const sections = ['home', 'services', 'contact'];

	// Scroll to the top whenever the route changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location]);

	// Update activeSection based on route change
	useEffect(() => {
		const currentPath = location.pathname;

		// Set active section based on the current route
		if (currentPath === '/facilities') {
			setActiveSection('facilities');
		} else if (currentPath === '/contact-us') {
			setActiveSection('contact-us');
		} else if (currentPath === '/') {
			setActiveSection('home');
		}
	}, [location]);

	// Add scroll event listener to track active section within the homepage
	useEffect(() => {
		const handleScroll = () => {
			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const handleOpen = e => {
		e.stopPropagation(); // Prevent event bubbling
		setIsOpen(prev => !prev);
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					smooth: true,
					offset: -70, // Adjust this offset as per your navbar height
					duration: 500,
				});
				setActiveSection(section);
			}, 100); // Small delay for navigation
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	// Active and inactive styles for font size and underline
	const activeStyle = {
		color: '#FF9500',
		fontWeight: 'bold',
		fontSize: '14px',
		position: 'relative',
	};

	const inactiveStyle = {
		color: '#292929',
		fontSize: '14px',
	};

	const underlineStyle = {
		content: '""',
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: '-4px',
		height: '2px',
		backgroundColor: '#FF9500',
	};
	return (
		<div>
			<div className=" bottom-0 font-outfit   bg-[#ffffff]  border-b-[0.5px] border-[#eaecf0] w-screen">
				<div className="lg:flex-row flex-col flex justify-between items-center lg:px-[120px] px-[16px] lg:gap-[0] gap-[16px]  lg:py-[5px] py-[32px] ">
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className=" w-[72px] h-[57px] "
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							/>
						</a>
					</div>

					<div className="lg:flex justify-between items-center  gap-[16px] hidden text-[16px] py-[15px]">
						{/* Scroll Link for Home */}
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer p-[15px]   relative "
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
							{activeSection === 'home' && <span style={underlineStyle} />}
						</button>

						{/* About Us Route Link */}
						<RouterLink
							to="/facilities"
							className="cursor-pointer p-[15px]  relative"
							style={
								activeSection === 'facilities' ? activeStyle : inactiveStyle
							}
							onClick={() => setActiveSection('facilities')}
						>
							Our Facilities
							{activeSection === 'facilities' && (
								<span style={underlineStyle} />
							)}
						</RouterLink>

						{/* Projects Route Link */}
						<RouterLink
							to="/contact-us"
							className="cursor-pointer p-[15px]   relative"
							style={
								activeSection === 'contact-us' ? activeStyle : inactiveStyle
							}
							onClick={() => setActiveSection('contact-us')}
						>
							Contact Us
							{activeSection === 'contact-us' && (
								<span style={underlineStyle} />
							)}
						</RouterLink>
					</div>
					<div className="flex gap-[16px]">
						<div className="flex items-center">
							<a href="https://www.youtube.com/@BryanaResort">
								<img
									src={youtube}
									alt="mail-icon-header"
									className=""
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								/>
							</a>
						</div>
						<div className="flex items-center">
							<a href="https://www.instagram.com/bryanaresort_apartment/">
								<img
									src={instagram}
									alt="mail-icon-header"
									className=""
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								/>
							</a>
						</div>
						<div className="flex  items-center">
							<a href="https://x.com/bryanaresort">
								<img
									src={twitter}
									alt="mail-icon-header"
									className=""
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								/>
							</a>
						</div>
						<div className="flex items-center">
							<a href="https://www.facebook.com/people/Bryana-Resort-Apartment/61567517363921/?mibextid=LQQJ4d">
								<img
									src={facebook}
									alt="mail-icon-header"
									className=""
									onClick={() =>
										window.scrollTo({ top: 0, behavior: 'smooth' })
									}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
