import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function HeroSection() {
	return (
		<>
			<div
				className="bg-[url('/src/assets/images/Hamzville-hero-section.png')] lg:h-[calc(100vh-90px)] bg-cover lg:mt-[90px]  bg-[#9da39f]  h-screen lg:bg-cover bg-top flex justify-center lg:px-[8.3%] px-[24px]  lg:pt-[0px] pt-[60px]  "
				id="home"
			>
				<div className="flex flex-col  justify-end  lg:pt-[60px]  pt-[60px]">
					<section className="   flex flex-col  justify-center   items-center lg:px-[20%] px-[24px]  h-full">
						<div className="text-center">
							<div className="">
								<p className="text-[#E7B800] lg:text-[48px] text-[16px]   font-extrabold lg:pt-[40px]  ">
									Clean Spaces, Healthy Living
								</p>
							</div>
							<h1 className="lg:text-[20px] text-center text-[20px] pt-[8px]  text-[#ffffff] ">
								We transform your home or office. We specialize in deep cleaning
								and pest control services that ensure a spotless and safe
								environment.
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
		</>
	);
}
