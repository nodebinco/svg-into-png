import sharp from 'sharp';
import { json } from '@sveltejs/kit';
import puppeteer from 'puppeteer';
import { optimize } from 'svgo';

export async function POST({ request }) {
	try {
		const formData = await request.formData();
		const file = formData.get('file') as File;
		const format = formData.get('format') as string;

		if (!file) {
			return json({ error: 'No file provided' }, { status: 400 });
		}

		const buffer = await file.arrayBuffer();
		const svgContent = Buffer.from(buffer).toString('utf8');
		let outputBuffer: Buffer;
		let contentType: string;
		let outputFilename = file.name.replace('.svg', `.${format}`);

		switch (format) {
			case 'png':
				outputBuffer = await sharp(Buffer.from(svgContent)).png().toBuffer();
				contentType = 'image/png';
				break;
			case 'jpg':
				outputBuffer = await sharp(Buffer.from(svgContent)).jpeg().toBuffer();
				contentType = 'image/jpeg';
				break;
			case 'pdf':
				try {
					const browser = await puppeteer.launch({ headless: true });
					const page = await browser.newPage();
					await page.setContent(`<html><body>${svgContent}</body></html>`, {
						waitUntil: 'networkidle0'
					});
					const pdfUint8Array = await page.pdf({ format: 'A4', printBackground: true });
					outputBuffer = Buffer.from(pdfUint8Array);
					await browser.close();
					contentType = 'application/pdf';
				} catch (pdfError) {
					console.error('PDF generation error:', pdfError);
					return json({ error: 'Failed to convert SVG to PDF' }, { status: 500 });
				}
				break;
			case 'compress':
				try {
					const result = optimize(svgContent, {
						// SVGO options
						plugins: [
							{
								name: 'preset-default',
								params: {
									overrides: {
										// customize default plugin options
										removeViewBox: false
									}
								}
							}
						]
					});
					outputBuffer = Buffer.from(result.data, 'utf8');
					contentType = 'image/svg+xml';
					outputFilename = file.name.replace('.svg', '.compressed.svg'); // Indicate compression
				} catch (compressError) {
					console.error('SVG compression error:', compressError);
					return json({ error: 'Failed to compress SVG' }, { status: 500 });
				}
				break;
			default:
				// Default to PNG if format is unknown
				outputBuffer = await sharp(Buffer.from(svgContent)).png().toBuffer();
				contentType = 'image/png';
				outputFilename = file.name.replace('.svg', '.png');
		}

		return new Response(outputBuffer, {
			headers: {
				'Content-Type': contentType,
				'Content-Disposition': `attachment; filename="${outputFilename}"`
			}
		});
	} catch (error) {
		console.error('General conversion error:', error);
		return json({ error: 'Failed to process SVG' }, { status: 500 });
	}
}
