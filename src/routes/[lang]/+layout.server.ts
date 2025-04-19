import { languages, type Language, type Translation } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params }) => {
	const lang = params.lang as Language;

	if (!languages[lang]) {
		throw error(404, 'Language not found');
	}

	const t: Translation = languages[lang];

	return {
		lang,
		t
	};
};
