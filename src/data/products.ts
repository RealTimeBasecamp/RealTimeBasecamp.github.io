/**
 * Products, newest first. Used by the homepage (ProductList.astro), the site
 * menu (nav.ts) and the product pages (pages/products/[slug].astro).
 */
import { CHEATSHEET_URL, EMSP_URL, product } from './links';
import cheatsheetThumbnail from '../assets/products/cheatsheet-thumbnail.png';
import cheatsheetBanner from '../assets/products/cheatsheet-banner.png';

export interface ProductLink {
	label: string;
	href: string;
	external?: boolean;
}

/** Product types. Shown as tags on each product; the products page will filter by them. */
export type ProductTag = 'Plugin' | 'PDF';

export interface ProductImage {
	src: ImageMetadata;
	alt: string;
	/** Keep as PNG: screenshots and graphics with text (lossy WebP softens text). Renders and photos leave it off. */
	png?: boolean;
}

export interface Product {
	title: string;
	text?: string;
	tags: ProductTag[];
	/**
	 * Card thumbnail, 1600x900 (16:9; anything else is cropped from the
	 * centre). Without one the card shows a plain grey box.
	 */
	image?: ProductImage;
	/** Wide banner at the top of the product's own page. */
	banner?: ProductImage;
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
		text: 'Build custom toolbar menus and workspaces in Unreal Engine 5.',
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
		image: {
			src: cheatsheetThumbnail,
			alt: 'The UE5 Blueprint Variables Cheatsheet printed as a booklet, open on the Booleans and Enums pages',
		},
		banner: {
			src: cheatsheetBanner,
			alt: 'UE5 Variables Cheat Sheet by Real Time Basecamp: the booklet behind the Unreal Engine logo',
			png: true,
		},
		cta: { label: 'Get it on Gumroad', href: CHEATSHEET_URL, external: true },
		slug: 'ue5-blueprint-variables-cheatsheet',
		page: product('ue5-blueprint-variables-cheatsheet'),
		live: false,
		menuLabel: 'Blueprint Variables Cheatsheet',
		menuText: 'Free PDF.',
	},
];
