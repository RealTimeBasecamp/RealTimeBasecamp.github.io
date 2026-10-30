/**
 * The count-up rings on the homepage (StatRings.astro). Figures are the
 * user's own; change them here only.
 */
import UnrealIcon from '../assets/logos/unreal-engine.svg';
import MentorCruiseIcon from '../assets/logos/mentorcruise.svg';

export interface Stat {
	value: number;
	/** Shown after the number, e.g. '+'. */
	suffix?: string;
	label: string;
	/** Logo shown inside the ring, above the number. */
	icon?: typeof UnrealIcon;
}

export const STATS: Stat[] = [
	{ value: 14, label: 'years of experience in Unreal Engine', icon: UnrealIcon },
	{ value: 10, suffix: '+', label: 'years of professional experience' },
	{ value: 30, suffix: '+', label: 'mentees on MentorCruise', icon: MentorCruiseIcon },
];
