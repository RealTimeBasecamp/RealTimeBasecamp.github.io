/**
 * The homepage grid, in order. `size` sets the tile's footprint in
 * BentoGrid.astro: large is 2x2, small is 1x1, wide spans the full row.
 */
import menuLocations from '../assets/menu-locations.png';
import ArtStationIcon from '../assets/icons/artstation.svg';
import GitHubIcon from '../assets/icons/github.svg';
import MentorCruiseIcon from '../assets/logos/mentorcruise.svg';
import {
	ARTSTATION_URL,
	EMSP_URL,
	GITHUB_URL,
	MENTORCRUISE_BADGE_URL,
	MENTORCRUISE_URL,
	emsp,
} from './links';

export interface CardLink {
	label: string;
	href: string;
	primary?: boolean;
	external?: boolean;
}

export interface HomeCard {
	size: 'large' | 'small' | 'wide';
	eyebrow: string;
	title: string;
	text?: string;
	/** Small status pill beside the title. */
	tag?: string;
	icon?: typeof GitHubIcon;
	image?: { src: ImageMetadata; alt: string };
	/** Remote rating badge, cropped to its score in Card.astro. */
	badge?: { src: string; alt: string };
	links: CardLink[];
}

export const HOME_CARDS: HomeCard[] = [
	{
		size: 'large',
		eyebrow: 'Unreal Engine 5 plugin',
		title: 'Editor Menu Shelf Pro',
		tag: 'Coming soon to Fab',
		text: 'Build custom toolbar menus and workspaces in Unreal Engine 5 without needing any code, or automate it using the Python API.',
		image: {
			src: menuLocations,
			alt: 'The Unreal Engine 5 editor with custom menus in the main menu bar, the level editor toolbar, the viewport toolbar, the Sequencer toolbar and the Content Browser toolbar.',
		},
		links: [
			{ label: 'See the plugin', href: EMSP_URL, primary: true },
			{ label: 'Read the docs', href: emsp('getting-started/why-editor-menu-shelf-pro/') },
		],
	},
	{
		size: 'small',
		eyebrow: 'Portfolio',
		title: 'ArtStation',
		icon: ArtStationIcon,
		links: [{ label: 'View my portfolio', href: ARTSTATION_URL, external: true }],
	},
	{
		size: 'small',
		eyebrow: 'Mentoring',
		title: 'MentorCruise',
		icon: MentorCruiseIcon,
		badge: { src: MENTORCRUISE_BADGE_URL, alt: 'MentorCruise mentee rating' },
		links: [{ label: 'View my profile', href: MENTORCRUISE_URL, external: true }],
	},
	{
		size: 'wide',
		eyebrow: 'Code',
		title: 'GitHub',
		icon: GitHubIcon,
		links: [{ label: 'View my GitHub', href: GITHUB_URL, external: true }],
	},
];
