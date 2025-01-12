import React, { useState } from 'react';

export default function Amenities() {
	// Array to store data for each amenity
	const amenities = [
		{
			title: 'Residential Cleaning',
			description:
				'Our Residential Cleaning service delivers a spotless and refreshed home using eco-friendly products. Enjoy a healthier, more comfortable living space with our professional care.',
		},
		{
			title: 'Office Cleaning',
			description:
				'Our Office Cleaning service ensures a clean, hygienic, and productive workspace. We focus on every detail to create a professional and welcoming environment.',
		},
		{
			title: 'Post-Construction Cleaning',
			description:
				'Our Post-Construction Cleaning service clears dust, debris, and residues, leaving your space spotless and move-in ready. We handle the mess so you can enjoy the results.',
		},
		{
			title: 'Rodent Control',
			description:
				'Our Rodent Control service effectively eliminates rats, mice, and more, protecting your property from damage and contamination. We use safe, efficient methods to keep your space rodent-free.',
		},
		{
			title: 'Termite Solutions',
			description:
				'Our Termite Solutions safeguard your property by eliminating termites and preventing future infestations. Protect your structures with our reliable and eco-friendly treatments.',
		},
		{
			title: 'General Pest Management',
			description:
				'Our General Pest Management service tackles common pests like cockroaches, ants, spiders, and more. We ensure a safe, pest-free environment with effective and eco-friendly solutions.',
		},
		{
			title: 'Solar Panel Installation',
			description:
				'Harness the power of the sun with our high-quality solar energy systems. We design and install solutions tailored to your energy needs, reducing your reliance on traditional power sources and lowering utility bills.',
		},
		{
			title: 'Energy Audits and Optimization',
			description:
				'Identify areas of energy waste with our comprehensive audits. Our team provides actionable recommendations to improve efficiency, helping you save money while minimizing environmental impact.',
		},
		{
			title: 'Energy-Efficient Systems Upgrade',
			description:
				'Transition to sustainable living with energy-efficient lighting, appliances, and HVAC systems. Our upgrades not only reduce energy consumption but also enhance the performance and longevity of your systems.',
		},
	];

	// State to manage the active index for mobile view
	const [activeIndex, setActiveIndex] = useState(0);

	// Function to toggle active index on mobile
	const handleToggle = index => {
		setActiveIndex(prevIndex => (prevIndex === index ? -1 : index));
	};

	return (
		<div>
			<h6 className="text-center text-[#265205] font-semibold text-[20px] leading-[36px] lg:pt-[13px] pt-[40px]">
				Our Professional Services
			</h6>
			<p className="text-center font-semibold text-[#292929] lg:text-[36px] text-[32px] lg:px-[356px] px-[24px] pt-[8px]">
				Keep your environment spotless and refreshed, free from pests and dirt.
			</p>

			{/* Large Screen Layout */}
			<div className="hidden lg:grid lg:grid-cols-3 gap-[48px] lg:px-[120px] px-[16px] pt-[48px]">
				{amenities.map((amenity, index) => (
					<div
						key={index}
						className="border-2 border-[#D1D1D6] px-[16px] pt-[16px] lg:pb-[42px] pb-[16px] rounded-2xl hover:border-[#265205] hover:shadow-inner hover:bg-[#FFFCD0]"
					>
						<h1 className="text-[24px] text-[#1B1F26] text-center pt-[12px] leading-[30px] font-semibold">
							{amenity.title}
						</h1>
						<p className="text-[#292929] text-center text-[16px] pt-[16px] leading-[26px] font-light">
							{amenity.description}
						</p>
					</div>
				))}
			</div>
			<div className="lg:flex hidden justify-center  space-x-[32px]  mt-[48px] mb-[80px]  ">
				<a
					className="rounded-md hover:cursor-pointer bg-[#265205] text-[#ffffff] px-[16px] py-[12px] text-[16px] font-semibold"
					href="tel:09034079339"
				>
					Book an Appointment
				</a>
			</div>

			{/* Mobile Layout */}
			<div className="lg:hidden px-[24px] pt-[48px]">
				{amenities.map((amenity, index) => (
					<div
						key={index}
						className={`border-[0.1px] ${
							activeIndex === index
								? 'border-[#265205] bg-[#FFFCD0]'
								: 'border-[#f0f0f0]'
						} px-[24px] py-[16px] `}
					>
						{/* Title with toggle functionality */}
						<h1
							className="text-[24px] text-[#1B1F26] leading-[30px] font-semibold cursor-pointer"
							onClick={() => handleToggle(index)}
						>
							{amenity.title}
						</h1>
						{/* Description only for active item */}
						{activeIndex === index && (
							<p className="text-[#292929] text-[16px] pt-[16px] leading-[26px] font-light">
								{amenity.description}
							</p>
						)}
					</div>
				))}
				<div className="flex justify-center space-x-[32px]  mt-[48px] mb-[80px]  ">
					<a
						className="rounded-md hover:cursor-pointer bg-[#265205] text-[#ffffff] px-[16px] py-[12px] text-[16px] font-semibold"
						href="tel:09034079339"
					>
						Book an Appointment
					</a>
				</div>
			</div>
		</div>
	);
}
