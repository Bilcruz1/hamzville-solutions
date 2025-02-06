import React, { useState, useEffect } from 'react';

export default function Amenities() {
	const amenities = [
		{
			title: 'Pest Control',
			description:
				'Our Pest Control services effectively eliminate rodents, insects, and other pests, ensuring a safe and hygienic environment. We use eco-friendly solutions for long-lasting protection.',
		},
		{
			title: 'Deep Cleaning',
			description:
				'Our Deep Cleaning service reaches every corner, removing dirt, germs, and allergens for a healthier space. We ensure a thorough, long-lasting clean for homes and businesses.',
		},
		{
			title: 'Commercial & Industrial Cleaning',
			description:
				'Our Commercial & Industrial Cleaning services ensure a spotless, safe, and hygienic workspace. We handle large-scale cleaning needs with efficiency and professionalism.',
		},
		{
			title: 'Post Construction Cleaning',
			description:
				'Our Post-Construction Cleaning removes dust, debris, and residues, leaving your space spotless and ready to use. We ensure a thorough and hassle-free cleanup after any project.',
		},
		{
			title: 'General Pest Management',
			description:
				'Our General Pest Management service eliminates common pests like cockroaches, ants, and spiders. We use safe and effective treatments to keep your space pest-free.',
		},
		{
			title: 'Facility Management',
			description:
				'Our Facility Management services ensure smooth operations, maintenance, and safety for residential and commercial properties. We provide reliable solutions to keep your spaces efficient and well-maintained.',
		},
		{
			title: 'Clean Energy Business',
			description:
				'We provide sustainable clean energy solutions, including solar installations and energy efficiency upgrades. Power your home or business with eco-friendly and cost-effective energy.',
		},
		{
			title: 'Home Automation',
			description:
				'Our Home Automation services bring convenience and security to your space with smart lighting, climate control, and surveillance systems. Experience seamless control and energy efficiency at your fingertips.',
		},
		{
			title: 'General Contract',
			description:
				'Our General Contract services cover construction, renovations, and maintenance with quality craftsmanship and efficiency. We deliver reliable solutions tailored to your project needs.',
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	// Auto-switch active index every 10 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex(prevIndex => (prevIndex + 1) % amenities.length);
		}, 8000); // 10 seconds

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

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
			<div className="lg:flex hidden justify-center space-x-[32px] mt-[48px] mb-[80px]">
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
						} px-[24px] py-[8px]`}
					>
						<h1
							className={`text-[#1B1F26] cursor-pointer ${
								activeIndex === index
									? 'text-[24px] font-semibold bg-[#FFFCD0]'
									: 'text-[14px]'
							}`}
							onClick={() => setActiveIndex(index)}
						>
							{amenity.title}
						</h1>
						{activeIndex === index && (
							<p className="text-[#292929] text-[16px] pt-[16px] leading-[26px] font-light">
								{amenity.description}
							</p>
						)}
					</div>
				))}
				<div className="flex justify-center space-x-[32px] mt-[48px] mb-[80px]">
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
