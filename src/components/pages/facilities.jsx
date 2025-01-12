import React from 'react';

import FacilitiesTabs from '../facilities/facilitiesTabs';
import Footer from '../footer';
import FindUs from '../findUs';
import CleaningServices from '../cleaningServices';

export default function Facilities() {
	return (
		<div className="font-outfit">
			<div className="bg-gradient-to-b from-[#265205] to-[#132B00] flex justify-center items-center  lg:h-[486px] lg:mt-[90px] lg:pt-[0px] pt-[60px]  ">
				<div className="flex flex-col  justify-end  lg:pt-[60px]  pt-[90px] lg:px-0 px-[24px]">
					<section className="   flex flex-col  justify-center   items-center  h-full">
						<div className="text-center">
							<div className="">
								<p className="text-[#E7B800] lg:text-[48px] text-[32px]   font-extrabold lg:pt-[40px]  ">
									We provide the best services
								</p>
							</div>
							<h1 className="lg:text-[20px] text-center text-[20px] pt-[8px] leading-[32px]  text-[#ffffff] ">
								Delivering top-notch solutions tailored to meet your cleaning
								and pest <br /> control needs.
							</h1>

							<div className="flex justify-center space-x-[32px] lg:mt-[16px] mt-[24px] mb-[76px] ">
								<a
									className="rounded-md hover:cursor-pointer bg-[#ffffff] text-[#265205] px-[16px] py-[12px] text-[16px] font-semibold"
									href="tel:09034079339"
								>
									Book an Appointment
								</a>
							</div>
						</div>
					</section>
				</div>
			</div>
			<CleaningServices />
			<FindUs />
		</div>
	);
}
