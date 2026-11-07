/**
 * The infographic rows (Stats.astro): one set for the homepage, one for the
 * mentoring page, so the two pages don't repeat each other. Figures are the
 * user's own; change them here only.
 */
import UnrealIcon from '../assets/logos/unreal-engine.svg';

export interface Stat {
	value: number;
	/** Shown after the number, e.g. '+'. */
	suffix?: string;
	label: string;
	/**
	 * How the figure is drawn, so no two in a row look alike:
	 *   fill   the icon itself fills with colour from bottom to top
	 *   bars   one rising bar per unit (years), like a staircase
	 *   dots   one dot per unit (people), lighting up in turn
	 *   stars  five stars filling left to right, to `rating` out of 5
	 *   clock  a clock whose hand sweeps round (time-based figures)
	 */
	kind: 'fill' | 'bars' | 'dots' | 'stars' | 'clock';
	/** Words shown instead of a counting number, e.g. 'A few hours'. */
	text?: string;
	/** The artwork for `fill`. */
	icon?: typeof UnrealIcon;
	/** For `stars`: how full the row is, out of 5 (default 5). */
	rating?: number;
}

export const HOME_STATS: Stat[] = [
	{ value: 14, label: 'years of experience in Unreal Engine', kind: 'fill', icon: UnrealIcon },
	{ value: 10, suffix: '+', label: 'years of professional experience', kind: 'bars' },
	{ value: 15, label: 'five-star reviews on MentorCruise', kind: 'stars' },
];

export const MENTORING_STATS: Stat[] = [
	{ value: 30, suffix: '+', label: 'mentees on MentorCruise', kind: 'dots' },
	{ value: 4.9, label: 'average rating on MentorCruise', kind: 'stars', rating: 4.9 },
	{ value: 0, text: 'A few hours', label: 'usual response time on MentorCruise', kind: 'clock' },
];
