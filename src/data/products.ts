/**
 * Products, newest first. Used by the homepage (ProductList.astro), the site
 * menu (nav.ts) and the product pages (pages/products/[slug].astro).
 */
import { CHEATSHEET_URL, EMSP_URL, emsp, product } from './links';

export interface ProductLink {
	label: string;
	href: string;
	external?: boolean;
}

export interface Product {
	eyebrow: string;
	title: string;
	text?: string;
	/** Quiet status line under the text, e.g. availability or downloads. */
	status?: string;
	links: ProductLink[];
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
		eyebrow: 'Unreal Engine 5 plugin',
		title: 'Editor Menu Shelf Pro',
		text: 'Build custom toolbar menus and workspaces in Unreal Engine 5 without needing any code, or automate it using the Python API.',
		status: 'Coming soon on Fab',
		links: [
			{ label: 'See the plugin', href: EMSP_URL },
			{ label: 'Read the docs', href: emsp('getting-started/why-editor-menu-shelf-pro/') },
		],
		page: EMSP_URL,
		live: true,
		pinned: true,
		menuText: 'Custom toolbar menus for UE5.',
	},
	{
		eyebrow: 'Free PDF',
		title: 'UE5 Blueprint Variables Cheatsheet (2025 Edition)',
		status: '500+ downloads',
		links: [{ label: 'Get it on Gumroad', href: CHEATSHEET_URL, external: true }],
		slug: 'ue5-blueprint-variables-cheatsheet',
		page: product('ue5-blueprint-variables-cheatsheet'),
		live: false,
		menuLabel: 'Blueprint Variables Cheatsheet',
		menuText: 'Free PDF.',
	},
];
