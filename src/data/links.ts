/**
 * Every outbound URL the site uses, in one place.
 */

/** This site's master pages. */
export const PORTFOLIO_URL = '/';
export const PRODUCTS_URL = '/products/';
export const MENTORING_URL = '/mentoring/';
export const BLOG_URL = '/blog/';
export const CONTACT_URL = '/contact/';
/** Product slug -> its page, e.g. product('ue5-blueprint-variables-cheatsheet'). */
export const product = (slug: string) => `${PRODUCTS_URL}${slug}/`;

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
export const CHEATSHEET_URL = 'https://realtimebasecamp.gumroad.com/l/ue5variablescheatsheetpdfdownload2025';
export const NEWSLETTER_EMBED_URL = 'https://embeds.beehiiv.com/d4c287ec-1d3d-4359-a8b1-7513f23a624a?slim=true';

/** YouTube video ID of the showreel ("Rob Fraser UE5 Generalist Showreel 2026"). */
export const SHOWREEL_ID = 'Gpq8IIuzLFc';

/**
 * Public contact address as a mailto: link. Empty until a spam-safe
 * forwarding address exists; the masthead hides the email icon while empty.
 */
export const EMAIL_URL = '';
