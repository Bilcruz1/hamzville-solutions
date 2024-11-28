import React from 'react';
import direction from '../assets/icons/direction-icon.svg';
import MapComponent from './mapComponent';

export default function FindUs() {
	return (
		<div>
			<div className="lg:mb-[60px] mb-[40px]">
				<h6 className="text-center bg-[#FFFEFA] text-[#FF9500] font-light lg:text-[20px] text-[16px] leading-[36px] lg:pt-[80px] pt-[40px]  ">
					Find us with Ease
				</h6>
				<p className="text-center font-semibold lg:text-[36px] text-[20px] text-[#292929] lg:px-[459px] px-[16px]">
					Conveniently Located Just 10 Minutes from the Airport
				</p>

				<div>
					<div className="w-[100%] h-[520px] mt-[40px]">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3942.0757551296792!2d7.2503269999999995!3d8.87254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTInMjEuMSJOIDfCsDE1JzAxLjIiRQ!5e0!3m2!1sen!2sng!4v1732801266716!5m2!1sen!2sng&z=21"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
