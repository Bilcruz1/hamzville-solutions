import React from 'react';
import youtubethumbnail from '../assets/icons/youtube-thumbnail.png';

// YouTubeThumbnail Component
const YouTubeThumbnail = ({ videoId, width = '300px', height = '438px' }) => {
	const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // High Quality Thumbnail
	const videoUrl = `https://www.youtube.com/watch?v=${videoId}`; // YouTube video URL

	const styles = {
		container: {
			position: 'relative',
			width: width,
			height: height,
			cursor: 'pointer',
			textDecoration: 'none', // Remove underline from the link
		},
		image: {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		playButton: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			fontSize: '50px',
			color: 'white',
			opacity: 0.8,
		},
	};

	return (
		<a
			href={videoUrl}
			target="_blank"
			rel="noopener noreferrer"
			style={styles.container}
		>
			<img
				src={thumbnailUrl}
				alt="YouTube Thumbnail"
				style={styles.image}
				className="w-full h-full object-cover rounded-2xl"
			/>
			<div
				style={styles.playButton}
				className="h-20 w-20"
			>
				<img
					src={youtubethumbnail}
					alt=""
				/>
			</div>
		</a>
	);
};

export default YouTubeThumbnail;
