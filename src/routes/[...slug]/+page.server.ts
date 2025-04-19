import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Format, ConversionInfo } from '$lib/i18n';

const defaultFormat: Format = 'png'; // Default to PNG
const formatMappings: Record<string, Format> = {
	'svg-to-png': 'png',
	'svg-to-jpg': 'jpg',
	'svg-to-pdf': 'pdf',
	'compress-svg': 'compress',
	'svg-viewer': 'view'
};

export const load: PageServerLoad = async ({ parent }) => {
	const { lang, t, slugParts } = await parent(); // Retrieve lang and t from layout

	// Determine format from URL
	let initialFormat: Format = defaultFormat;

	// Check if we have a conversion format in the slug
	// If the first part is a language code, look at the second part
	// Otherwise look at the first part
	let formatSlug = '';

	if (slugParts.length > 0) {
		if (slugParts[0] === lang && slugParts.length > 1) {
			// If first part is language, check second part for format
			formatSlug = slugParts[1];
		} else {
			// Otherwise, first part might be the format
			formatSlug = slugParts[0];
		}
	}

	// Get format from mapping if valid
	if (formatSlug && formatMappings[formatSlug]) {
		initialFormat = formatMappings[formatSlug];
	}

	// Get conversion info for the format
	const initialConversionInfo: ConversionInfo | undefined = t.conversions?.[initialFormat];

	if (!initialConversionInfo) {
		// This case might happen if i18n data is inconsistent for the format
		throw error(500, `Conversion format '${initialFormat}' not found for language '${lang}'.`);
	}

	return {
		// lang and t are inherited from layout
		initialFormat,
		initialConversionInfo
	};
};
