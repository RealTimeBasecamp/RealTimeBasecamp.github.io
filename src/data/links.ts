/**
 * Every outbound URL the site uses, in one place.
 */

/**
 * The plugin docs, a separate GitHub Pages project site served under this
 * one. Root-relative so it follows a custom domain if one is added.
 */
export const EMSP_URL = '/ue5-editor-menu-shelf-pro/';
/** Path inside the plugin docs -> href, e.g. emsp('getting-started/'). */
export const emsp = (path: string) => EMSP_URL + path.replace(/^\//, '');

export const GITHUB_URL = 'https://github.com/RealTimeBasecamp';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/robertallanfraser/';
export const ARTSTATION_URL = 'https://www.artstation.com/robertallanfraser';
export const MENTORCRUISE_URL = 'https://mentorcruise.com/mentor/robertfraser/';
/** MentorCruise's live rating badge, so the score updates on its own. */
export const MENTORCRUISE_BADGE_URL = 'https://mentorcruise.com/mentor/robertfraser/widget/';
export const NEWSLETTER_EMBED_URL = 'https://embeds.beehiiv.com/d4c287ec-1d3d-4359-a8b1-7513f23a624a?slim=true';
