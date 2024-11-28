import React from 'react';

const YouTubeThumbnail = ({ videoId }) => {
	const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

	return (
		<div className="relative cursor-pointer w-full aspect-w-16 aspect-h-9">
			<iframe
				src={embedUrl}
				title="YouTube video player"
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
				className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
			></iframe>
		</div>
	);
};

export default YouTubeThumbnail;
