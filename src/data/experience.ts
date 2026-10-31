/**
 * Career timeline on the homepage (Timeline.astro), newest first, ending
 * with the degree. Names, roles and dates are copied from the user's CV
 * (Rob_Fraser_Senior_Generalist_Artist_2026_CV.pdf); only the typo
 * "envrionment" is fixed, and role titles are in title case. Milk Visual Effects and Royal Navy come from the
 * user's message (October 2026), with "optimsed" and "Good omens" fixed.
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
	/**
	 * Projects and achievements in the user's words, grouped under optional
	 * headings. Not rendered yet: waiting on the expandable timeline panel
	 * (Feat-07 LATER).
	 */
	details?: { heading?: string; items: string[] }[];
}

export const EXPERIENCE: Role[] = [
	{ company: 'Cosmic Stag Games', role: 'Senior UE5 Generalist', dates: '2024 - 2025' },
	{ company: 'MentorCruise', role: 'Technical Mentor', dates: '2023 - Present', logo: MentorCruiseIcon },
	{
		company: 'University College London',
		role: 'Lecturer (MArch, MLA, BPro - Post Graduate Courses)',
		dates: '2023 - 2024',
	},
	{
		company: 'PlayStation London Studio',
		role: 'Tools Pipeline Programmer (AAA NDA Game)',
		dates: '2022 - 2023',
		logo: PlayStationIcon,
	},
	{ company: 'Foster + Partners', role: 'Tools Pipeline Programmer / VR Technical Artist', dates: '2021 - 2022' },
	{ company: 'Framestore', role: 'VR Technical Artist | 3D Environment Artist', dates: '2018 - 2021' },
	{
		company: 'Milk Visual Effects',
		role: 'VR Artist',
		dates: '2017 - 2018',
		details: [
			{
				heading: 'Projects',
				items: [
					'\'Good Omens\' Amazon Prime TV series (May 2019)',
					'Glimpse Interactive VR Film by Mr. Kite (2020 Release date TBA)',
					'Internal VR R&D',
				],
			},
		],
	},
	{
		company: 'Royal Navy',
		role: 'VR Environment Artist & Designer',
		dates: '2016 - 2017',
		details: [
			{
				heading: 'VR 3D Environment Artist',
				items: [
					'Developed a modular environment kit optimised to run smoothly in VR',
					'Replicated the real DRIU simulator used within HMS Portsmouth Navy base within VR by modelling the environment at 1:1 scale',
					'Textured the modular kit using physically based textures within Substance Painter 2, rendered in Unity 5',
					'Setup and finalised the environmental FX and compositing the post processing throughout the scene, matching the lighting to the real simulator',
				],
			},
			{
				heading: 'Designer',
				items: [
					'Produced thorough design documentation for the development team and for use within the Royal Navy',
					'Translated the client brief into workable design mechanics and features',
				],
			},
		],
	},
	/* The degree closes the timeline rather than getting its own section. */
	{
		company: 'University of Portsmouth',
		role: '1st Class BSc (Hons) Computer Games Technology',
		dates: '2014 - 2017',
	},
];
