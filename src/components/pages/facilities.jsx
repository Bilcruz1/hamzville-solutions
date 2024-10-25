import React from 'react';

import FacilitiesTabs from '../facilities/facilitiesTabs';
import Footer from '../footer';

export default function Facilities() {
	return (
		<div className="font-outfit">
			<div>
				<div className=" bg-[#00050F]  bg-cover bg-bottom lg:mt-[155px] mt-[65px] lg:pt-[120px] pt-[80px]  pb-[40px]">
					<h6 className="text-center text-[#FF9500] font-medium text-[14px]    ">
						Our Exceptional Facilities
					</h6>
					<p className="text-center font-light lg:px-[20%] px-[16px] pt-[8px] lg:text-[24px] lg:leading-[36px] leading-[26px] text-[16px] text-[#ffffff] ">
						At Bryana Resort & Apartment, we offer a wide range of premium
						facilities designed to enhance your stay and provide ultimate
						comfort and convenience. Whether you're visiting for business or
						leisure, our top-notch amenities cater to your every need.
					</p>
					<FacilitiesTabs />
				</div>
			</div>
			<Footer />
		</div>
	);
}
