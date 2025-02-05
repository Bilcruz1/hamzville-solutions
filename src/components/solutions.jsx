import React from 'react';
import rodents from '../assets/images/rodents.png';
import termites from '../assets/images/termites.png';
import cockroaches from '../assets/images/cockroaches.png';
import ants from '../assets/images/ants.png';
import spiders from '../assets/images/spiders.png';

export default function Solutions() {
	return (
		<div>
			<h6 className="text-center text-[#265205] font-semibold text-[20px] leading-[36px]  lg:pt-[40px]">
				Say Goodbye to Stubborn Pests
			</h6>
			<p className="text-center font-semibold text-[#292929] lg:text-[36px] text-[32px] lg:px-[356px] px-[24px] pt-[8px]">
				Our pest control solutions eliminate stubborn pests, ensuring a safe and
				pest-free environment for you.{' '}
			</p>

			<div className="flex justify-center gap-5 pt-[48px] lg:px-[120px] px-[16px]">
				<div className="flex flex-col justify-center items-center">
					<img
						src={rodents}
						alt=""
					/>
					<p className="pt-[16px] font-semibold text-[#1B1F26] text-[24px leading-[30px]">
						Rodents
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						src={termites}
						alt=""
					/>
					<p className="pt-[16px] font-semibold text-[#1B1F26] text-[24px leading-[30px]">
						Termites
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						src={cockroaches}
						alt=""
					/>
					<p className="pt-[16px] font-semibold text-[#1B1F26] text-[24px leading-[30px]">
						Cockroaches
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						src={ants}
						alt=""
					/>
					<p className="pt-[16px] font-semibold text-[#1B1F26] text-[24px leading-[30px]">
						Ants
					</p>
				</div>
				<div className="flex flex-col justify-center items-center">
					<img
						src={spiders}
						alt=""
					/>
					<p className="pt-[16px] font-semibold text-[#1B1F26] text-[24px leading-[30px]">
						Spiders
					</p>
				</div>
			</div>
		</div>
	);
}
