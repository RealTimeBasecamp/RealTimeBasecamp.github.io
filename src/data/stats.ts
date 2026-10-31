/**
 * The homepage infographics (Stats.astro). Figures are the user's own; change
 * them here only.
 */
import UnrealIcon from '../assets/logos/unreal-engine.svg';
import MentorCruiseIcon from '../assets/logos/mentorcruise.svg';

export interface Stat {
	value: number;
	/** Shown after the number, e.g. '+'. */
	suffix?: string;
	label: string;
	/**
	 * How the figure is drawn, so no two look alike:
	 *   fill  the icon itself fills with colour from bottom to top
	 *   bars  one rising bar per unit (years), like a staircase
	 *   dots  one dot per unit (people), lighting up in turn
	 */
	kind: 'fill' | 'bars' | 'dots';
	/** Logo shown with the number; for `fill` it is the artwork itself. */
	icon?: typeof UnrealIcon;
}

export const STATS: Stat[] = [
	{ value: 14, label: 'years of experience in Unreal Engine', kind: 'fill', icon: UnrealIcon },
	{ value: 10, suffix: '+', label: 'years of professional experience', kind: 'bars' },
	{ value: 30, suffix: '+', label: 'mentees on MentorCruise', kind: 'dots', icon: MentorCruiseIcon },
];
