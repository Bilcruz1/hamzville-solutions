import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

export default function ContactUSForm() {
	const [formData, setFormData] = useState({
		serviceType: [], // Now an array to hold multiple selections
		fullName: '',
		whatsappNumber: '',
		houseAddress: '',
		googleMapAddress: '',
		propertyDescription: '',
	});
	const [messagePreview, setMessagePreview] = useState(''); // State for message preview
	const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	// Handle form input changes
	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};
	const handleCheckboxChange = e => {
		const { value, checked } = e.target;
		setFormData(prev => {
			if (checked) {
				// Add the selected service to the array
				return { ...prev, serviceType: [...prev.serviceType, value] };
			} else {
				// Remove the unselected service from the array
				return {
					...prev,
					serviceType: prev.serviceType.filter(type => type !== value),
				};
			}
		});
	};

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault();
		const message = `
			Hi, you have a new request:
			- Service Type: ${formData.serviceType.join(', ') || 'None'}
			- Full Name: ${formData.fullName}
			- WhatsApp Number: ${formData.whatsappNumber}
			- House Address: ${formData.houseAddress}
			- Google Map Address: ${formData.googleMapAddress}
			- Property Description: ${formData.propertyDescription}
		`;
		setMessagePreview(message); // Set the preview for display

		// Send the message to EmailJS
		sendEmail(message);
	};

	// Send email via EmailJS
	const sendEmail = message => {
		setIsSubmitting(true); // Show loading state
		emailjs
			.send(
				'service_f23sumb', // Replace with your EmailJS Service ID
				'template_u5jbji5', // Replace with your EmailJS Template ID
				{ message }, // Pass the message as a parameter
				'6P08c4cfZIY6JzUS5' // Replace with your EmailJS Public Key
			)
			.then(
				response => {
					setIsSubmitting(false);
					setSuccessMessage('Your request has been successfully submitted!');
					setErrorMessage('');
					console.log('Email successfully sent:', response);
				},
				error => {
					setIsSubmitting(false);
					setErrorMessage('Failed to send your request. Please try again.');
					setSuccessMessage('');
					console.error('Email sending error:', error);
				}
			);
	};

	return (
		<div className="flex flex-col justify-center items-center w-full  shadow-2xl rounded-lg">
			<form
				onSubmit={handleSubmit}
				className=" rounded-lg p-6 w-full  mb-8"
			>
				<h1 className="text-[#292929] text-[32px] font-semibold  mb-[18px]">
					Easy Request
				</h1>

				<div className="flex  gap-4 mb-6">
					{/* Cleaning Service */}
					<label
						className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg cursor-pointer ${
							formData.serviceType.includes('Cleaning Service')
								? ' '
								: 'border-gray-300 text-gray-600'
						}`}
					>
						<input
							type="checkbox"
							name="serviceType"
							value="Cleaning Service"
							checked={formData.serviceType.includes('Cleaning Service')}
							onChange={handleCheckboxChange}
							className="hidden"
						/>
						{/* Custom Checkmark */}
						<span
							className={`w-5 h-5 inline-block rounded-md border-2 ${
								formData.serviceType.includes('Cleaning Service')
									? 'border-[#FF9500]'
									: 'border-gray-300 '
							}`}
						>
							{formData.serviceType.includes('Cleaning Service') && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-orange-500 m-auto"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</span>
						Cleaning Service
					</label>

					{/* Pest Control */}
					<label
						className={`flex items-center gap-2 px-4 py-2 border-2 rounded-lg cursor-pointer ${
							formData.serviceType.includes('Pest Control')
								? ''
								: 'border-gray-300 text-gray-600'
						}`}
					>
						<input
							type="checkbox"
							name="serviceType"
							value="Pest Control"
							checked={formData.serviceType.includes('Pest Control')}
							onChange={handleCheckboxChange}
							className="hidden"
						/>
						{/* Custom Checkmark */}
						<span
							className={`w-5 h-5 inline-block rounded-md border-2 ${
								formData.serviceType.includes('Pest Control')
									? 'border-[#FF9500]'
									: 'border-gray-300 '
							}`}
						>
							{formData.serviceType.includes('Pest Control') && (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4 text-orange-500 m-auto"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</span>
						Pest Control
					</label>
				</div>

				{/* Full Name */}
				<div className="mb-[18px]">
					<label
						className="block text-[12px] leading-[16px] text-[#69758C] font-semibold mb-2"
						htmlFor="fullName"
					>
						Full Name <span className="text-[#E01F1F]">*</span>
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						placeholder="Please enter your full name"
						className="w-full px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#D0D5DD] border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
						required
					/>
				</div>

				{/* WhatsApp Number */}
				<div className="mb-[18px]">
					<label
						className="block text-[12px] leading-[16px] text-[#69758C] font-semibold mb-2"
						htmlFor="whatsappNumber"
					>
						WhatsApp Number <span className="text-red-500">*</span>
					</label>
					<div className="flex">
						<span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 text-gray-500 rounded-l-lg">
							+234
						</span>
						<input
							type="text"
							id="whatsappNumber"
							name="whatsappNumber"
							value={formData.whatsappNumber}
							onChange={handleChange}
							placeholder="Enter Number"
							className="w-full px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#D0D5DD] border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500 focus:outline-none"
							required
						/>
					</div>
				</div>

				{/* House Address */}
				<div className="mb-[18px]">
					<label
						className="block text-[12px] leading-[16px] text-[#69758C] font-semibold mb-2"
						htmlFor="houseAddress"
					>
						House Address
					</label>
					<input
						type="text"
						id="houseAddress"
						name="houseAddress"
						value={formData.houseAddress}
						onChange={handleChange}
						placeholder="Please enter property house address"
						className="w-full px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#D0D5DD] border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-300 focus:outline-none"
					/>
				</div>

				{/* Google Map Address */}
				<div className="mb-[18px]">
					<label
						className="block text-[12px] leading-[16px] text-[#69758C] font-semibold mb-2"
						htmlFor="googleMapAddress"
					>
						Google Map Address (Optional)
					</label>
					<input
						type="text"
						id="googleMapAddress"
						name="googleMapAddress"
						value={formData.googleMapAddress}
						onChange={handleChange}
						placeholder="Please enter google map address"
						className="w-full px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#D0D5DD] border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-300 focus:outline-none"
					/>
				</div>

				{/* Property Description */}
				<div className="mb-[18px]">
					<label
						className="block text-[12px] leading-[16px] text-[#69758C] font-semibold mb-2"
						htmlFor="propertyDescription"
					>
						Property Description (Optional)
					</label>
					<textarea
						id="propertyDescription"
						name="propertyDescription"
						value={formData.propertyDescription}
						onChange={handleChange}
						placeholder="Please enter property description, like property size and more."
						rows="4"
						className="w-full px-[16px] py-[10px] placeholder:text-[14px] placeholder:text-[#D0D5DD] border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-300 focus:outline-none"
					></textarea>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className=" bg-[#265205] text-[#FFFFFF] text-[16px] font-semibold px-6 py-4 rounded-lg hover:bg-green-900 transition duration-200"
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Submitting...' : 'Submit Request'}
				</button>
			</form>

			{/* Success/Error Messages */}

			{successMessage && (
				<p className="text-green-600 font-medium text-center">
					{successMessage}
				</p>
			)}
			{errorMessage && (
				<p className="text-red-600 font-medium text-center">{errorMessage}</p>
			)}
		</div>
	);
}
