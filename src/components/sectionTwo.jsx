import React from 'react';
import homepage1 from '../assets/images/taimage.png';
import YouTubeThumbnail from './YouTubeThumbnail';

export default function SectionTwo() {
	return (
		<div
			id="about"
			className="flex lg:flex-row flex-col justify-between items-center   lg:px-[8.3%] px-[16px] lg:py-[140px] py-[40px] pt-[40px] gap-[40px]"
		>
			{/* Text Section */}

			<div className="lg:w-[50%] w-full">
				<p className="lg:text-[24px] text-[16px] font-light lg:text-left text-center lg:leading-[36px]  leading-[26px] lg:pt-[12px]  text-[#292929]">
					Welcome to Hamzville Solutions Limited, your trusted partner in deep
					cleaning and pest control services. We specialize in creating
					hygienic, pest-free environments for homes, offices, and commercial
					spaces.
				</p>
			</div>

			{/* Image Section */}
			<div className=" lg:w-[40%]  w-full  rounded-2xl ">
				<YouTubeThumbnail videoId="vaHobjwd03E" />
			</div>
		</div>
	);
}
