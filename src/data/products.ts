/**
 * Products, newest first. Used by the homepage (ProductList.astro), the site
 * menu (nav.ts) and the product pages (pages/products/[slug].astro).
 */
import { CHEATSHEET_URL, EMSP_URL, product } from './links';

export interface ProductLink {
	label: string;
	href: string;
	external?: boolean;
}

/** Product types. Shown as tags on each product; the products page will filter by them. */
export type ProductTag = 'Plugin' | 'PDF';

export interface Product {
	title: string;
	text?: string;
	tags: ProductTag[];
	/** The one call to action. */
	cta: ProductLink;
	/** Gives the product a page at /products/<slug>/. Omit when it has its own site. */
	slug?: string;
	/** The product's page: product(slug), or its own site. */
	page: string;
	/** The page is finished. Unfinished ones only show in the dev server. */
	live: boolean;
	/** Always listed in the site menu, however many products there are. */
	pinned?: boolean;
	/** Name in the site menu, where it must fit on one line. Defaults to `title`. */
	menuLabel?: string;
	/** One short line under the name in the site menu. Placeholder until the user writes it. */
	menuText: string;
}

export const PRODUCTS: Product[] = [
	{
		title: 'Editor Menu Shelf Pro',
		text: 'Build custom toolbar menus and workspaces in Unreal Engine 5 without needing any code, or automate it using the Python API.',
		tags: ['Plugin'],
		cta: { label: 'See the plugin', href: EMSP_URL },
		page: EMSP_URL,
		live: true,
		pinned: true,
		menuText: 'Custom toolbar menus for UE5.',
	},
	{
		title: 'UE5 Blueprint Variables Cheatsheet (2025 Edition)',
		tags: ['PDF'],
		cta: { label: 'Get it on Gumroad', href: CHEATSHEET_URL, external: true },
		slug: 'ue5-blueprint-variables-cheatsheet',
		page: product('ue5-blueprint-variables-cheatsheet'),
		live: false,
		menuLabel: 'Blueprint Variables Cheatsheet',
		menuText: 'Free PDF.',
	},
];
