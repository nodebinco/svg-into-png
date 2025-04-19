import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFile } from 'fs/promises';

async function generateSitemapLinks() {
	const links = [{ url: '/', changefreq: 'daily', priority: 0.3 }];

	const languages = [
		'en',
		'ar',
		'be',
		'bg',
		'cs',
		'da',
		'de',
		'el',
		'es',
		'fi',
		'fr',
		'he',
		'hi',
		'hr',
		'hu',
		'id',
		'it',
		'ja',
		'ko',
		'lt',
		'nl',
		'pl',
		'pt',
		'ro',
		'ru',
		'sk',
		'sv',
		'th',
		'tr',
		'uk',
		'vi',
		'zh'
	];

	const pages = ['svg-to-png', 'svg-to-jpg', 'svg-to-pdf', 'compress-svg', 'svg-viewer'];

	for (const lang of languages) {
		for (const page of pages) {
			let url = lang != 'en' ? `/${lang}` : '';
			url += page;

			links.push({
				url,
				changefreq: 'weekly',
				priority: 0.8
			});
		}
	}

	return links;
}
const stream = new SitemapStream({ hostname: 'https://svgintopng.com' });

const links = await generateSitemapLinks();

const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
	data.toString()
);

await writeFile('build/client/sitemap.xml', sitemap);
