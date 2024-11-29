import React from 'react';
import homepage1 from '../assets/images/taimage.png';
import YouTubeThumbnail from './YouTubeThumbnail';

export default function SectionTwo() {
	return (
		<div className="flex lg:flex-row flex-col justify-between items-center bg-[#FFFEFA]  lg:px-[120px] px-[16px] lg:py-[140px] py-[40px] pt-[40px] gap-[40px]">
			{/* Text Section */}

			<div className="lg:w-[50%] w-full">
				<p className="lg:text-[24px] text-[16px] font-light lg:text-left text-center lg:leading-[36px]  leading-[26px] lg:pt-[12px]  text-[#292929]">
					Experience a perfect blend of modern elegance and unmatched
					hospitality at Bryana Resort & Apartment. Ideally located just 10
					minutes from the airport, our resort offers a tranquil escape in the
					bustling city of Abuja. <br /> <br />
					Whether you're here for a short business trip or an extended stay,
					Bryana Resort & Apartment provides the comfort, convenience, and
					luxury you deserve.
				</p>
			</div>

			{/* Image Section */}
			<div className=" lg:w-[40%]  w-full rounded-2xl ">
				<YouTubeThumbnail videoId="Lorgq7B-GIM" />
			</div>
		</div>
	);
}
