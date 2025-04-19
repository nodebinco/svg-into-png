export type Language = 'en' | 'es' | 'th';
export type Format = 'png' | 'jpg' | 'pdf' | 'compress' | 'view';

export interface ConversionInfo {
	title: string;
	description: string;
	descriptionHtml: string;
	icon: 'image' | 'file-text' | 'zap' | 'eye';
}

export interface Translation {
	title: string;
	description: string;
	dragDrop: string;
	or: string;
	browseFiles: string;
	selectedFiles: string;
	convertTo: string;
	downloadAll: string;
	formats: Record<Format, string>;
	clearFiles: string;
	filesCount: string;
	fileCount: string;
	converting: string;
	download: string;
	compressTitle: string;
	viewerTitle: string;
	viewerDescription: string;
	uploadToView: string;
	baseTitle: string;
	domain: string;
	conversions: Record<Format, ConversionInfo>;
	privacy: string;
	footer: {
		since: string;
		rights: string;
		errorMessage?: string;
		noFilesReady?: string;
	};
	steps?: {
		title: string;
		upload: string;
		wait: string;
		download: string;
	};
	successMessage?: string;
	errorMessage?: string;
	noFilesReady?: string;
}

export const languages: Record<Language, Translation> = {
	en: {
		title: 'SVG Converter',
		description: 'Convert your SVG files to various formats instantly online.',
		dragDrop: 'Drag & drop SVG files here',
		or: 'or',
		browseFiles: 'Browse Files',
		selectedFiles: 'Files',
		convertTo: 'Convert to',
		downloadAll: 'Download All',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'Compress',
			view: 'View'
		},
		clearFiles: 'Clear All',
		filesCount: '{count} Files',
		fileCount: '{count} File',
		converting: 'Converting...',
		download: 'Download',
		compressTitle: 'Compress SVG',
		viewerTitle: 'SVG Viewer',
		viewerDescription: 'Drag & drop an SVG file to view its content.',
		uploadToView: 'Upload SVG to View',
		baseTitle: 'Convert SVG to {format}',
		domain: 'svgintopng.com',
		conversions: {
			png: {
				title: 'SVG to PNG Conversion',
				description: 'Convert your SVG files to PNG images.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convert SVG to PNG Online for Free | Easy &amp; Fast</h2>
  <p class="mb-4"> Need to convert your <strong class="font-semibold">SVG files to PNG images</strong>? Our <strong class="font-semibold">free online SVG to PNG converter</strong> makes it quick and easy. Get high-quality, lossless PNG images from your scalable vector graphics directly in your browser, with no software installation required. Perfect for web graphics, images requiring transparency, or when you need a widely compatible raster format. </p>
  <h3 class="text-xl font-semibold mb-2">Why Convert from SVG to PNG?</h3>
  <p class="mb-4"> While SVG (Scalable Vector Graphics) is excellent for resolution-independent graphics like logos and icons that need to scale infinitely, there are several reasons you might need to convert your <strong class="font-semibold">SVG file to PNG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Transparency Support:</strong> Unlike JPG, <strong class="font-semibold">PNG fully supports transparency</strong>. If your design needs to be placed on a background and requires parts of the image to be see-through, PNG is the format you need.
    </li>
    <li>
      <strong class="font-semibold">Wider Compatibility:</strong> Although modern browsers support SVG well, some older software, specific applications, or platforms may require a raster format like PNG.
    </li>
    <li>
      <strong class="font-semibold">Complex Images:</strong> While SVG struggles with the detail of photographs, PNG handles complex images with many colors and gradients effectively using <strong class="font-semibold">lossless compression</strong>, ensuring high visual fidelity (within its resolution limits). PNG is a robust raster format often preferred for detailed web graphics.
    </li>
    <li>
      <strong class="font-semibold">Ease of Use in Raster Editors:</strong> PNGs are pixel-based, making them straightforward to open and edit in standard raster graphics software like Adobe Photoshop or online editors.
    </li>
  </ol>
  <p class="mb-4"> PNG is a versatile raster format, recognized and displayed by all major web browsers. Converting <strong class="font-semibold">SVG to PNG</strong> allows you to leverage PNG's strengths, particularly its <strong class="font-semibold">transparency</strong> and wide compatibility. </p>
  <h3 class="text-xl font-semibold mb-2">How to Convert Your SVG to PNG Online:</h3>
  <p class="mb-4"> Converting your SVG files to PNG using our free online tool is simple and takes just seconds. Follow these easy steps: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Upload Your SVG File(s):</strong> Click the <strong> "Browse Files" </strong> button and select the SVG files you wish to convert. You can also simply drag and drop your SVG files directly into the drop area. Our tool supports converting <strong class="font-semibold">up to 20 files</strong> at once.
    </li>
    <li>
      <strong class="font-semibold">Wait for Conversion:</strong> Our tool will automatically begin the conversion process, turning your SVG vectors into high-quality PNG raster images. Wait briefly for the process to complete.
    </li>
    <li>
      <strong class="font-semibold">Download Your PNG(s):</strong> Once the conversion is finished, you can download your new PNG image files individually by clicking the thumbnail or download button for each file. For multiple conversions, click the <strong> "Download All" </strong> button to get a convenient ZIP archive containing all your converted PNGs.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. PNG: Understanding the Formats</h3>
  <p class="mb-4"> To help you understand when each format is best suited, here's a quick comparison based on their core properties: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Vector graphics format.
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Infinitely scalable without losing quality (resolution-independent).
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Logos, icons, illustrations, minimalistic graphics, animations, charts, graphics that need to look sharp at any size.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong> Supported.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Small file size for simple graphics, scales perfectly, editable with text/vector tools, searchable, supports animation.
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Not ideal for complex images like photographs, support can vary in older systems/software implementations.
    </li>
  </ul>
  <p class="font-semibold">
    <strong>PNG (Portable Network Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Raster graphics format (pixel-based).
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> Pixels.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Not scalable without losing quality (resolution-dependent). Quality degrades when enlarged significantly.
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Web graphics, images requiring transparency (like logos over photos), illustrations, images with sharp lines and areas of solid color.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong>
      <strong class="font-semibold">Fully Supported.</strong>
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong>
      <strong class="font-semibold">Lossless compression</strong> (preserves quality), supports transparency, widely compatible across browsers and software, better than SVG for complex images with many colors (though not ideal for photos like JPG).
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Can result in larger file sizes than SVG for simple graphics, not scalable without quality loss, not the best choice for printing at very high resolutions <em class="italic">compared to vector</em>.
    </li>
  </ul>
  <p class="mb-4"> Ultimately, they serve different purposes. Use PNG when you need a <strong class="font-semibold">raster image with transparency</strong> or for general web graphics where lossless quality and broad compatibility are key. Use SVG when scalability and editability are your primary concerns. </p>
  <h3 class="text-xl font-semibold mb-2">Benefits of Using Our Free SVG to PNG Converter:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completely Free:</strong> Convert as many SVG files to PNG as you need, without any cost.
    </li>
    <li>
      <strong class="font-semibold">Online Tool:</strong> No need to download or install any software. Convert directly in your web browser.
    </li>
    <li>
      <strong class="font-semibold">Fast &amp; Easy:</strong> Our simple interface and quick processing ensure you get your PNG files in moments.
    </li>
    <li>
      <strong class="font-semibold">High-Quality Output:</strong> Converts your SVG to PNG using lossless compression to preserve image quality.
    </li>
    <li>
      <strong class="font-semibold">Batch Conversion:</strong> Convert multiple SVG files simultaneously, saving you time. Supports up to 20 files per conversion.
    </li>
    <li>
      <strong class="font-semibold">Secure:</strong> Your files are processed securely and temporarily on our servers and are removed after conversion.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
		<li>
      <strong class="font-semibold">Is this SVG to PNG converter free?</strong> Yes, our online tool is completely free to use for everyone.
    </li>
    <li>
      <strong class="font-semibold">Is it safe to upload my files?</strong> Absolutely. We prioritize your privacy and security. Files are processed temporarily and deleted from our servers shortly after conversion.
    </li>
    <li>
      <strong class="font-semibold">Will the converted PNG image lose quality?</strong> PNG uses lossless compression. While converting from a vector (SVG) to a raster (PNG) format involves defining the image at a specific resolution, the PNG compression itself does not degrade the image quality from that defined resolution.
    </li>
    <li>
      <strong class="font-semibold">What is the main difference between SVG and PNG?</strong> The key difference is that SVG is a vector format (scales infinitely) and PNG is a raster format (pixel-based, supports transparency and lossless compression).
    </li>
    <li>
      <strong class="font-semibold">Can I convert multiple SVG files at once?</strong> Yes, our tool allows you to upload and convert up to 20 SVG files simultaneously.
    </li>
  </ul>
  <p> Ready to convert your SVG files to the versatile PNG format? Start now by clicking the <strong> "Browse Files" </strong> button above! Get your high-quality, transparent-supported PNG images quickly and easily. </p>
</div>`,
				icon: 'image'
			},
			jpg: {
				title: 'SVG to JPG Conversion',
				description: 'Transform your SVG files into JPG format.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convert SVG to JPG Online for Free | Easy &amp; Fast</h2>
  <p class="mb-4"> Need to convert your <strong class="font-semibold">SVG files to JPG images</strong>? Our <strong class="font-semibold">free online SVG to JPG converter</strong> makes it quick and easy. Get JPG images from your scalable vector graphics directly in your browser, with no software installation required. Perfect for complex images like photographs or when <strong class="font-semibold">file size is a major concern</strong> and <strong class="font-semibold">transparency isn't needed</strong>. </p>
  <h3 class="text-xl font-semibold mb-2">Why Convert from SVG to JPG?</h3>
  <p class="mb-4"> While SVG (Scalable Vector Graphics) is excellent for resolution-independent graphics like logos and icons that need to scale infinitely, there are several reasons you might need to convert your <strong class="font-semibold">SVG file to JPG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Handle Complex Images/Photographs:</strong> JPG is excellent for complex images with many colors, like photographs, a task SVG is not designed for.
    </li>
    <li>
      <strong class="font-semibold">Achieve Smaller File Sizes:</strong> JPG uses <strong class="font-semibold">lossy compression</strong> to significantly reduce file size, making it ideal when <strong class="font-semibold">file size is a major concern</strong>.
    </li>
    <li>
      <strong class="font-semibold">Wider Compatibility:</strong> JPG is one of the most widely supported image formats across websites, software, and devices.
    </li>
    <li>
      <strong class="font-semibold">Ease of Use in Raster Editors:</strong> JPGs are pixel-based, making them straightforward to open and edit in standard raster graphics software like Adobe Photoshop or online editors.
    </li>
  </ol>
  <p class="mb-4"> JPG is a widely supported raster format, optimized for photographic images. Converting <strong class="font-semibold">SVG to JPG</strong> allows you to leverage JPG's strengths, particularly its ability to handle complex images efficiently and achieve smaller file sizes, especially when <strong class="font-semibold">transparency is not needed</strong>. </p>
  <h3 class="text-xl font-semibold mb-2">How to Convert Your SVG to JPG Online:</h3>
  <p class="mb-4"> Converting your SVG files to JPG using our free online tool is simple and takes just seconds. Follow these easy steps: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Upload Your SVG File(s):</strong> Click the <strong> "Browse Files" </strong> button or drag &amp; drop your SVG files into the drop area. Our tool supports converting <strong class="font-semibold">up to 20 files</strong> at once.
    </li>
    <li>
      <strong class="font-semibold">Wait for Conversion:</strong> Our tool will automatically begin the conversion process, turning your SVG vectors into JPG raster images. Wait briefly for the process to complete.
    </li>
    <li>
      <strong class="font-semibold">Download Your JPG(s):</strong> Once the conversion is finished, you can download your new JPG image files individually by clicking the thumbnail or download button for each file. For multiple conversions, click the <strong> "Download All" </strong> button to get a convenient ZIP archive containing all your converted JPGs.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. JPG: Understanding the Formats</h3>
  <p class="mb-4"> To help you understand when each format is best suited, here's a quick comparison based on their core properties: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Vector graphics format.
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Infinitely scalable without losing quality (resolution-independent).
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Logos, icons, illustrations, minimalistic graphics, animations, charts, graphics that need to look sharp at any size.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong> Supported.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Small file size for simple graphics, scales perfectly, editable with text/vector tools, searchable, supports animation.
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Not ideal for complex images like photographs, support can vary in older systems/software implementations.
    </li>
  </ul>
  <p class="font-semibold">
    <strong>JPG (Joint Photographic Experts Group):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Raster graphics format (pixel-based).
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> Pixels.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Not scalable without losing quality (resolution-dependent). Quality degrades when enlarged significantly.
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Photographs and complex images with many colors and smooth gradients.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong> NOT Supported.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> <strong class="font-semibold">Excellent for photographs</strong>, achieves very small file sizes using <strong class="font-semibold">lossy compression</strong>, widely compatible.
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Lossy compression means some quality is permanently lost (not ideal for images with text or sharp lines where maximum detail is critical), does not support transparency.
    </li>
  </ul>
  <p class="mb-4"> Ultimately, they serve different purposes. Use JPG when you need a <strong class="font-semibold">raster image for photographs or complex images</strong> and <strong class="font-semibold">file size is a major concern</strong>, but <strong class="font-semibold">transparency is not required</strong>. Use SVG when scalability and editability are your primary concerns. </p>
  <h3 class="text-xl font-semibold mb-2">Benefits of Using Our Free SVG to JPG Converter:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completely Free:</strong> Convert as many SVG files to JPG as you need, without any cost.
    </li>
    <li>
      <strong class="font-semibold">Online Tool:</strong> No need to download or install any software. Convert directly in your web browser.
    </li>
    <li>
      <strong class="font-semibold">Fast &amp; Easy:</strong> Our simple interface and quick processing ensure you get your JPG files in moments.
    </li>
    <li>
      <strong class="font-semibold">Standard JPG Output:</strong> Converts your SVG to standard JPG format, suitable for photos and complex images where file size is important.
    </li>
    <li>
      <strong class="font-semibold">Batch Conversion:</strong> Convert multiple SVG files simultaneously, saving you time. Supports up to 20 files per conversion.
    </li>
    <li>
      <strong class="font-semibold">Secure:</strong> Your files are processed securely and temporarily on our servers and are removed after conversion.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Is this SVG to JPG converter free?</strong> Yes, our online tool is completely free to use for everyone.
    </li>
    <li>
      <strong class="font-semibold">Is it safe to upload my files?</strong> Absolutely. We prioritize your privacy and security. Files are processed temporarily and deleted from our servers shortly after conversion.
    </li>
    <li>
      <strong class="font-semibold">Will the converted JPG image lose quality?</strong> JPG uses <strong class="font-semibold">lossy compression</strong>, which means some data is discarded to achieve smaller file sizes. While optimized for photographs, converting detailed vector graphics may result in some loss of sharpness or detail compared to the original SVG or a lossless format like PNG.
    </li>
    <li>
      <strong class="font-semibold">What is the main difference between SVG and JPG?</strong> The key difference is that SVG is a vector format (scales infinitely), while JPG is a raster format (pixel-based, uses <strong class="font-semibold">lossy compression</strong>, does not support transparency, best for photos).
    </li>
    <li>
      <strong class="font-semibold">Can I convert multiple SVG files at once?</strong> Yes, our tool allows you to upload and convert up to 20 SVG files simultaneously.
    </li>
  </ul>
  <p> Ready to convert your SVG files to the widely supported JPG format? Start now by clicking the <strong> "Browse Files" </strong> button above! Get your compact, widely compatible JPG images quickly and easily. </p>
</div>`,
				icon: 'image'
			},
			pdf: {
				title: 'SVG to PDF Conversion',
				description: 'Convert your SVG files into PDF documents.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convert SVG to PDF Online for Free | Easy &amp; Fast</h2>
  <p class="mb-4"> Need to convert your <strong class="font-semibold">SVG files to PDF documents</strong>? Our <strong class="font-semibold">free online SVG to PDF converter</strong> makes it quick and easy. Get <strong class="font-semibold">PDF documents</strong> from your scalable vector graphics directly in your browser, with no software installation required. Perfect for <strong class="font-semibold">creating documents, reports, or print-ready files</strong> from your vector graphics. </p>
  <h3 class="text-xl font-semibold mb-2">Why Convert from SVG to PDF?</h3>
  <p class="mb-4"> While SVG (Scalable Vector Graphics) is excellent for web graphics that need to scale infinitely, there are several reasons you might need to convert your <strong class="font-semibold">SVG file to PDF</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Create Documents for Sharing &amp; Printing:</strong> PDF is the universal format for documents, reports, and print-ready files, ensuring your graphic looks the same everywhere.
    </li>
    <li>
      <strong class="font-semibold">Preserve Vector Scalability in a Document:</strong> Unlike converting to a raster format (JPG, PNG), converting SVG to PDF can often embed the vector data, allowing the graphic to remain sharp when zoomed within the PDF viewer.
    </li>
    <li>
      <strong class="font-semibold">Standard Distribution Format:</strong> Share your graphics easily as highly compatible PDF files viewable on almost any device and operating system.
    </li>
  </ol>
  <p class="mb-4"> PDF is a <strong class="font-semibold">standard document format</strong>, widely used for professional and personal sharing and printing. Converting <strong class="font-semibold">SVG to PDF</strong> allows you to use your vector graphic within a structured document format, suitable for presentations, reports, or digital distribution. </p>
  <h3 class="text-xl font-semibold mb-2">How to Convert Your SVG to PDF Online:</h3>
  <p class="mb-4"> Converting your <strong class="font-semibold">SVG files to PDF</strong> using our free online tool is simple and takes just seconds. Follow these easy steps: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Upload Your SVG File(s):</strong> Click the <strong>"Browse Files"</strong> button or drag &amp; drop your SVG files into the drop area. Our tool supports converting <strong class="font-semibold">up to 20 files</strong> at once.
    </li>
    <li>
      <strong class="font-semibold">Wait for Conversion:</strong> Our tool will automatically begin the conversion process, turning your SVG vectors into PDF documents. Wait briefly for the process to complete.
    </li>
    <li>
      <strong class="font-semibold">Download Your PDF(s):</strong> Once the conversion is finished, you can download your <strong class="font-semibold">new PDF files</strong> individually by clicking the thumbnail or download button for each file. For multiple conversions, click the <strong>"Download All"</strong> button to get a convenient ZIP archive containing all your converted PDFs.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. PDF: Understanding the Formats</h3>
  <p class="mb-4"> To help you understand when each format is best suited, here's a <strong class="font-semibold">quick comparison</strong> based on their core properties: </p>
  <p class="font-semibold">
    <strong class="font-semibold">SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Vector graphics format.
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Infinitely scalable without losing quality (resolution-independent).
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Logos, icons, illustrations, minimalistic graphics, animations, charts, graphics that need to look sharp at any size on the web.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong> Supported.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Small file size for simple graphics, scales perfectly, editable with text/vector tools, searchable, supports animation (for web).
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Not ideal for complex images like photographs, support can vary in older systems/software implementations, primarily designed for the web.
    </li>
  </ul>
  <p class="font-semibold">
    <strong class="font-semibold">PDF (Portable Document Format):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Type:</strong> Document format (can contain vector graphics, raster images, text, forms, etc.).
    </li>
    <li>
      <strong class="font-semibold">Based On:</strong> PostScript language model.
    </li>
    <li>
      <strong class="font-semibold">Scalability:</strong> Content can be scalable (like embedded vector) or fixed resolution (like embedded raster images). Often preserves vector quality from SVG.
    </li>
    <li>
      <strong class="font-semibold">Best For:</strong> Documents, reports, e-books, forms, print-ready files, sharing fixed layouts.
    </li>
    <li>
      <strong class="font-semibold">Transparency:</strong> Supported within the format, though may be flattened for printing.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> <strong class="font-semibold">Widely compatible for viewing and printing</strong> across devices, preserves layout, <strong class="font-semibold">can embed vector data from SVG</strong> to maintain sharpness.
    </li>
    <li>
      <strong class="font-semibold">Cons:</strong> Editing can be complex, file size varies based on content complexity, not primarily an image format for web embedding (use JPG/PNG/SVG instead).
    </li>
  </ul>
  <p class="mb-4"> Ultimately, they serve different purposes. Use <strong class="font-semibold">PDF when you need to present your graphic as a document</strong> for easy sharing, printing, or embedding vector quality in a fixed layout. Use <strong class="font-semibold">SVG when scalability and editability are your primary concerns</strong> for web use. </p>
  <h3 class="text-xl font-semibold mb-2">Benefits of Using Our Free SVG to PDF Converter:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completely Free:</strong> Convert as many SVG files to PDF as you need, without any cost.
    </li>
    <li>
      <strong class="font-semibold">Online Tool:</strong> No need to download or install any software. Convert directly in your web browser.
    </li>
    <li>
      <strong class="font-semibold">Fast &amp; Easy:</strong> Our simple interface and quick processing ensure you get your PDF files in moments.
    </li>
    <li>
      <strong class="font-semibold">High-Quality PDF Output:</strong> Converts your SVG to PDF, aiming to preserve vector quality where possible for crisp lines and text in the document.
    </li>
    <li>
      <strong class="font-semibold">Batch Conversion:</strong> Convert multiple SVG files simultaneously, saving you time. Supports up to 20 files per conversion.
    </li>
    <li>
      <strong class="font-semibold">Secure:</strong> Your files are processed securely and temporarily on our servers and are removed after conversion.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Is this SVG to PDF converter free?</strong> Yes, our online tool is completely free to use for everyone.
    </li>
    <li>
      <strong class="font-semibold">Is it safe to upload my files?</strong> Absolutely. We prioritize your privacy and security. Files are processed temporarily and deleted from our servers shortly after conversion.
    </li>
    <li>
      <strong class="font-semibold">Will the converted PDF image maintain quality?</strong> Yes, converting SVG to PDF often embeds the vector data, meaning the graphic within the PDF should remain sharp and scalable when viewed at different zoom levels, preserving the original vector quality better than converting to raster formats.
    </li>
    <li>
      <strong class="font-semibold">What is the main difference between SVG and PDF?</strong> The key difference is that SVG is primarily a vector image format for web graphics, while PDF is a document format designed for presenting fixed layouts that can contain various types of content, including vector graphics, raster images, and text.
    </li>
    <li>
      <strong class="font-semibold">Can I convert multiple SVG files at once?</strong> Yes, our tool allows you to upload and convert up to 20 SVG files simultaneously.
    </li>
  </ul>
  <p> Ready to convert your SVG files to the versatile PDF format? <strong class="font-semibold">Start now by clicking the "Browse Files" button above!</strong> Get your <strong class="font-semibold">high-quality, shareable PDF documents</strong> quickly and easily. </p>
</div>`,
				icon: 'file-text'
			},
			compress: {
				title: 'Compress SVG Files',
				description: 'Optimize and reduce the file size of your SVG files.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Compress &amp; Optimize SVG Files Online for Free | Easy &amp; Fast</h2>
  <p class="mb-4"> Need to <strong class="font-semibold">compress or optimize your SVG files</strong> for the web? Our <strong class="font-semibold">free online SVG optimizer</strong> makes it quick and easy. Reduce SVG file sizes to improve website loading speed and performance directly in your browser, with no software installation required. Get <strong class="font-semibold">smaller, optimized SVG files</strong> perfect for fast-loading websites and applications. </p>
  <h3 class="text-xl font-semibold mb-2">Why Compress or Optimize SVG Files?</h3>
  <p class="mb-4"> SVG files, especially those created with vector editing software, often contain unnecessary data that increases file size without affecting visual appearance. Optimizing your SVG files offers several key benefits: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Faster Website Loading:</strong> Smaller file sizes mean your web pages load quicker, providing a better user experience and potentially improving your search engine ranking.
    </li>
    <li>
      <strong class="font-semibold">Reduced Bandwidth Usage:</strong> Save bandwidth for both your server and your visitors, which is crucial for mobile users or sites with high traffic.
    </li>
    <li>
      <strong class="font-semibold">Improved Performance:</strong> Optimized SVGs render faster in browsers, leading to smoother animations and more responsive web graphics.
    </li>
    <li>
      <strong class="font-semibold">Remove Unnecessary Data:</strong> Get rid of hidden editor metadata, comments, hidden layers, default values, and excessive decimal precision that bloat file size.
    </li>
  </ol>
  <p class="mb-4"> Compressing your SVG is about cleaning up the code to make the file as small and efficient as possible while preserving the visual integrity of the graphic. It's an essential step for web optimization. </p>
  <h3 class="text-xl font-semibold mb-2">How to Compress Your SVG Files Online:</h3>
  <p class="mb-4"> Compressing your <strong class="font-semibold">SVG files</strong> using our free online tool is simple and takes just seconds. Follow these easy steps: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Upload Your SVG File(s):</strong> Click the <strong>"Browse Files"</strong> button or drag &amp; drop your SVG files into the drop area. Our tool supports compressing <strong class="font-semibold">up to 20 files</strong> at once.
    </li>
    <li>
      <strong class="font-semibold">Wait for Optimization:</strong> Our tool will automatically begin the compression and optimization process. Wait briefly for the process to complete.
    </li>
    <li>
      <strong class="font-semibold">Download Your Optimized SVG(s):</strong> Once the optimization is finished, you can download your <strong class="font-semibold">new, smaller SVG files</strong> individually by clicking the thumbnail or download button for each file. For multiple files, click the <strong>"Download All"</strong> button to get a convenient ZIP archive containing all your compressed SVGs.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">What is SVG Optimization?</h3>
  <p class="mb-4"> SVG optimization is the process of analyzing and cleaning up the underlying XML code of an SVG file to reduce its file size. This is achieved by removing redundant information, simplifying code structure, and applying specific techniques like reducing the number of decimal places in path data. The goal is to make the SVG file smaller and faster to process without causing any visible changes to the graphic itself. </p>
  <h3 class="text-xl font-semibold mb-2">Benefits of Using Our Free SVG Optimizer:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completely Free:</strong> Optimize as many SVG files as you need, without any cost.
    </li>
    <li>
      <strong class="font-semibold">Online Tool:</strong> No need to download or install any software. Optimize directly in your web browser.
    </li>
    <li>
      <strong class="font-semibold">Fast &amp; Easy:</strong> Our simple interface and quick processing ensure you get your optimized SVG files in moments.
    </li>
    <li>
      <strong class="font-semibold">High-Quality Optimization:</strong> Our tool is designed to significantly reduce file size while maintaining the visual integrity of your SVG graphic.
    </li>
    <li>
      <strong class="font-semibold">Batch Compression:</strong> Optimize multiple SVG files simultaneously, saving you time. Supports up to 20 files per session.
    </li>
    <li>
      <strong class="font-semibold">Secure:</strong> Your files are processed securely and temporarily on our servers and are removed after optimization.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Is this SVG compressor free?</strong> Yes, our online tool is completely free to use for everyone.
    </li>
    <li>
      <strong class="font-semibold">Is it safe to upload my files?</strong> Absolutely. We prioritize your privacy and security. Files are processed temporarily and deleted from our servers shortly after optimization.
    </li>
    <li>
      <strong class="font-semibold">Does compressing SVG files lose quality?</strong> Our optimization process primarily removes unnecessary data from the SVG's code. It is designed to achieve the smallest possible file size without noticeable visual quality loss. Aggressive settings (not default) *could* potentially alter appearance if geometric precision is drastically reduced, but standard optimization is visually lossless.
    </li>
    <li>
      <strong class="font-semibold">How much can I reduce the file size?</strong> The amount of reduction varies greatly depending on the original SVG file's complexity and how it was created. Reductions of 20% up to 80%+ are often achievable, especially for SVGs exported from editing software.
    </li>
    <li>
      <strong class="font-semibold">What kind of data is removed during optimization?</strong> Optimization removes things like editor metadata, comments, empty groups, hidden elements, default attribute values, and reduces the number of decimal places in path data.
    </li>
    <li>
      <strong class="font-semibold">Can I compress multiple SVG files at once?</strong> Yes, our tool allows you to upload and compress up to 20 SVG files simultaneously.
    </li>
  </ul>
  <p> Ready to <strong class="font-semibold">optimize your SVG files</strong> for better web performance? <strong class="font-semibold">Start now by clicking the "Browse Files" button above!</strong> Get your <strong class="font-semibold">smaller, optimized SVG files</strong> quickly and easily. </p>
</div>`,
				icon: 'zap'
			},
			view: {
				title: 'SVG Viewer',
				description: 'Quickly view the contents of your SVG files.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Online SVG Viewer | Open &amp; View SVG Files for Free | Easy &amp; Fast</h2>
  <p class="mb-4"> Need to <strong class="font-semibold">open and view your SVG files</strong> without installing software? Our <strong class="font-semibold">free online SVG viewer</strong> makes it quick and easy. Simply upload your SVG graphics and see them displayed instantly in your browser. Perfect for quickly checking SVG files on any device. </p>
  <h3 class="text-xl font-semibold mb-2">Why Use an Online SVG Viewer?</h3>
  <p class="mb-4"> Sometimes you just need to see what's inside an SVG file quickly, without needing complex design software. An online SVG viewer provides a convenient solution: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">No Software Required:</strong> View SVG files directly in your web browser on any operating system, without needing to download or install special programs like Adobe Illustrator or Inkscape.
    </li>
    <li>
      <strong class="font-semibold">Quick Access Anywhere:</strong> Open and check SVG files from any device with internet access – desktop, laptop, tablet, or smartphone.
    </li>
    <li>
      <strong class="font-semibold">Instant Preview:</strong> Quickly see what your SVG graphic looks like before using it on a website, in a document, or sending it to someone.
    </li>
    <li>
      <strong class="font-semibold">Simple and Focused:</strong> Get straight to viewing your graphic without navigating complex editing interfaces.
    </li>
  </ol>
  <p class="mb-4"> Using a free online viewer is the easiest way to access and display your SVG files when you're away from your usual design tools or need a fast preview. </p>
  <h3 class="text-xl font-semibold mb-2">How to Open &amp; View Your SVG Files Online:</h3>
  <p class="mb-4"> Using our <strong class="font-semibold">online SVG viewer</strong> is simple and takes just seconds. Follow these easy steps: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Upload Your SVG File(s):</strong> Click the <strong>"Upload SVG to View"</strong> button or drag &amp; drop your SVG files into the drop area.
    </li>
    <li>
      <strong class="font-semibold">Wait for Processing:</strong> Our tool will quickly process your SVG file(s) for display.
    </li>
    <li>
      <strong class="font-semibold">View Your SVG:</strong> Once processed, your SVG graphic will be displayed directly in your browser window. If you uploaded multiple files, you can usually switch between previews.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">What is SVG?</h3>
  <p class="mb-4"> SVG stands for <strong class="font-semibold">Scalable Vector Graphics</strong>. It's an XML-based vector image format for two-dimensional graphics. </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Vector Format:</strong> Unlike raster formats (like JPG or PNG) made of pixels, SVGs are made of mathematical descriptions (paths, shapes, colors).
    </li>
    <li>
      <strong class="font-semibold">Scalable:</strong> The main advantage is that SVG images can be scaled up or down to any size without losing quality or sharpness.
    </li>
    <li>
      <strong class="font-semibold">Web Friendly:</strong> SVGs are lightweight for simple graphics, text-based (searchable), and ideal for logos, icons, and illustrations on websites.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Benefits of Using Our Free Online SVG Viewer:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completely Free:</strong> Open and view as many SVG files as you need, without any cost.
    </li>
    <li>
      <strong class="font-semibold">Online Tool:</strong> No need to download or install any software. View directly in your web browser.
    </li>
    <li>
      <strong class="font-semibold">Fast &amp; Easy Access:</strong> Designed for quick file viewing with a simple, intuitive interface.
    </li>
    <li>
      <strong class="font-semibold">No Software Required:</strong> A great alternative if you don't have dedicated vector editing software installed.
    </li>
    <li>
      <strong class="font-semibold">View on Any Device:</strong> Access and use the viewer on desktops, laptops, tablets, and smartphones.
    </li>
    <li>
      <strong class="font-semibold">Secure:</strong> Your files are processed securely and temporarily on our servers and are removed after viewing.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Frequently Asked Questions (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Is this SVG viewer free?</strong> Yes, our online tool is completely free to use for everyone.
    </li>
    <li>
      <strong class="font-semibold">Is it safe to upload my files?</strong> Absolutely. We prioritize your privacy and security. Files are processed temporarily for viewing and deleted from our servers shortly after.
    </li>
    <li>
      <strong class="font-semibold">Will the SVG display correctly?</strong> The viewer uses your web browser's native SVG rendering capabilities, so it should display the graphic as intended. Compatibility with very complex or advanced SVG features can sometimes vary slightly between browsers.
    </li>
    <li>
      <strong class="font-semibold">Can I zoom or pan the SVG?</strong> Yes, you can typically use your browser's standard zoom and pan functions to explore the SVG graphic in detail.
    </li>
    <li>
      <strong class="font-semibold">What browsers are supported?</strong> Our viewer works in all modern web browsers, including Chrome, Firefox, Safari, Edge, and others.
    </li>
    <li>
      <strong class="font-semibold">Can I upload multiple SVG files?</strong> Yes, you can upload up to 20 SVG files at once to preview.
    </li>
  </ul>
  <p> Ready to <strong class="font-semibold">view your SVG files instantly online</strong>? <strong class="font-semibold">Start now by clicking the "Browse Files" button above!</strong> Open and see your <strong class="font-semibold">SVG graphics</strong> quickly and easily. </p>
</div>`,
				icon: 'eye'
			}
		},
		errorMessage: 'Failed to convert files. Please check the console.',
		noFilesReady: 'No files are ready for download.',
		privacy: 'Your files are processed securely and deleted from our servers after 1 hour.',
		footer: {
			since: '© 2024',
			rights: 'All rights reserved.',
			errorMessage: 'Error al convertir archivos. Por favor, revisa la consola.',
			noFilesReady: 'No hay archivos listos para descargar.'
		},
		successMessage: 'Files converted successfully!'
	},
	es: {
		title: 'Convertidor SVG',
		description: 'Convierte tus archivos SVG a varios formatos al instante online.',
		dragDrop: 'Arrastra y suelta tus archivos SVG aquí',
		or: 'o',
		browseFiles: 'Explorar Archivos',
		selectedFiles: 'Archivos',
		convertTo: 'Convertir a',
		downloadAll: 'Descargar Todo',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'Comprimir',
			view: 'Ver'
		},
		clearFiles: 'Limpiar',
		filesCount: '{count} Archivos',
		fileCount: '{count} Archivo',
		converting: 'Convertiendo...',
		download: 'Descargar',
		compressTitle: 'Comprimir SVG',
		viewerTitle: 'Visor de SVG',
		viewerDescription: 'Carga o arrastra un archivo SVG para ver su contenido.',
		uploadToView: 'Cargar SVG para Ver',
		baseTitle: 'Convertidor de SVG a {format}',
		domain: 'svgintopng.com',
		conversions: {
			png: {
				title: 'Conversión de SVG a PNG',
				description: 'Convierte tus archivos SVG a imágenes PNG.',
				descriptionHtml: `<!-- PLACEHOLDER: Spanish Translation Needed -->`,
				icon: 'image'
			},
			jpg: {
				title: 'Conversión de SVG a JPG',
				description: 'Transforma tus archivos SVG a formato JPG.',
				descriptionHtml: `<!-- PLACEHOLDER: Spanish Translation Needed -->`,
				icon: 'image'
			},
			pdf: {
				title: 'Conversión de SVG a PDF',
				description: 'Convierte tus archivos SVG a documentos PDF.',
				descriptionHtml: `<!-- PLACEHOLDER: Spanish Translation Needed -->`,
				icon: 'file-text'
			},
			compress: {
				title: 'Compresión de SVG',
				description: 'Optimiza y reduce el tamaño de tus archivos SVG.',
				descriptionHtml: `<!-- PLACEHOLDER: Spanish Translation Needed -->`,
				icon: 'zap'
			},
			view: {
				title: 'Visor de SVG',
				description: 'Visualiza rápidamente el contenido de tus archivos SVG.',
				descriptionHtml: `<!-- PLACEHOLDER: Spanish Translation Needed -->`,
				icon: 'eye'
			}
		},
		steps: {
			title: 'Cómo convertir SVG a {format}',
			upload: 'Sube tu archivo SVG arrastrándolo o usando el botón de explorar.',
			wait: 'Espera a que se complete el proceso de conversión/compresión.',
			download: 'Descarga tu archivo {format} convertido.'
		},
		errorMessage: 'Error al convertir archivos. Por favor, revisa la consola.',
		noFilesReady: 'No hay archivos listos para descargar.',
		privacy:
			'Tus archivos se procesan de manera segura y se eliminan de nuestros servidores después de 1 hora.',
		footer: {
			since: '© 2024',
			rights: 'Todos los derechos reservados.',
			errorMessage: 'Error al convertir archivos. Por favor, revisa la consola.',
			noFilesReady: 'No hay archivos listos para descargar.'
		},
		successMessage: '¡Archivos convertidos con éxito!'
	},
	th: {
		title: 'ตัวแปลง SVG',
		description: 'แปลงไฟล์ SVG ของคุณเป็นรูปแบบต่างๆ ทันทีออนไลน์',
		dragDrop: 'ลากและวางไฟล์ SVG ที่นี่',
		or: 'หรือ',
		browseFiles: 'เลือกไฟล์',
		selectedFiles: 'ไฟล์',
		convertTo: 'แปลงเป็น',
		downloadAll: 'ดาวน์โหลดทั้งหมด',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'บีบอัด SVG',
			view: 'ดู'
		},
		clearFiles: 'เคลียร์ไฟล์',
		filesCount: '{count} ไฟล์',
		fileCount: '{count} ไฟล์',
		converting: 'แปลงอยู่...',
		download: 'ดาวน์โหลด',
		compressTitle: 'บีบอัด SVG',
		viewerTitle: 'เครื่องมือดู SVG',
		viewerDescription: 'อัปโหลดหรือลากและวางไฟล์ SVG เพื่อดูเนื้อหาของมัน',
		uploadToView: 'อัปโหลด SVG เพื่อดู',
		baseTitle: 'เครื่องมือแปลง SVG เป็น {format}',
		domain: 'svgintopng.com',
		conversions: {
			png: {
				title: 'การแปลง SVG เป็น PNG',
				description: 'แปลงไฟล์ SVG ของคุณเป็นภาพ PNG คุณภาพสูง',
				descriptionHtml: `<!-- PLACEHOLDER: Thai Translation Needed -->`,
				icon: 'image'
			},
			jpg: {
				title: 'การแปลง SVG เป็น JPG',
				description: 'แปลงไฟล์ SVG ของคุณเป็นรูปแบบภาพ JPG มาตรฐาน',
				descriptionHtml: `<!-- PLACEHOLDER: Thai Translation Needed -->`,
				icon: 'image'
			},
			pdf: {
				title: 'การแปลง SVG เป็น PDF',
				description: 'แปลงไฟล์ SVG ของคุณเป็นเอกสาร PDF ที่เข้าถึงได้สากล',
				descriptionHtml: `<!-- PLACEHOLDER: Thai Translation Needed -->`,
				icon: 'file-text'
			},
			compress: {
				title: 'การบีบอัด SVG',
				description: 'ปรับปรุงและลดขนาดไฟล์ SVG ของคุณ',
				descriptionHtml: `<!-- PLACEHOLDER: Thai Translation Needed -->`,
				icon: 'zap'
			},
			view: {
				title: 'เครื่องมือดู SVG',
				description: 'ดูเนื้อหาไฟล์ SVG ของคุณอย่างรวดเร็ว',
				descriptionHtml: `<!-- PLACEHOLDER: Thai Translation Needed -->`,
				icon: 'eye'
			}
		},
		steps: {
			title: 'วิธีแปลง SVG เป็น {format}',
			upload: 'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือใช้ปุ่มเลือกไฟล์',
			wait: 'รอให้กระบวนการแปลง/บีบอัดเสร็จสมบูรณ์',
			download: 'ดาวน์โหลดไฟล์ {format} ที่แปลงแล้วของคุณ'
		},
		errorMessage: 'การแปลงไฟล์ล้มเหลว โปรดตรวจสอบคอนโซล',
		noFilesReady: 'ไม่มีไฟล์พร้อมสำหรับการดาวน์โหลด',
		privacy: 'ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและถูกลบออกจากเซิร์ฟเวอร์ของเราหลังจาก 1 ชั่วโมง',
		footer: {
			since: '© 2024',
			rights: 'สงวนลิขสิทธิ์ทั้งหมด',
			errorMessage: 'การแปลงไฟล์ล้มเหลว โปรดตรวจสอบคอนโซล',
			noFilesReady: 'ไม่มีไฟล์พร้อมสำหรับการดาวน์โหลด'
		},
		successMessage: 'แปลงไฟล์สำเร็จแล้ว!'
	} as Translation
};
