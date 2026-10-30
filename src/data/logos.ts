/**
 * Logo rows on the homepage (LogoGrid.astro): where the user has worked,
 * clients, and software. Names come from the user's portfolio PDF and their
 * own list.
 *
 * Logos are one-colour SVGs painted with currentColor, from Simple Icons
 * (CC0). Entries without `logo` render their name only: Simple Icons doesn't
 * carry them, so they need an official SVG from the company's brand or press
 * kit before one is added.
 */
import UnrealIcon from '../assets/logos/unreal-engine.svg';
import HoudiniIcon from '../assets/logos/houdini.svg';
import MayaIcon from '../assets/logos/maya.svg';
import PythonIcon from '../assets/logos/python.svg';
import JavaScriptIcon from '../assets/logos/javascript.svg';
import DjangoIcon from '../assets/logos/django.svg';
import PlayStationIcon from '../assets/logos/playstation.svg';
import VolkswagenIcon from '../assets/logos/volkswagen.svg';
import AppleIcon from '../assets/logos/apple.svg';
import MetaIcon from '../assets/logos/meta.svg';
import HboIcon from '../assets/logos/hbo.svg';

export interface LogoItem {
	name: string;
	logo?: typeof UnrealIcon;
	/** The logo spells the name, so the visible name is dropped (kept for screen readers). */
	wordmark?: boolean;
	/** One line under the name. */
	note?: string;
}

export const EXPERIENCE: LogoItem[] = [
	{ name: 'PlayStation', logo: PlayStationIcon },
	{
		name: 'UCL',
		note: "Teaching on the BPro Master's course at the Bartlett School of Architecture, UCL.",
	},
	{ name: 'Foster + Partners' },
	{ name: 'Framestore' },
];

export const CLIENTS: LogoItem[] = [
	{ name: 'Microsoft' },
	{ name: 'Apple', logo: AppleIcon },
	{ name: 'Amazon' },
	{ name: 'Meta', logo: MetaIcon },
	{ name: 'Volkswagen', logo: VolkswagenIcon },
	{ name: 'JP Morgan' },
	{ name: 'NEOM' },
	{ name: 'HBO', logo: HboIcon, wordmark: true },
	{ name: 'Magic Leap' },
	{ name: 'Royal Navy' },
];

export const SOFTWARE: LogoItem[] = [
	{ name: 'Unreal Engine', logo: UnrealIcon },
	{ name: 'Houdini', logo: HoudiniIcon },
	{ name: 'Maya', logo: MayaIcon },
	{ name: 'Substance Painter' },
	{ name: 'Substance Designer' },
	{ name: 'ZBrush' },
	{ name: 'Python', logo: PythonIcon },
	{ name: 'JavaScript', logo: JavaScriptIcon },
	{ name: 'Django', logo: DjangoIcon },
];
