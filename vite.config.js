// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		host: '0.0.0.0', // Allow connections from any device
// 		port: 5173, // Use the same port
// 		strictPort: true, // Ensure the port doesn’t change
// 		open: true, // Automatically open in browser on desktop (optional)
// 	},
// });
export default {
	server: {
		port: 5173, // Default port
		strictPort: false, // Allows Vite to use the next available port if 5173 is taken
	},
};
