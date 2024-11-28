import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles

// Your images here
import img1 from '../../assets/slides/exploreslides/slide.jpg';
import img2 from '../../assets/slides/exploreslides/slide1.jpg';
import img3 from '../../assets/slides/exploreslides/slide2.jpg';
import img4 from '../../assets/slides/exploreslides/slide3.jpg';
import img5 from '../../assets/slides/exploreslides/slide4.jpg';
import img6 from '../../assets/slides/exploreslides/slide5.jpg';
import img7 from '../../assets/slides/exploreslides/slide6.jpg';
import img8 from '../../assets/slides/exploreslides/slide7.jpg';
import img9 from '../../assets/slides/exploreslides/slide8.jpg';
import img10 from '../../assets/slides/exploreslides/slide9.jpg';
import img11 from '../../assets/slides/exploreslides/slide10.jpg';
import img12 from '../../assets/slides/exploreslides/slide11.jpg';
import img13 from '../../assets/slides/exploreslides/slide12.jpg';
import img14 from '../../assets/slides/exploreslides/slide13.jpg';
import img15 from '../../assets/slides/exploreslides/slide14.jpg';
import img16 from '../../assets/slides/exploreslides/slide15.jpg';

import arrowNext from '../../assets/icons/arrowNext.svg';
import arrowBack from '../../assets/icons/arrowBack.svg';

export default function ExploreSlides() {
	const [currentSlide, setCurrentSlide] = useState(1); // State to track the current slide index
	const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

	const handleSlideChange = swiper => {
		setCurrentSlide(swiper.realIndex + 1); // Update the current slide number (0-indexed so we add 1)
	};

	return (
		<div className="relative w-full lg:px-[120px] px-[16px] pt-[48px] lg:pb-[116px] pb-[48px]">
			{/* Display the current slide and total slide count */}
			{/* <p>Luxury Apartments</p>
			<div></div>
			<div className=" text-[#FFFFFF] text-[20px] font-light mb-4">
				{`Showing room ${currentSlide} of ${images.length}`}
			</div> */}

			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				loop={true}
				autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
				className="swiper-container"
				onSlideChange={handleSlideChange}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="relative">
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="w-full lg:h-[800px] h-[393px] object-cover rounded-2xl"
							/>
							{/* Custom navigation buttons */}
							<div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2">
								<div className="custom-prev bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowBack}
										alt="Previous"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
							<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2">
								<div className="custom-next bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowNext}
										alt="Next"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
