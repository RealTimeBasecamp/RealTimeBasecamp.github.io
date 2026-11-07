/**
 * Mentoring page words, from the user's MentorCruise bio (pasted
 * 2026-10-31). Word for word except: the decorative emojis are dropped, the
 * headings are in the site's sentence case, list items are split into a
 * title and text instead of joined by a dash, and "Master's student" is
 * "Master's students".
 */
/**
 * Core skills pills in the mentoring page's profile card: a short pick from
 * the MentorCruise tags, plus "Career coaching" (from "Portfolio & Career
 * Coaching" below) in place of "Showreel Review".
 */
export const MENTOR_SKILLS = ['Blueprints', 'Game development', '3D Art', 'Career coaching'];

export const MENTORING_INTRO =
	'I’d love to help you develop your own game, Unreal project, or 3D skills, whether you\'re just starting out or refining your existing knowledge. Over the years, I’ve mentored creatives who have gone on to secure jobs in the industry, launch their own games, and level up their careers.';

export const WHY_ME = {
	title: 'Why learn from me?',
	/** Scannable summary beside the text; every fact is from the paragraphs below. */
	highlights: [
		{ figure: '10+ years', text: 'mastering Unreal Engine and game development' },
		{ figure: 'First-class', text: 'BSc (Hons) Computer Games Technology' },
		{ figure: 'UCL', text: 'Lecturer, teaching Master\'s students Unreal Engine (2023)' },
		{ figure: 'Ex PlayStation', text: 'plus Framestore and Foster + Partners' },
	],
	paragraphs: [
		'I\'ve spent over a decade mastering Unreal Engine and game development, working across the games, visual effects, and architecture industries at companies like PlayStation, Framestore, and Foster + Partners. I hold a first-class BSc (HONS) degree in Computer Games Technology from one of the UK’s top-ranked games universities. In 2023, I lectured at University College London, teaching Master\'s students Unreal Engine across several courses.',
		'I’ve also worked with industry leaders like Meta, Microsoft, Apple, BBC, Warner Brothers, Volkswagen, and Amazon. With a strong background in development, technical art and 3D modelling, I know exactly what studios look for and how to make your portfolio stand out.',
	],
};

export const APPROACH = {
	title: 'My teaching approach',
	/** The order the paragraph describes, drawn as a staircase beside it. */
	steps: ['Core fundamentals', 'Strong foundation', 'Advanced techniques'],
	paragraphs: [
		'I focus on core fundamentals first, building a strong foundation before diving into advanced techniques. My goal is to simplify complex concepts, no overwhelming jargon, just clear, actionable guidance. Whether you need help with technical workflows, industry techniques, or job applications, I tailor the mentorship to your specific goals.',
	],
};

export const EXPECT = {
	title: 'What you can expect',
	items: [
		{ title: 'Game & Unreal Development', text: 'Best practices for building solid, portfolio-ready projects.' },
		{ title: 'Portfolio & Career Coaching', text: 'Hands-on guidance to refine your portfolio, showreel, and CV to make you ready to enter the industry.' },
		{ title: 'Industry-Standard Workflows', text: 'How professionals approach technical art, optimisation, and planning.' },
		{ title: 'Interview Prep & Career Growth', text: 'Mock interviews, strategies, and real-world insights.' },
	],
};
