import React, { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// import logo from '../../assets/icons/hamzville-logo.svg';
import logo from '../assets/images/hamzville-logo.svg';
import close from '../assets/icons/menu-close-iconn.svg';
import { Link as ScrollLink, scroller } from 'react-scroll';
import locations from '../assets/icons/location-ham-icon.svg';
import phone from '../assets/icons/phone-ham-icon.svg';
import mail from '../assets/icons/mail-ham-icon.svg';
import youtube from '../assets/icons/youtube-icon-ham.svg';
import instagram from '../assets/icons/instagram-icon-ham.svg';
import twitter from '../assets/icons/twitter-icon-ham.svg';
import facebook from '../assets/icons/facebook-icon-ham.svg';
import WhatsAppButton from './whatsapp';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setAnimation('slide-in'); // Trigger slide-in animation
		document.body.style.overflow = 'hidden'; // Prevent body scroll

		return () => {
			document.body.style.overflow = 'auto'; // Restore body scroll on unmount
		};
	}, []);

	const handleClose = () => {
		setAnimation('slide-out'); // Trigger slide-out animation
		setTimeout(() => {
			setIsOpen(false);
			document.body.style.overflow = 'auto'; // Restore scroll after closing
		}, 500); // Adjust timeout to match animation duration
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			if (location.pathname === '/') {
				if (sectionId) {
					scroller.scrollTo(sectionId, {
						smooth: true,
						offset: -150,
						duration: 500,
					});
				}
			} else {
				navigate('/');
				setTimeout(() => {
					if (sectionId) {
						scroller.scrollTo(sectionId, {
							smooth: true,
							offset: -150,
							duration: 500,
						});
					}
				}, 500);
			}
		} else {
			navigate(path);
		}
		handleClose();
	};

	const getSlideStyles = () => ({
		transform: animation === 'slide-in' ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.5s ease-in-out',
	});

	// Function to apply active styles
	const getLinkStyles = path => ({
		color: location.pathname === path ? '#FFFFFF' : '#00050F',
		fontWeight: location.pathname === path ? 'bold' : 'normal',
		backgroundColor: location.pathname === path ? '#265205' : '#ffff',
	});

	return (
		<div className="fixed top-0 left-0 font-outfit w-full h-full z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={handleClose}
			></div>
			<div
				className="relative w-full pt-[24px] text-center"
				style={getSlideStyles()}
			>
				<div className="bg-[#ffffff] lg:w-full w-[95%] h-screen absolute top-0 left-0 font-medium flex flex-col justify-between px-[20px] pb-[24px]">
					<div className="flex flex-col">
						<div className="flex justify-between pt-[24px]">
							<img
								src={logo}
								alt=""
								onClick={() => handleNavigation('/', 'home')}
							/>
							<button
								className="rounded-md text-[#3a5791]"
								onClick={handleClose}
							>
								<img
									src={close}
									alt=""
									className="w-[30px] h-[30px]"
								/>
							</button>
						</div>

						<ScrollLink
							to="home"
							duration={500}
							smooth={true}
							offset={-70}
							onClick={() => handleNavigation('/', 'home')}
							style={getLinkStyles('/')}
							className="text-[24px] px-[16px] py-[16px] rounded-lg text-left cursor-pointer mt-[40px]"
						>
							Home
						</ScrollLink>
						<ScrollLink
							to="about"
							duration={500}
							smooth={true}
							offset={-70}
							onClick={() => handleNavigation('/', about)}
							style={getLinkStyles('/about')}
							className="text-[24px] px-[16px] py-[16px] rounded-lg text-left cursor-pointer mt-[0px]"
						>
							About Us
						</ScrollLink>

						<RouterLink
							to="/services"
							style={getLinkStyles('/services')}
							className="text-[24px] px-[16px] py-[16px] rounded-lg text-left cursor-pointer"
							onClick={() => handleNavigation('/services')}
						>
							Our Services
						</RouterLink>

						<RouterLink
							to="/contact-us"
							style={getLinkStyles('/contact-us')}
							className="text-[24px] px-[16px] py-[16px] rounded-lg text-left cursor-pointer"
							onClick={() => handleNavigation('/contact-us')}
						>
							Contact us
						</RouterLink>
					</div>

					<div className=" text-[#00050F] pt-[16px]">
						<div className="flex flex-col gap-[16px] text-[16px] font-light">
							<div className="flex gap-[20px] items-center">
								<a href="#">
									<img
										src={locations}
										alt="location-icon-header"
										className="h-[32px] w-[32px]"
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<p className="text-left text-[14px] font-light leading-[24px] ">
									B302 Zitel Plaza, Jabi, Federal Capital Territory, FCT Abja.
								</p>
							</div>
							<div className="flex gap-[16px] items-center">
								<a href="#">
									<img
										src={phone}
										alt="phone-icon-header"
										className=" "
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<div className="text-left  text-[14px] font-light leading-[24px]  ">
									<p>+234 903 407 9339</p>
								</div>
							</div>

							<div className="flex gap-[16px] items-center">
								<a href="#">
									<img
										src={mail}
										alt="mail-icon-header"
										className=""
										onClick={() =>
											window.scrollTo({ top: 0, behavior: 'smooth' })
										}
									/>
								</a>
								<p className="text-left  text-[14px] font-light leading-[24px] ">
									hamzvillesolutions@gmail.com
								</p>
							</div>
						</div>
						<div className="flex gap-[16px] mt-[24px]">
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
								<a href="https://www.instagram.com/hamzvillesolutinsltd?igsh=MXRyeW15NnF5Mm43Ng==">
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
						<a>
							<button className="rounded-md text-center cursor-pointer  text-[#ffff] bg-[#265205] w-full p-1 h-[45px]   text-[16px] font-medium flex justify-center items-center mt-[24px]">
								<WhatsAppButton />
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
