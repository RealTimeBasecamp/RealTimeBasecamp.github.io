/**
 * MentorCruise reviews for the homepage carousel, all 5 stars. Quotes are
 * word for word from the user's review list (October 2026). Long ones are
 * cut down by dropping whole sentences only, never rewording (Dylan
 * Messmer, Uli Q). Fabricio Miriuk's is the user's shorter version from
 * their portfolio PDF (page 2). Roles come from that PDF where known,
 * otherwise "Mentee". The full reviews are on the MentorCruise profile,
 * which every reviewer's name links to.
 */
export interface Testimonial {
	quote: string;
	name: string;
	role: string;
	/** Stars out of 5 given on MentorCruise. */
	rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		quote: 'I had the chance to meet Robert and have a one-hour chat to discuss various aspects of career change and approaches to the game development world. He\'s extremely knowledgeable but also approachable, fun, and open. The suggestions he gave me during that call were extremely insightful and had a serious impact on the plans I pursued afterward. Highly recommended.',
		name: 'Alessio Baldessarro',
		role: 'Mentee',
		rating: 5,
	},
	{
		quote: 'Robert’s mentorship was a game-changer for my growth in 3D environment design. He has deep technical expertise in Unreal Engine and an exceptional teaching approach. His tailored guidance made complex concepts easy to grasp, and his constructive feedback improved my modelling, lighting, and scene composition. Robert also shared valuable industry insights, helping me with portfolio building and career strategy. He’s more than just a teacher, his dedication and availability made a huge difference in my learning. Highly recommend!',
		name: 'Fabricio Miriuk',
		role: '3D Artist',
		rating: 5,
	},
	{
		quote: 'Incredible mentor! Very intelligent, professional, and willing to help where needed. Through his guidance, I feel as though I’ve learned 4x-5x faster than I would have on my own. We’ve reviewed important foundational concepts and have had discussions about goals that have helped maintain a vector of progress. Totally recommend Robert.',
		name: 'Hasan Khan',
		role: 'Student',
		rating: 5,
	},
	{
		quote: 'Super packed hour of going through my existing work, receiving feedback on code improvements, tips for publishing to online marketplaces, and more general discussions around future careers, interviews and showreel advice. Very friendly but also professional and critical allowing me to get a tremendous amount out of the session.',
		name: 'Jonah Ling',
		role: 'Mixed Reality Developer',
		rating: 5,
	},
	{
		quote: 'Mentorship with Robert was a great experience to gain insight into how the proper industry workflow looks like. He helped me to breakthrough my anxiety associated with learning unreal after bashing my head against it for a month. We were able to slow down, break things down, I gained a much better understanding of the proper workflow and what it takes to get a game from an idea to the end product.',
		name: 'Arturs Binklers',
		role: 'Post grad student',
		rating: 5,
	},
	{
		quote: 'I started out with absolutely no clue in mind what I wanted to do, just a static idea with many moving parts. Robert was fantastic, he was very patient and took his time to figure out what exactly I wanted to do and establish goals I was trying to achieve and created a work plan to execute these goals. I definitely see myself purchasing his knowledge and services in the future!',
		name: 'Dylan Messmer',
		role: 'Mentee',
		rating: 5,
	},
	{
		quote: 'I was looking to get some expertise on how to develop an idea I had for a game. Rob was very well structured and effective, helping me to clarify my thoughts, provide suggestions, and also open to dialogue. Overall it was a great experience, and I highly recommend him for anyone looking to develop their skills in Unreal, Blueprints, and their overall game ideas in general. Thank you Rob for your help and guidance!',
		name: 'Hadin Charbel',
		role: 'Mentee',
		rating: 5,
	},
	{
		quote: 'Robert is an excellent mentor! Kicking off the mentorship with a very detailed welcome package and building a mission map to analyze my goals in our very first call helped fast track my growth tremendously. He is very meticulous in his work, was always more than prepared for any meeting and was able to help me with any questions I had along the way. 10/10! Thank you, Rob!',
		name: 'Uli Q',
		role: 'Mentee',
		rating: 5,
	},
];
