import React, { useState, useEffect } from 'react';
import logo from '../assets/images/hamzville-logo.svg';
import menuopen from '../assets/icons/menu-open-icon.svg';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // For routing
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling inside homepage

import youtube from '../assets/icons/hamzville-youtube.svg';
import instagram from '../assets/icons/hamzville-instagram.svg';
import twitter from '../assets/icons/hamzville-twitter.svg';
import facebook from '../assets/icons/hamzville-facebook.svg';

import Hamburger from './hamburger.jsx';
import WhatsAppButton from './whatsapp.jsx';
import WhatsAppButtonNav from './whatsapp2.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Sections to track for scrolling
	// const sections = ['home', 'services', 'contact'];
	const sections = ['home', 'about', 'services', 'contact'];

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
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		sections.forEach(section => {
	// 			const sectionElement = document.getElementById(section);
	// 			if (sectionElement) {
	// 				const { top } = sectionElement.getBoundingClientRect();
	// 				if (top >= -100 && top < 200) {
	// 					setActiveSection(section);
	// 				}
	// 			}
	// 		});
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [sections]);

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

	// const scrollToSection = section => {
	// 	if (location.pathname !== '/') {
	// 		navigate('/');
	// 		setTimeout(() => {
	// 			scroller.scrollTo(section, {
	// 				smooth: true,
	// 				offset: -150, // Adjust this offset as per your navbar height
	// 				duration: 500,
	// 			});
	// 			setActiveSection(section);
	// 		}, 100); // Small delay for navigation
	// 	} else {
	// 		scroller.scrollTo(section, {
	// 			smooth: true,
	// 			offset: -70,
	// 			duration: 500,
	// 		});
	// 		setActiveSection(section);
	// 	}
	// };

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					// smooth: true,
					offset: -150, // Adjust this offset as per your navbar height
					duration: 500,
				});
				setActiveSection(section);
			}); // Small delay for navigation
		} else {
			scroller.scrollTo(section, {
				// smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	// Active and inactive styles for font size and underline
	const activeStyle = {
		color: '#265205',
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
		backgroundColor: '#265205',
	};

	return (
		<>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}

			<div className="fixed z-40 top-0 font-outfit bg-[#ffffff]  border-b-[0.5px] border-[#eaecf0] w-screen">
				<div className="flex justify-between items-center lg:px-[8.3%] px-[24px] lg:py-[5px] py-[16px] ">
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className=" "
								onClick={() => scrollToSection('home')}
							/>
						</a>
					</div>

					<button
						className="lg:hidden w-8 h-8 absolute right-[16px] text-[#ffffff] flex justify-between items-center"
						onClick={handleOpen}
					>
						<img
							src={menuopen}
							alt=""
						/>
					</button>
					<div className="lg:flex justify-between items-center font-sans  gap-[16px] hidden text-[16px] py-[15px]">
						{/* Scroll Link for Home */}
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer p-[15px]   relative "
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
							{activeSection === 'home' && <span style={underlineStyle} />}
						</button>
						<button
							onClick={() => scrollToSection('about')}
							className="cursor-pointer p-[15px] relative"
							style={activeSection === 'about' ? activeStyle : inactiveStyle}
						>
							About us
							{activeSection === 'about' && <span style={underlineStyle} />}
						</button>

						{/* About Us Route Link */}
						<RouterLink
							to="/services"
							className="cursor-pointer p-[15px]  relative"
							style={activeSection === 'services' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('services')}
						>
							Our services
							{activeSection === 'services' && <span style={underlineStyle} />}
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
					<div className="lg:flex hidden lg:mx-0  mx-auto gap-[16px]">
						<div className="lg:hidden flex items-center">
							<WhatsAppButtonNav />
						</div>
						<div className="flex items-center">
							<a href="#">
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
							<a href="#">
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
							<a href="#">
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
							<a href="#">
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
		</>
	);
}
