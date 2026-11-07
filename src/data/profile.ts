/**
 * Who the site is about, shown in the profile card at the top of the
 * homepage and the mentoring page (ProfileHero.astro). One job title for
 * the whole site; change it here only.
 */
import photo from '../assets/rob-fraser-square.png';

export const PROFILE = {
	name: 'Rob Fraser',
	jobTitle: 'UE5 Technical Artist | Pipeline Developer | Mentor @ MentorCruise',
	/** MentorCruise award, shown as a pill above the name. */
	badge: 'Top Mentor',
	photo,
};

/** Button labels used in the profile card. */
export const PROFILE_ACTIONS = {
	hire: 'Hire me',
	portfolio: 'View my portfolio',
	book: 'Book on MentorCruise',
};
