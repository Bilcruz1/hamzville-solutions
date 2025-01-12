import React from 'react';
import direction from '../assets/icons/direction-icon.svg';
import MapComponent from './mapComponent';

export default function FindUs() {
	return (
		<div>
			<div className="lg:mb-[60px] mb-[40px] ">
				<div>
					<div className="w-[100%] lg:h-[637px] h-[520px] mt-[40px] lg:pb-[80px] lg:px-[8.3%] ">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7021224075444!2d7.4321993!3d9.0704889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75dda7674543%3A0x660c4ccd4681bc69!2sZitel%20plaza!5e0!3m2!1sen!2sng!4v1732801266716!5m2!1sen!2sng"
							allowFullScreen
							className="lg:rounded-2xl"
						></iframe>
					</div>
				</div>

				<div className="flex lg:flex-row flex-col lg:border-t-[1px] lg:border-gray-400 lg:px-[8.3%] px-[24px] pt-[48px] ">
					<div className="lg:w-1/2 w-full">
						<p className="text-[24px] font-semibold text-[#265205]">
							Locate us
						</p>
						<p className="text-[24px] font-light leading-[36px] text-[#00050F] pt-[16px]">
							B302 Zitel Plaza, Jabi, Abuja, Federal Capital Territory, Abuja,
							Nigeria{' '}
						</p>
					</div>
					<div className="lg:w-1/2 w-full  lg:ml-[90px] lg:pt-0 pt-[16px] ">
						<p className="text-[24px] font-semibold leading-[36px] text-[#265205] pt-[16px]">
							Email us:{' '}
							<span className="text-[24px] font-light leading-[36px] text-[#00050F]">
								{' '}
								hamzvillesolutions@gmail.com
							</span>
						</p>
						<p className="text-[24px] font-semibold leading-[36px] text-[#265205] pt-[16px]">
							Call or WhatsApp:
							<span className="text-[24px] font-light leading-[36px] text-[#00050F]">
								{' '}
								+234 903 407 9339
							</span>
						</p>
						<p className="text-[24px] font-semibold leading-[36px] text-[#265205] pt-[16px]">
							Instagram, Twitter & Facebook:
							<span className="text-[24px] font-light leading-[36px] text-[#00050F]">
								{' '}
								@hamzvillesolutinsltd
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
