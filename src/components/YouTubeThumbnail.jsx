import React from 'react';

const YouTubeThumbnail = ({ videoId, height = '400px' }) => {
	const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

	return (
		<div
			className="relative block cursor-pointer"
			style={{ height }}
		>
			<iframe
				src={embedUrl}
				title="YouTube video player"
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
				className="w-full h-full rounded-2xl"
			></iframe>
		</div>
	);
};

export default YouTubeThumbnail;
