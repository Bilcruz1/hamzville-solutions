import React from 'react';
import logo from '../assets/icons/bryana-logo-header.svg';
import luxury from '../assets/icons/luxury-icon.svg';
import swimmingPool from '../assets/icons/swimmingPool-icon.svg';
import restaurant from '../assets/icons/restaurant-icon.svg';
import internet from '../assets/icons/internet-icon.svg';
import conference from '../assets/icons/conferenceHall-icon.svg';
import laundry from '../assets/icons/laundary-icon.svg';
import airport from '../assets/icons/airport-icon.svg';

export default function Amenities() {
	// Array to store data for each amenity
	const amenities = [
		{
			icon: luxury,
			title: 'Luxury Apartments',
			description:
				'Our elegantly furnished apartments provide luxury, spaciousness, and modern comfort perfect for short-term stays or extended visits.',
		},
		{
			icon: swimmingPool,
			title: 'Swimming Pool',
			description:
				'Take a refreshing dip in our beautiful swimming pool, the perfect place to unwind after a busy day or weekend.',
		},
		{
			icon: restaurant,
			title: 'Restaurant & Bar',
			description:
				'Savor delicious meals and refreshing drinks at our restaurant and bar, offering a variety of local and international cuisines for everyone.',
		},
		{
			icon: internet,
			title: '24/7 Internet & Power',
			description:
				'Enjoy high-speed internet and uninterrupted power throughout our property, ensuring a seamless experience for you, day and night.',
		},
		{
			icon: conference,
			title: 'Conference Hall',
			description:
				'Our modern conference hall features state-of-the-art facilities, making it the perfect venue for business meetings, seminars, and corporate events.',
		},
		{
			icon: laundry,
			title: 'Laundry Services',
			description:
				'Enjoy the convenience of our professional laundry services, ensuring your clothes are fresh and ready whenever you need them.',
		},
		{
			icon: airport,
			title: 'Free Airport Shuttle',
			description:
				'Enjoy the convenience of our complimentary airport shuttle service, exclusively for guests staying at the hotel, making your arrival and departure stress-free.',
		},
		{
			icon: airport,
			title: 'Ticketing Services',
			description:
				'Our team is available to assist with flight ticketing and travel arrangements, ensuring a seamless experience during your stay.',
		},
	];

	return (
		<div>
			<h6 className="text-center text-[#FF9500] font-light text-[20px] leading-[36px] lg:pt-[13px] pt-[40px]">
				Our Exclusive Amenities
			</h6>
			<p className="text-center font-semibold  text-[#292929] lg:text-[36px] text-[20px] lg:px-[356px] px-[16px] pt-[8px]">
				At Bryana Resort & Apartment, we offer a variety of premium features
				designed to enhance your stay
			</p>
			<div className="grid lg:grid-cols-4 grid-cols-1 gap-[48px] lg:px-[120px] px-[16px] pt-[48px]">
				{amenities.map((amenity, index) => (
					<div
						key={index}
						className="hover:border-[#FDDF9D] hover:shadow-inner  hover:bg-[#FFFBF0] border-[1px] border-[#D1D1D6] px-[16px] pt-[16px] lg:pb-[42px] pb-[16px] rounded-2xl"
					>
						<div>
							<img
								src={amenity.icon}
								alt={amenity.title}
								className="w-[72px] h-[57px]"
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							/>
						</div>
						<h1 className="text-[20px] text-[#1B1F26] pt-[12px] leading-[30px] font-semibold">
							{amenity.title}
						</h1>
						<p className="text-[#292929] text-[16px] pt-[12px] leading-[26px] font-light">
							{amenity.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
