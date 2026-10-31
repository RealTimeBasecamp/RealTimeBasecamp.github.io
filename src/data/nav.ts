/**
 * Site navigation. Desktop (SiteNav.astro) shows each master page in the
 * masthead, with a hover panel for the ones that have more under them.
 * Small screens (PageMenu.astro) get a dropdown of the master pages only.
 * The Contact me button sits beside both.
 *
 * Set `live` when a page is finished and merged to main. Anything that
 * isn't live only shows in the dev server, so the public site never links
 * to a stub.
 *
 * `description` lines are placeholders until the user writes them.
 */
import {
	BLOG_URL,
	CONTACT_URL,
	MENTORCRUISE_URL,
	MENTORING_URL,
	PORTFOLIO_URL,
	PRODUCTS_URL,
} from './links';
import { PRODUCTS } from './products';

export interface NavLink {
	label: string;
	href: string;
	live: boolean;
	external?: boolean;
	/** One short line under the label in a hover panel. */
	description?: string;
}

export interface NavSection extends NavLink {
	/** Shown in the section's hover panel. */
	links?: NavLink[];
	/** Link along the bottom of the panel, e.g. "All products". */
	more?: NavLink;
	/** The section's own page shows, so its trigger links to it. Set in NAV_SECTIONS. */
	linked?: boolean;
}

/** Products listed by name before the panel adds "All products". */
const MENU_PRODUCT_LIMIT = 3;

const shows = (link: { live: boolean }) => link.live || import.meta.env.DEV;

const productsPage: NavLink = { label: 'Products', href: PRODUCTS_URL, live: false };
const mentoringPage: NavLink = { label: 'Mentoring', href: MENTORING_URL, live: false };
const portfolioPage: NavLink = { label: 'Portfolio', href: PORTFOLIO_URL, live: true };
const blogPage: NavLink = { label: 'Blog', href: BLOG_URL, live: false };
const contactPage: NavLink = { label: 'Contact me', href: CONTACT_URL, live: false };
const ALL_PAGES = [portfolioPage, productsPage, mentoringPage, blogPage, contactPage];

/**
 * Every product while there are few; past the limit, the pinned ones and
 * the newest of the rest (products.ts is newest first).
 */
function productLinks(): NavLink[] {
	const products = PRODUCTS.filter(shows);
	const listed = products.length <= MENU_PRODUCT_LIMIT
		? products
		: [...products.filter((p) => p.pinned), ...products.filter((p) => !p.pinned)].slice(0, MENU_PRODUCT_LIMIT);
	return listed.map(({ title, menuLabel, page, live, menuText }) => ({
		label: menuLabel ?? title,
		href: page,
		live,
		description: menuText,
	}));
}

const SECTIONS: NavSection[] = [
	portfolioPage,
	{
		...productsPage,
		links: productLinks(),
		more: PRODUCTS.filter(shows).length > MENU_PRODUCT_LIMIT ? { ...productsPage, label: 'All products' } : undefined,
	},
	{
		...mentoringPage,
		links: [
			{ ...mentoringPage, description: 'Unreal Engine, career and workflows.' },
			{ label: 'Book on MentorCruise', href: MENTORCRUISE_URL, live: true, external: true, description: 'Read my reviews.' },
		],
	},
	blogPage,
];

/**
 * Desktop sections. A section whose own page isn't live still shows when its
 * panel has live links; it just isn't a link itself.
 */
export const NAV_SECTIONS: NavSection[] = SECTIONS
	.map((section) => ({
		...section,
		linked: shows(section),
		links: section.links?.filter(shows),
		more: section.more && shows(section.more) ? section.more : undefined,
	}))
	.filter((section) => section.linked || (section.links?.length ?? 0) > 0);

/** Small-screen dropdown: the master pages only, Contact me last. */
export const MASTER_PAGES: NavLink[] = ALL_PAGES.filter(shows);

/** The Contact me button, or undefined while the page isn't live. */
export const CONTACT_LINK: NavLink | undefined = shows(contactPage) ? contactPage : undefined;

/** Name of the master page a path belongs to: '/' matches only the homepage. */
export const pageNameFor = (path: string) =>
	ALL_PAGES.find(({ href }) => (href === '/' ? path === '/' : path.startsWith(href)))?.label ?? 'Menu';
