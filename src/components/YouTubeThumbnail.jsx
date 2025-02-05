import React from 'react';

const YouTubeThumbnail = ({ videoId }) => {
	const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

	return (
		<div className="relative w-full lg:h-[80vh] h-[50vh] overflow-hidden rounded-2xl">
			<iframe
				src={embedUrl}
				title="YouTube video player"
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
				className="absolute top-1/2 left-1/2 w-[177.78vh] h-[80vh] transform rounded-2xl -translate-x-1/2 -translate-y-1/2"
			></iframe>
		</div>
	);
};

export default YouTubeThumbnail;
