import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function HeroSection() {
	return (
		<>
			<div
				className="bg-[url('/src/assets/images/homepage.png')] lg:h-[calc(100vh-150px)] bg-cover lg:mt-[150px]  bg-[#9da39f]  h-screen lg:bg-cover bg-top flex justify-center  lg:pt-[0px] pt-[60px]  "
				id="home"
			>
				<div className="flex flex-col  justify-end  lg:pt-[60px] pt-[60px]">
					<section className="   flex flex-col  justify-center   items-center lg:px-[0px] px-[16px]  h-full">
						<div className="text-center">
							<div className="">
								<p className="text-[#ffffff] lg:text-[20px] text-[16px]   font-medium lg:pt-[40px]  ">
									Welcome to Bryana Resort & Apartment
								</p>
							</div>
							<h1 className="lg:text-[48px] text-[24px] pt-[8px]  text-[#FF9500] font-semibold ">
								Opulence with the comfort of home
							</h1>

							<div className="flex justify-center space-x-[32px] lg:mt-[16px] mt-[24px] mb-[76px] ">
								<a
									className="rounded-md hover:cursor-pointer text-[#FF9500] border-[#FF9500] border-[1px] px-[30px] py-[12px] text-[16px] font-bold"
									href="tel:08037472400"
								>
									Call us for Booking
								</a>
							</div>
						</div>
					</section>
					{/* <div className="bg-[#EBD8BD] lg:block hidden w-screen   py-[14px] bg-opacity-20 text-center font-medium text-[#ffffff] text-[20px]">
						Just 6 Minute drive from Nnamdi Azikiwe International Airport,
						Federal Capital Territory (FCT) Abuja, Nigeria
					</div> */}
					<marquee className="bg-[#EBD8BD] w-screen py-[10px] bg-opacity-20 text-center font-medium text-[#ffffff] text-[20px]">
						<div>
							Just 6 Minute drive from Nnamdi Azikiwe International Airport,
							Federal Capital Territory (FCT) Abuja, Nigeria
						</div>
					</marquee>
				</div>
			</div>
		</>
	);
}
