import React from 'react';
import ExploreSlides from './slides/exploreslides';

export default function Explore() {
	return (
		<>
			<div className=" lg:mt-[140px] mt-[40px] lg:py-[120px] py-[80px] lg:px-[8.3%] px-[16px] bg-[#FFFCD0]">
				<div className="">
					<h6 className="text-center text-[#265205]  font-semibold lg:text-[20px] text-[24px] leading-[36px]  ">
						Why Choose Us
					</h6>
					<p className="text-center font-semibold lg:text-[32px] text-[24px] text-[#292929] lg:px-[356px] px-[24px]">
						Your Trusted Partner for Clean and Pest-Free Spaces
					</p>
				</div>
				<div className="flex lg:flex-row flex-col gap-[48px] pt-[48px] items-stretch ">
					<div className="lg:w-[55%] flex justify-center items-center   rounded-2xl">
						<ExploreSlides />
					</div>
					<div className="flex flex-col justify-center ">
						<p className="text-[24px] font-light leading-[36px]">
							At Hamzville Solutions Limited, we are dedicated to transforming
							your spaces into clean, safe, and pest-free zones. With years of
							experience and a commitment to excellence, we cater to both
							residential and commercial clients with tailored solutions to meet
							every need.
						</p>
						<p className="text-[#1B1F26] text-[20px] leading-[30px] font-semibold pt-[32px]">
							Professional Team
						</p>
						<p className="text-[#1B1F26] text-[20px] leading-[30px] font-semibold pt-[16px]">
							Eco-Friendly Solutions
						</p>
						<p className="text-[#1B1F26] text-[20px] leading-[30px] font-semibold pt-[16px]">
							Customer Satisfaction
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
