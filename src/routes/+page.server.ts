import {
	languages,
	type Language,
	type Format,
	type Translation,
	type ConversionInfo
} from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const defaultLang: Language = 'en';
const defaultFormat: Format = 'png'; // Default to PNG

export const load: PageServerLoad = async () => {
	const lang = defaultLang;
	const t: Translation | undefined = languages[lang];

	if (!t) {
		// Should not happen if defaultLang exists in languages
		throw error(500, `Default language '${lang}' not found in translations.`);
	}

	const format = defaultFormat;
	const conversionInfo: ConversionInfo | undefined = t.conversions?.[format];

	if (!conversionInfo) {
		// Should not happen if defaultFormat exists for the defaultLang
		throw error(500, `Default conversion format '${format}' not found for language '${lang}'.`);
	}

	return {
		lang,
		t,
		format,
		conversionInfo
	};
};
