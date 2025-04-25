/**
 * Next.js Configuration
 *
 * This configuration file sets up Progressive Web App (PWA) capabilities
 * while avoiding type compatibility issues between different Next.js versions.
 */

import type { NextConfig } from "next";

// Import the PWA initialization function
const withPWAInit = require("next-pwa");

// PWA configuration
const pwaConfig = {
	dest: "public",
	disable: process.env.NODE_ENV === "development",
	register: true,
	skipWaiting: true,
	runtimeCaching: [
		// Configure caching for API routes
		{
			urlPattern: /^https:\/\/api-game\.bloque\.app\/game\/.*/i,
			handler: "NetworkFirst",
			options: {
				cacheName: "galactic-api-cache",
				expiration: {
					maxEntries: 20,
					maxAgeSeconds: 60 * 60,
				},
				cacheableResponse: {
					statuses: [0, 200],
				},
				networkTimeoutSeconds: 5,
			},
		},
	],
};

// Initialize the PWA wrapper function
const withPWA = withPWAInit(pwaConfig);

// Base Next.js configuration
const nextConfig: NextConfig = {
	reactStrictMode: true,
};

// Use CommonJS module.exports to avoid TypeScript issues with the default export
// This bypasses the type checking that's causing conflicts between Next.js versions
module.exports = withPWA(nextConfig);
