import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Format, ConversionInfo } from '$lib/i18n';

const defaultFormat: Format = 'png'; // Default to PNG

export const load: PageServerLoad = async ({ parent }) => {
	const { lang, t } = await parent(); // Retrieve lang and t from layout

	// Determine initial conversion info based on default format
	const initialFormat = defaultFormat;
	const initialConversionInfo: ConversionInfo | undefined = t.conversions?.[initialFormat];

	if (!initialConversionInfo) {
		// This case might happen if i18n data is inconsistent for the default format
		throw error(
			500,
			`Default conversion format '${initialFormat}' not found for language '${lang}'.`
		);
	}

	return {
		// lang and t are inherited from layout
		initialFormat,
		initialConversionInfo
	};
};
