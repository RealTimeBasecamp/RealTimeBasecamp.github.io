/**
 * Career and education timelines on the homepage (Timeline.astro), newest
 * first. Names, roles and dates are copied from the user's CV
 * (Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf); only the typo
 * "envrionment" is fixed.
 *
 * Entries without `logo` show their name only until an official one-colour
 * SVG is added to src/assets/logos/.
 */
import PlayStationIcon from '../assets/logos/playstation.svg';
import MentorCruiseIcon from '../assets/logos/mentorcruise.svg';

export interface Role {
	company: string;
	role: string;
	/** As written on the CV, e.g. '2022 - 2023' or '2023 - Present'. */
	dates: string;
	logo?: typeof PlayStationIcon;
}

export const EXPERIENCE: Role[] = [
	{ company: 'Cosmic Stag Games', role: 'Senior UE5 Generalist', dates: '2024 - 2025' },
	{ company: 'MentorCruise', role: 'Technical Mentor', dates: '2023 - Present', logo: MentorCruiseIcon },
	{
		company: 'University College London',
		role: 'Lecturer (MArch, MLA, BPro - post graduate courses)',
		dates: '2023 - 2024',
	},
	{
		company: 'PlayStation London Studio',
		role: 'Tools Pipeline Programmer (AAA NDA Game)',
		dates: '2022 - 2023',
		logo: PlayStationIcon,
	},
	{ company: 'Foster + Partners', role: 'Tools Pipeline Programmer / VR Technical Artist', dates: '2021 - 2022' },
	{ company: 'Framestore', role: 'VR Technical Artist | 3D environment artist', dates: '2018 - 2021' },
];

export const EDUCATION: Role[] = [
	{ company: 'Code Institute', role: '16 Week Full-Stack web developer bootcamp', dates: '2025 - 2026' },
	{
		company: 'University of Portsmouth',
		role: '1st Class BSc (Hons) Computer Games Technology',
		dates: '2014 - 2017',
	},
];
