/**
 * Where mentees are, for the map on the mentoring page (MenteeMap.astro).
 * From the user's rough list (2026-10-30); they will replace it with a full
 * one. Country-level entries use the capital or main city as the marker.
 */
export interface MenteeLocation {
	place: string;
	lat: number;
	lon: number;
	count: number;
}

export const MENTEE_LOCATIONS: MenteeLocation[] = [
	{ place: 'United Kingdom', lat: 51.51, lon: -0.13, count: 10 },
	{ place: 'Los Angeles, USA', lat: 34.05, lon: -118.24, count: 2 },
	{ place: 'Malaysia', lat: 3.14, lon: 101.69, count: 2 },
	{ place: 'Italy', lat: 41.9, lon: 12.5, count: 2 },
	{ place: 'Brazil', lat: -23.55, lon: -46.63, count: 2 },
	{ place: 'New York City, USA', lat: 40.71, lon: -74.01, count: 1 },
	{ place: 'San Francisco, USA', lat: 37.77, lon: -122.42, count: 1 },
	{ place: 'Minnesota, USA', lat: 44.98, lon: -93.27, count: 1 },
	{ place: 'Oman', lat: 23.59, lon: 58.41, count: 1 },
	{ place: 'Dubai, UAE', lat: 25.2, lon: 55.27, count: 1 },
	{ place: 'Perth, Australia', lat: -31.95, lon: 115.86, count: 1 },
	{ place: 'Germany', lat: 52.52, lon: 13.4, count: 1 },
	{ place: 'Japan', lat: 35.68, lon: 139.69, count: 1 },
];
