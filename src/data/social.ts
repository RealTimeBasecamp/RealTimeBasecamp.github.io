/**
 * Profile links shown as icons in the masthead and footer.
 */
import ArtStationIcon from '../assets/icons/artstation.svg';
import GitHubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import MentorCruiseIcon from '../assets/logos/mentorcruise.svg';
import { ARTSTATION_URL, GITHUB_URL, LINKEDIN_URL, MENTORCRUISE_URL } from './links';

export interface SocialLink {
	label: string;
	href: string;
	icon: typeof GitHubIcon;
}

export const SOCIAL_LINKS: SocialLink[] = [
	{ label: 'LinkedIn', href: LINKEDIN_URL, icon: LinkedInIcon },
	{ label: 'GitHub', href: GITHUB_URL, icon: GitHubIcon },
	{ label: 'ArtStation', href: ARTSTATION_URL, icon: ArtStationIcon },
	{ label: 'MentorCruise', href: MENTORCRUISE_URL, icon: MentorCruiseIcon },
];
