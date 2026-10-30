/**
 * MentorCruise reviews for the homepage carousel. Copied word for word from
 * the user's portfolio PDF (Rob_Fraser_portfolio_2026.pdf, page 2), except
 * that two em dashes became commas (site rule: no em dashes).
 */
export interface Testimonial {
	quote: string;
	name: string;
	role: string;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		quote: 'Incredible mentor! Robert’s guidance helped me learn 4–5x faster than I would have on my own. He clarified foundational concepts, helped me set clear goals, and kept me on track. Totally recommend him.',
		name: 'Hasan Khan',
		role: 'Student',
	},
	{
		quote: 'Robert helped me break through my anxiety with Unreal after struggling for a month. His structured approach clarified the workflow and made the game development process much clearer.',
		name: 'Arturs Binklers',
		role: 'Post grad student',
	},
	{
		quote: 'Robert’s mentorship was a game-changer for my growth in 3D environment design. He has deep technical expertise in Unreal Engine and an exceptional teaching approach. His tailored guidance made complex concepts easy to grasp, and his constructive feedback improved my modelling, lighting, and scene composition. Robert also shared valuable industry insights, helping me with portfolio building and career strategy. He’s more than just a teacher, his dedication and availability made a huge difference in my learning. Highly recommend!',
		name: 'Fabricio Miriuk',
		role: '3D Artist',
	},
	{
		quote: 'A packed hour of valuable feedback on code improvements, publishing tips, career advice, and showreel strategy. Robert was friendly, professional, and critical, I got a tremendous amount out of the session.',
		name: 'Jonah Ling',
		role: 'Mixed Reality Developer',
	},
];
