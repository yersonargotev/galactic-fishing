import type { LeaderboardResponse, MarketResponse } from "@/types";

const API_BASE_URL = "https://api-game.bloque.app/game";

export async function fetchLeaderboard(): Promise<LeaderboardResponse> {
	try {
		// Add cache-busting parameter to ensure freshness when online
		const url = `${API_BASE_URL}/leaderboard?t=${new Date().getTime()}`;
		const response = await fetch(url, {
			// Revalidate frequently when online, rely on PWA cache when offline
			next: { revalidate: 30 }, // Revalidate every 30 seconds
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data: LeaderboardResponse = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch leaderboard:", error);
		// Return empty state on error to prevent crashing server component
		return { players: [] };
	}
}

export async function fetchMarket(): Promise<MarketResponse> {
	try {
		// Add cache-busting parameter
		const url = `${API_BASE_URL}/market?t=${new Date().getTime()}`;
		const response = await fetch(url, {
			next: { revalidate: 60 }, // Revalidate every 60 seconds (market might change less often)
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data: MarketResponse = await response.json();
		return data;
	} catch (error) {
		console.error("Failed to fetch market:", error);
		// Return empty state on error
		return { items: [] };
	}
}
