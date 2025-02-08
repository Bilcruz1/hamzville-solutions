import React from 'react';
import dcsImage from '../assets/images/dcs.png'; // Example image
import pcsImage from '../assets/images/pcs.png'; // Example image
import rceImage from '../assets/images/rce.png'; // Example image

import checked from '../assets/icons/checked-icon.svg'; // Checked icon

export default function CleaningServices() {
	const services = [
		{
			title: 'Pest Control Services',
			description:
				'Our pest control solutions are designed to eliminate unwanted Pests effectively while safeguarding your health.',
			items: [
				{
					title: 'Rodent Pest Control',
					description: 'We eliminates rats and mice, ensuring a safe and pest-free environment.',
				},
				{
					title: 'Commercial Pest Control',
					description: 'We keeps businesses pest-free with safe, effective, and long-lasting solutions.',
				},
				{
					title: 'Industrial Pest Control',
					description:
						'We ensures large facilities remain pest-free with effective and safe treatments.',
				},
				{
					title: 'Special Pest Control',
					description:
						'We targets stubborn and unique infestations with customized, effective solutions.',
				},
			],
			image: pcsImage, // Replace with the actual pest control image
		},

		{
			title: 'Deep Cleaning Services',
			description:
				'We offer comprehensive deep cleaning to ensure every nook and cranny of your space is spotless.',
			items: [
				{
					title: 'Residential Cleaning',
					description: 'Keep your home fresh and clean.',
				},
				{
					title: 'Office Cleaning',
					description: 'Maintain a productive and hygienic workplace.',
				},
				{
					title: 'Post-Construction Cleaning',
					description: 'Erase the mess left after renovations or construction.',
				},
			],
			image: dcsImage,
		},
		
		{
			title: 'Renewable and Clean Energy',
			description:
				'We offer sustainable energy solutions to help you reduce your carbon footprint and embrace eco-friendly living.',
			items: [
				{
					title: 'Solar Panel Installation',
					description:
						'Harness the power of the sun with efficient solar energy systems.',
				},
				{
					title: 'Energy Audits',
					description:
						'Determine energy usage with professional assessments and recommendations.',
				},
				{
					title: 'Energy-Efficient Solutions',
					description:
						'Upgrade to sustainable lighting, appliances, and systems for a greener future.',
				},
			],
			image: rceImage, // Replace with the actual renewable energy image
		},
	];

	return (
		<div className="lg:px-[8.3%] px-[24px]">
			{services.map((service, index) => (
				<div
					key={index}
					className={`flex flex-col lg:flex-row ${
						index % 2 === 0 ? '' : 'lg:flex-row-reverse'
					} gap-[48px] lg:py-[120px] py-[48px]`}
				>
					{/* Text Section */}
					<div className="w-full flex flex-col justify-center lg:w-1/2">
						<h1 className="lg:text-[36px] text-[32px] text-[#292929] lg:text-left text-center font-semibold mb-6">
							{service.title}
						</h1>
						<p className="lg:text-[24px] text-[20px] lg:leading-[36px] leading-[30px] font-light lg:text-left text-center text-[#292929] mb-6">
							{service.description}
						</p>
						<ul className="space-y-6">
							{service.items.map((item, idx) => (
								<li
									key={idx}
									className="flex items-start gap-3"
								>
									<span
										className="inline-block w-[50px] h-[40px] bg-no-repeat bg-center"
										style={{ backgroundImage: `url(${checked})` }}
									></span>
									<p className="lg:text-[24px] text-[20px] lg:leading-[36px] text-[#292929]">
										<strong>{item.title}:</strong> {item.description}
									</p>
								</li>
							))}
						</ul>
					</div>

					{/* Image Section */}
					<div className="w-full lg:w-1/2 flex lg:justify-end">
						<img
							src={service.image}
							alt={service.title}
							className="lg:h-[640px] h-[444px] object-cover rounded-xl w-full"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
