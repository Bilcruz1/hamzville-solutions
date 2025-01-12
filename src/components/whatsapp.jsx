import React from 'react';

const WhatsAppButton = () => {
	const openWhatsApp = () => {
		const phoneNumber = '+2349034079339'; // Replace this with the correct phone number format
		const message = `Hey there,%0A
This is Hamzville Solution Limited. We're here to keep your space spotless. Need a regular or deep clean? Reply now to book or ask questions!%0A
Thank you.`;

		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(url, '_blank');
	};

	return (
		<button
			onClick={openWhatsApp}
			className="w-full h-full "
		>
			Book Now
		</button>
	);
};

export default WhatsAppButton;
