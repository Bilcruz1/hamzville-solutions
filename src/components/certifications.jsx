import React from 'react';
import cac from '../assets/images/cac.svg';
import ehcon from '../assets/images/ehcon.svg';
import pcan from '../assets/images/pcan.svg';
import ecn from '../assets/icons/ecn.svg';
import starters from '../assets/icons/starters.svg';
import pula from '../assets/icons/pula.svg';
import dantata from '../assets/icons/dantata.svg';
import cbm from '../assets/icons/cbm.svg';
import fushia from '../assets/icons/fushia.svg';
import jabtech from '../assets/icons/jabtech.svg';
import ciibex from '../assets/icons/ciibex.svg';
import golf from '../assets/icons/golf.svg';

export default function Certifications() {
	const logos = [
		ecn,
		starters,
		pula,
		dantata,
		cbm,
		fushia,
		jabtech,
		ciibex,
		golf,
	];

	return (
		<>
			<div className="lg:px-[8.3%] px-[16px] py-[80px]">
				<div>
					<h6 className="text-center bg-[#FFFEFA] text-[#265205] font-semibold lg:text-[24px] text-[16px] leading-[36px]">
						Our Certification
					</h6>
					<p className="text-center font-semibold lg:text-[36px] text-[32px] text-[#292929] lg:px-[459px] px-[24px]">
						We are Licensed
					</p>
				</div>
				<div className="flex lg:gap-[48px] lg:justify-center lg:pt-[48px] pt-[24px]">
					<div>
						<img
							src={ehcon}
							alt="ehcon"
							className="lg:scale-100 scale-75"
						/>
					</div>
					<div>
						<img
							src={pcan}
							alt="pcan"
							className="lg:scale-100 scale-75"
						/>
					</div>
					<div>
						<img
							src={cac}
							alt="cac"
							className="lg:scale-100 scale-75"
						/>
					</div>
				</div>
			</div>
			<div className="h-[390px] lg:px-0 px-[24px] bg-gradient-to-b from-[#265205] to-[#132B00] flex justify-center items-center flex-col">
				<p className="text-[#FFFFFF] lg:text-[40px] text-[30px] font-extrabold text-center lg:leading-[64px] leading-[42px]">
					We’re always here to keep your <br /> environment clean, safe✌️
				</p>
				<a
					className="bg-[#E7B800] text-[#265205] rounded-lg text-[16px] px-[24px] py-[16px] font-semibold mt-[16px]"
					href="tel:09034079339"
				>
					Call US Now
				</a>
			</div>

			{/* Scrolling Marquee Section */}
			<div>
				<p className="text-center font-semibold lg:text-[36px] text-[24px] text-[#292929] lg:px-[459px] lg:py-[80px] py-[40px] px-[24px]">
					Our satisfied Clients
				</p>
			</div>

			<div className="w-full overflow-hidden relative lg:pb-[120px]">
				{/* Outer Wrapper for Infinite Loop */}
				<div className="flex whitespace-nowrap animate-marquee lg:animate-marqueeMobile">
					{/* Duplicate Images for Seamless Transition */}
					{[...logos, ...logos].map((logo, index) => (
						<div
							key={index}
							className="flex-shrink-0 mx-4"
						>
							<img
								src={logo}
								alt={`logo-${index}`}
								className="h-12 lg:h-[120px] w-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
