import React from 'react';
import ContactUSForm from '../contactUsForm';
import FindUs from '../findUs';

export default function ContactUs() {
	return (
		<>
			<div className="bg-gradient-to-b from-[#265205] to-[#132B00] font-outfit flex justify-center items-center  lg:h-[486px] lg:mt-[90px] lg:pt-[0px] pt-[60px]  ">
				<div className="flex flex-col  justify-end  lg:pt-[60px]  pt-[90px] lg:px-[8.3%] px-[24px]">
					<section className="   flex flex-col  justify-center   items-center  h-full">
						<div className="text-center">
							<div className="">
								<p className="text-[#E7B800] lg:text-[48px] text-[32px]   font-extrabold lg:pt-[40px]  ">
									Let’s Talk
								</p>
							</div>
							<h1 className="lg:text-[20px] text-center text-[20px] pt-[8px] leading-[32px]  text-[#ffffff] ">
								We’re always at your door step, contact us now let’s get your{' '}
								<br />
								environment free from pest and clean.
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
			<div className="flex  font-outfit lg:flex-row flex-col-reverse justify-between items-center lg:gap-0 gap-[48px] lg:px-[8.3%]  px-[24px] lg:pb-[80px] pb-[48px]">
				<div className="lg:w-1/2 w-full">
					<h1 className="lg:text-[32px] text-[24px] font-semibold text-[#292929] lg:mb-6 mb-4">
						Work Hours
					</h1>
					<h2 className="lg:text-[24px] text-[20px] leading-[36px] text-[#292929] font-medium mb-1">
						Monday - Friday
					</h2>
					<p className="lg:text-[24px] text-[20px] leading-[36px] text-[#292929] font-light lg:mb-6 mb-4">
						08:00 AM to 06:00 PM{' '}
					</p>
					<h2 className="lg:text-[24px] text-[20px] leading-[36px] text-[#292929] font-medium mb-1">
						Saturday - Sunday
					</h2>
					<p className="lg:text-[24px] text-[20px] leading-[36px] text-[#292929] font-light lg:mb-6 mb-4">
						By appointment only
					</p>
					<h1 className="lg:text-[32px] text-[24px] font-semibold text-[#292929] lg:mb-6 mb-4">
						Our Location
					</h1>
					<p className="lg:text-[24px] text-[20px] leading-[36px] text-[#292929] font-light">
						B302 Zitel Plaza, Jabi, Abuja, Federal Capital Territory (FCT),
						Abuja, Nigeria{' '}
					</p>
				</div>
				<div className=" lg:-mt-14 -mt-10 font-sans bg-[#ffffff] flex justify-end rounded-lg lg:w-1/2 w-full ">
					<ContactUSForm />
				</div>
			</div>
			<FindUs />
		</>
	);
}
