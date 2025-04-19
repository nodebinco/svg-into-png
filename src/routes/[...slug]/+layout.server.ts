import { languages, type Language, type Translation } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

const DEFAULT_LANG: Language = 'en';

export const load: LayoutServerLoad = ({ params }) => {
	// Parse the slug parts
	const slugParts = params.slug?.split('/') || [];

	// Determine language from slug
	let lang: Language = DEFAULT_LANG;

	if (slugParts.length > 0) {
		// Check if first part is a language code
		if (languages[slugParts[0] as Language]) {
			lang = slugParts[0] as Language;
		}
	}

	// Get translation for the language
	const t: Translation = languages[lang];
	if (!t) {
		throw error(404, 'Language not found');
	}

	return {
		lang,
		t,
		slugParts
	};
};
