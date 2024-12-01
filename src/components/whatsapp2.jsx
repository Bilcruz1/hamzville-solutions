import React from 'react';
import whatsapp from '../assets/icons/whatsapp-icon-header.svg';

const WhatsAppButtonNav = () => {
	const openWhatsApp = () => {
		const phoneNumber = '+2348037472400'; // Replace this with the correct phone number format
		const message = `Hey there,%0A
I would like to make a booking. Could you please provide me with more details about room availability, pricing, and any special offers?%0A
Thank you.`;

		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(url, '_blank');
	};

	return (
		<button
			onClick={openWhatsApp}
			className="flex justify-center items-center "
		>
			<img
				src={whatsapp}
				alt="whatsapp-icon-header"
				className=""
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			/>
		</button>
	);
};

export default WhatsAppButtonNav;
