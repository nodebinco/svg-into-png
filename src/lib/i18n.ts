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
	footer: string;
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
		footer: 'All rights reserved.',
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
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convertir SVG a PNG en línea gratis | Fácil y rápido</h2>
  <p class="mb-4"> ¿Necesitas convertir tus archivos <strong class="font-semibold">SVG a imágenes PNG</strong>? Nuestro <strong class="font-semibold">conversor gratuito en línea de SVG a PNG</strong> lo hace rápido y fácil. Obtén imágenes PNG de alta calidad y sin pérdidas a partir de tus gráficos vectoriales escalables directamente en tu navegador, sin necesidad de instalar software. Perfecto para gráficos web, imágenes que requieren transparencia o cuando necesitas un formato ráster ampliamente compatible. </p>
  <h3 class="text-xl font-semibold mb-2">¿Por qué convertir de SVG a PNG?</h3>
  <p class="mb-4"> Si bien SVG (Scalable Vector Graphics) es excelente para gráficos independientes de la resolución como logotipos e iconos que necesitan escalarse infinitamente, hay varias razones por las que podrías necesitar convertir tu archivo <strong class="font-semibold">SVG a PNG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Soporte de transparencia:</strong> A diferencia de JPG, <strong class="font-semibold">PNG es totalmente compatible con la transparencia</strong>. Si tu diseño necesita colocarse sobre un fondo y requiere que partes de la imagen sean transparentes, PNG es el formato que necesitas.
    </li>
    <li>
      <strong class="font-semibold">Mayor compatibilidad:</strong> Aunque los navegadores modernos son compatibles con SVG, algunos software más antiguos, aplicaciones específicas o plataformas pueden requerir un formato ráster como PNG.
    </li>
    <li>
      <strong class="font-semibold">Imágenes complejas:</strong> Si bien SVG tiene dificultades con el detalle de las fotografías, PNG maneja imágenes complejas con muchos colores y degradados de manera efectiva utilizando <strong class="font-semibold">compresión sin pérdidas</strong>, lo que garantiza una alta fidelidad visual (dentro de sus límites de resolución). PNG es un formato ráster robusto a menudo preferido para gráficos web detallados.
    </li>
    <li>
      <strong class="font-semibold">Facilidad de uso en editores ráster:</strong> Los PNG se basan en píxeles, lo que los hace fáciles de abrir y editar en software de gráficos ráster estándar como Adobe Photoshop o editores en línea.
    </li>
  </ol>
  <p class="mb-4"> PNG es un formato ráster versátil, reconocido y mostrado por todos los principales navegadores web. Convertir <strong class="font-semibold">SVG a PNG</strong> te permite aprovechar las fortalezas de PNG, particularmente su <strong class="font-semibold">transparencia</strong> y amplia compatibilidad. </p>
  <h3 class="text-xl font-semibold mb-2">Cómo convertir tu SVG a PNG en línea:</h3>
  <p class="mb-4"> Convertir tus archivos SVG a PNG utilizando nuestra herramienta gratuita en línea es simple y tarda solo segundos. Sigue estos sencillos pasos: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Sube tus archivos SVG:</strong> Haz clic en el botón <strong>"Explorar archivos"</strong> y selecciona los archivos SVG que deseas convertir. También puedes simplemente arrastrar y soltar tus archivos SVG directamente en el área de carga. Nuestra herramienta admite la conversión de <strong class="font-semibold">hasta 20 archivos</strong> a la vez.
    </li>
    <li>
      <strong class="font-semibold">Espera la conversión:</strong> Nuestra herramienta comenzará automáticamente el proceso de conversión, convirtiendo tus vectores SVG en imágenes ráster PNG de alta calidad. Espera brevemente a que se complete el proceso.
    </li>
    <li>
      <strong class="font-semibold">Descarga tus PNG:</strong> Una vez finalizada la conversión, puedes descargar tus nuevos archivos de imagen PNG individualmente haciendo clic en la miniatura o en el botón de descarga para cada archivo. Para múltiples conversiones, haz clic en el botón <strong>"Descargar todo"</strong> para obtener un conveniente archivo ZIP que contiene todos tus PNG convertidos.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. PNG: Comprendiendo los formatos</h3>
  <p class="mb-4"> Para ayudarte a comprender cuándo es más adecuado cada formato, aquí tienes una comparación rápida basada en sus propiedades principales: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de gráficos vectoriales.
    </li>
    <li>
      <strong class="font-semibold">Basado en:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> Infinitamente escalable sin perder calidad (independiente de la resolución).
    </li>
    <li>
      <strong class="font-semibold">Ideal para:</strong> Logotipos, iconos, ilustraciones, gráficos minimalistas, animaciones, gráficos, gráficos que necesitan verse nítidos en cualquier tamaño.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong> Compatible.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Tamaño de archivo pequeño para gráficos simples, se escala perfectamente, editable con herramientas de texto/vectoriales, buscable, admite animación.
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> No es ideal para imágenes complejas como fotografías, la compatibilidad puede variar en sistemas/implementaciones de software más antiguos.
    </li>
  </ul>
  <p class="font-semibold">
    <strong>PNG (Portable Network Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de gráficos ráster (basado en píxeles).
    </li>
    <li>
      <strong class="font-semibold">Basado en:</strong> Píxeles.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> No escalable sin perder calidad (dependiente de la resolución). La calidad se degrada cuando se amplía significativamente.
    </li>
    <li>
      <strong class="font-semibold">Ideal para:</strong> Gráficos web, imágenes que requieren transparencia (como logotipos sobre fotos), ilustraciones, imágenes con líneas nítidas y áreas de color sólido.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong>
      <strong class="font-semibold">Totalmente compatible.</strong>
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong>
      <strong class="font-semibold">Compresión sin pérdidas</strong> (conserva la calidad), admite transparencia, ampliamente compatible en navegadores y software, mejor que SVG para imágenes complejas con muchos colores (aunque no es ideal para fotos como JPG).
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> Puede resultar en tamaños de archivo más grandes que SVG para gráficos simples, no es escalable sin pérdida de calidad, no es la mejor opción para imprimir a resoluciones muy altas <em class="italic">en comparación con el vector</em>.
    </li>
  </ul>
  <p class="mb-4"> En última instancia, sirven para diferentes propósitos. Usa PNG cuando necesites una <strong class="font-semibold">imagen ráster con transparencia</strong> o para gráficos web generales donde la calidad sin pérdidas y la amplia compatibilidad son clave. Usa SVG cuando la escalabilidad y la capacidad de edición sean tus principales preocupaciones. </p>
  <h3 class="text-xl font-semibold mb-2">Beneficios de usar nuestro conversor gratuito de SVG a PNG:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completamente gratis:</strong> Convierte tantos archivos SVG a PNG como necesites, sin ningún costo.
    </li>
    <li>
      <strong class="font-semibold">Herramienta en línea:</strong> No es necesario descargar ni instalar ningún software. Convierte directamente en tu navegador web.
    </li>
    <li>
      <strong class="font-semibold">Rápido y fácil:</strong> Nuestra interfaz simple y procesamiento rápido aseguran que obtengas tus archivos PNG en momentos.
    </li>
    <li>
      <strong class="font-semibold">Salida de alta calidad:</strong> Convierte tu SVG a PNG utilizando compresión sin pérdidas para preservar la calidad de la imagen.
    </li>
    <li>
      <strong class="font-semibold">Conversión por lotes:</strong> Convierte múltiples archivos SVG simultáneamente, ahorrándote tiempo. Admite hasta 20 archivos por conversión.
    </li>
    <li>
      <strong class="font-semibold">Seguro:</strong> Tus archivos se procesan de forma segura y temporal en nuestros servidores y se eliminan después de la conversión.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Preguntas frecuentes (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">¿Este conversor de SVG a PNG es gratuito?</strong> Sí, nuestra herramienta en línea es completamente gratuita para todos.
    </li>
    <li>
      <strong class="font-semibold">¿Es seguro subir mis archivos?</strong> Absolutamente. Priorizamos tu privacidad y seguridad. Los archivos se procesan temporalmente y se eliminan de nuestros servidores poco después de la conversión.
    </li>
    <li>
      <strong class="font-semibold">¿La imagen PNG convertida perderá calidad?</strong> PNG utiliza compresión sin pérdidas. Si bien la conversión de un formato vectorial (SVG) a uno ráster (PNG) implica definir la imagen a una resolución específica, la compresión PNG en sí misma no degrada la calidad de la imagen a partir de esa resolución definida.
    </li>
    <li>
      <strong class="font-semibold">¿Cuál es la principal diferencia entre SVG y PNG?</strong> La diferencia clave es que SVG es un formato vectorial (se escala infinitamente) y PNG es un formato ráster (basado en píxeles, admite transparencia y compresión sin pérdidas).
    </li>
    <li>
      <strong class="font-semibold">¿Puedo convertir varios archivos SVG a la vez?</strong> Sí, nuestra herramienta te permite subir y convertir hasta 20 archivos SVG simultáneamente.
    </li>
  </ul>
  <p> ¿Listo para convertir tus archivos SVG al versátil formato PNG? ¡Comienza ahora haciendo clic en el botón <strong>"Explorar archivos"</strong> de arriba! Obtén tus imágenes PNG de alta calidad y con soporte de transparencia de forma rápida y sencilla. </p>
</div>`,
				icon: 'image'
			},
			jpg: {
				title: 'Conversión de SVG a JPG',
				description: 'Transforma tus archivos SVG a formato JPG.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convertir SVG a JPG Online Gratis | Fácil y Rápido</h2>
  <p class="mb-4"> ¿Necesitas convertir tus <strong class="font-semibold">archivos SVG a imágenes JPG</strong>? Nuestro <strong class="font-semibold">convertidor online gratuito de SVG a JPG</strong> lo hace rápido y sencillo. Obtén imágenes JPG a partir de tus gráficos vectoriales escalables directamente en tu navegador, sin necesidad de instalar ningún software. Perfecto para imágenes complejas como fotografías o cuando el <strong class="font-semibold">tamaño del archivo es una preocupación importante</strong> y la <strong class="font-semibold">transparencia no es necesaria</strong>. </p>
  <h3 class="text-xl font-semibold mb-2">¿Por Qué Convertir de SVG a JPG?</h3>
  <p class="mb-4"> Si bien SVG (Scalable Vector Graphics) es excelente para gráficos independientes de la resolución, como logotipos e iconos que necesitan escalarse infinitamente, existen varias razones por las que podrías necesitar convertir tu <strong class="font-semibold">archivo SVG a JPG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Manejar Imágenes/Fotografías Complejas:</strong> JPG es excelente para imágenes complejas con muchos colores, como fotografías, una tarea para la que SVG no está diseñado.
    </li>
    <li>
      <strong class="font-semibold">Lograr Tamaños de Archivo Más Pequeños:</strong> JPG utiliza <strong class="font-semibold">compresión con pérdida</strong> para reducir significativamente el tamaño del archivo, lo que lo hace ideal cuando el <strong class="font-semibold">tamaño del archivo es una preocupación importante</strong>.
    </li>
    <li>
      <strong class="font-semibold">Mayor Compatibilidad:</strong> JPG es uno de los formatos de imagen más ampliamente compatibles en sitios web, software y dispositivos.
    </li>
    <li>
      <strong class="font-semibold">Facilidad de Uso en Editores Raster:</strong> Los JPG están basados en píxeles, lo que los hace fáciles de abrir y editar en software de gráficos raster estándar como Adobe Photoshop o editores online.
    </li>
  </ol>
  <p class="mb-4"> JPG es un formato raster ampliamente compatible, optimizado para imágenes fotográficas. Convertir <strong class="font-semibold">SVG a JPG</strong> te permite aprovechar las ventajas de JPG, particularmente su capacidad para manejar imágenes complejas de manera eficiente y lograr tamaños de archivo más pequeños, especialmente cuando <strong class="font-semibold">no se necesita transparencia</strong>. </p>
  <h3 class="text-xl font-semibold mb-2">Cómo Convertir Tu SVG a JPG Online:</h3>
  <p class="mb-4"> Convertir tus archivos SVG a JPG utilizando nuestra herramienta online gratuita es simple y lleva solo segundos. Sigue estos sencillos pasos: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Sube Tus Archivos SVG:</strong> Haz clic en el botón <strong> "Buscar Archivos" </strong> o arrastra y suelta tus archivos SVG en el área de carga. Nuestra herramienta admite la conversión de <strong class="font-semibold">hasta 20 archivos</strong> a la vez.
    </li>
    <li>
      <strong class="font-semibold">Espera la Conversión:</strong> Nuestra herramienta comenzará automáticamente el proceso de conversión, transformando tus vectores SVG en imágenes raster JPG. Espera brevemente a que se complete el proceso.
    </li>
    <li>
      <strong class="font-semibold">Descarga Tus JPG:</strong> Una vez que finalice la conversión, puedes descargar tus nuevos archivos de imagen JPG individualmente haciendo clic en la miniatura o el botón de descarga de cada archivo. Para conversiones múltiples, haz clic en el botón <strong> "Descargar Todo" </strong> para obtener un cómodo archivo ZIP que contenga todos tus JPG convertidos.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. JPG: Entendiendo los Formatos</h3>
  <p class="mb-4"> Para ayudarte a comprender cuándo es más adecuado cada formato, aquí tienes una breve comparación basada en sus propiedades principales: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de gráficos vectoriales.
    </li>
    <li>
      <strong class="font-semibold">Basado En:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> Infinitamente escalable sin perder calidad (independiente de la resolución).
    </li>
    <li>
      <strong class="font-semibold">Ideal Para:</strong> Logotipos, iconos, ilustraciones, gráficos minimalistas, animaciones, gráficos, gráficos que necesitan verse nítidos en cualquier tamaño.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong> Soportada.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Tamaño de archivo pequeño para gráficos simples, escala perfectamente, editable con herramientas de texto/vector, se puede buscar, admite animación.
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> No es ideal para imágenes complejas como fotografías, la compatibilidad puede variar en sistemas/software más antiguos.
    </li>
  </ul>
  <p class="font-semibold">
    <strong>JPG (Joint Photographic Experts Group):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de gráficos raster (basado en píxeles).
    </li>
    <li>
      <strong class="font-semibold">Basado En:</strong> Píxeles.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> No escalable sin perder calidad (dependiente de la resolución). La calidad se degrada cuando se amplía significativamente.
    </li>
    <li>
      <strong class="font-semibold">Ideal Para:</strong> Fotografías e imágenes complejas con muchos colores y degradados suaves.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong> NO Soportada.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> <strong class="font-semibold">Excelente para fotografías</strong>, logra tamaños de archivo muy pequeños utilizando <strong class="font-semibold">compresión con pérdida</strong>, ampliamente compatible.
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> La compresión con pérdida significa que se pierde algo de calidad permanentemente (no es ideal para imágenes con texto o líneas nítidas donde el máximo detalle es fundamental), no admite transparencia.
    </li>
  </ul>
  <p class="mb-4"> En última instancia, sirven para propósitos diferentes. Utiliza JPG cuando necesites una <strong class="font-semibold">imagen raster para fotografías o imágenes complejas</strong> y el <strong class="font-semibold">tamaño del archivo sea una preocupación importante</strong>, pero la <strong class="font-semibold">transparencia no sea necesaria</strong>. Utiliza SVG cuando la escalabilidad y la capacidad de edición sean tus principales preocupaciones. </p>
  <h3 class="text-xl font-semibold mb-2">Beneficios de Usar Nuestro Convertidor Gratuito de SVG a JPG:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completamente Gratis:</strong> Convierte tantos archivos SVG a JPG como necesites, sin ningún costo.
    </li>
    <li>
      <strong class="font-semibold">Herramienta Online:</strong> No necesitas descargar ni instalar ningún software. Convierte directamente en tu navegador web.
    </li>
    <li>
      <strong class="font-semibold">Rápido y Fácil:</strong> Nuestra interfaz simple y procesamiento rápido aseguran que obtengas tus archivos JPG en momentos.
    </li>
    <li>
      <strong class="font-semibold">Salida JPG Estándar:</strong> Convierte tu SVG a formato JPG estándar, adecuado para fotos e imágenes complejas donde el tamaño del archivo es importante.
    </li>
    <li>
      <strong class="font-semibold">Conversión por Lotes:</strong> Convierte múltiples archivos SVG simultáneamente, ahorrándote tiempo. Admite hasta 20 archivos por conversión.
    </li>
    <li>
      <strong class="font-semibold">Seguro:</strong> Tus archivos se procesan de forma segura y temporal en nuestros servidores y se eliminan después de la conversión.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Preguntas Frecuentes (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">¿Es gratuito este convertidor de SVG a JPG?</strong> Sí, nuestra herramienta online es completamente gratuita para todos.
    </li>
    <li>
      <strong class="font-semibold">¿Es seguro subir mis archivos?</strong> Absolutamente. Priorizamos tu privacidad y seguridad. Los archivos se procesan temporalmente y se eliminan de nuestros servidores poco después de la conversión.
    </li>
    <li>
      <strong class="font-semibold">¿La imagen JPG convertida perderá calidad?</strong> JPG utiliza <strong class="font-semibold">compresión con pérdida</strong>, lo que significa que se descartan algunos datos para lograr tamaños de archivo más pequeños. Si bien está optimizado para fotografías, la conversión de gráficos vectoriales detallados puede resultar en cierta pérdida de nitidez o detalle en comparación con el SVG original o un formato sin pérdida como PNG.
    </li>
    <li>
      <strong class="font-semibold">¿Cuál es la principal diferencia entre SVG y JPG?</strong> La diferencia clave es que SVG es un formato vectorial (se escala infinitamente), mientras que JPG es un formato raster (basado en píxeles, utiliza <strong class="font-semibold">compresión con pérdida</strong>, no admite transparencia, mejor para fotos).
    </li>
    <li>
      <strong class="font-semibold">¿Puedo convertir varios archivos SVG a la vez?</strong> Sí, nuestra herramienta te permite cargar y convertir hasta 20 archivos SVG simultáneamente.
    </li>
  </ul>
  <p> ¿Listo para convertir tus archivos SVG al formato JPG ampliamente compatible? ¡Comienza ahora haciendo clic en el botón <strong> "Buscar Archivos" </strong> de arriba! Obtén tus imágenes JPG compactas y ampliamente compatibles de forma rápida y sencilla. </p>
</div>`,
				icon: 'image'
			},
			pdf: {
				title: 'Conversión de SVG a PDF',
				description: 'Convierte tus archivos SVG a documentos PDF.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Convertir SVG a PDF Online Gratis | Fácil y Rápido</h2>
  <p class="mb-4"> ¿Necesitas convertir tus <strong class="font-semibold">archivos SVG a documentos PDF</strong>? Nuestro <strong class="font-semibold">convertidor online gratuito de SVG a PDF</strong> lo hace rápido y sencillo. Obtén <strong class="font-semibold">documentos PDF</strong> a partir de tus gráficos vectoriales escalables directamente en tu navegador, sin necesidad de instalar ningún software. Perfecto para <strong class="font-semibold">crear documentos, informes o archivos listos para imprimir</strong> a partir de tus gráficos vectoriales. </p>
  <h3 class="text-xl font-semibold mb-2">¿Por Qué Convertir de SVG a PDF?</h3>
  <p class="mb-4"> Si bien SVG (Scalable Vector Graphics) es excelente para gráficos web que necesitan escalarse infinitamente, existen varias razones por las que podrías necesitar convertir tu <strong class="font-semibold">archivo SVG a PDF</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Crear Documentos para Compartir e Imprimir:</strong> PDF es el formato universal para documentos, informes y archivos listos para imprimir, lo que garantiza que tu gráfico se vea igual en todas partes.
    </li>
    <li>
      <strong class="font-semibold">Preservar la Escalabilidad Vectorial en un Documento:</strong> A diferencia de la conversión a un formato raster (JPG, PNG), la conversión de SVG a PDF a menudo puede incrustar los datos vectoriales, lo que permite que el gráfico permanezca nítido cuando se hace zoom dentro del visor de PDF.
    </li>
    <li>
      <strong class="font-semibold">Formato de Distribución Estándar:</strong> Comparte tus gráficos fácilmente como archivos PDF altamente compatibles que se pueden ver en casi cualquier dispositivo y sistema operativo.
    </li>
  </ol>
  <p class="mb-4"> PDF es un <strong class="font-semibold">formato de documento estándar</strong>, ampliamente utilizado para compartir e imprimir profesional y personalmente. Convertir <strong class="font-semibold">SVG a PDF</strong> te permite utilizar tu gráfico vectorial dentro de un formato de documento estructurado, adecuado para presentaciones, informes o distribución digital. </p>
  <h3 class="text-xl font-semibold mb-2">Cómo Convertir Tu SVG a PDF Online:</h3>
  <p class="mb-4"> Convertir tus <strong class="font-semibold">archivos SVG a PDF</strong> utilizando nuestra herramienta online gratuita es simple y lleva solo segundos. Sigue estos sencillos pasos: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Sube Tus Archivos SVG:</strong> Haz clic en el botón <strong>"Buscar Archivos"</strong> o arrastra y suelta tus archivos SVG en el área de carga. Nuestra herramienta admite la conversión de <strong class="font-semibold">hasta 20 archivos</strong> a la vez.
    </li>
    <li>
      <strong class="font-semibold">Espera la Conversión:</strong> Nuestra herramienta comenzará automáticamente el proceso de conversión, transformando tus vectores SVG en documentos PDF. Espera brevemente a que se complete el proceso.
    </li>
    <li>
      <strong class="font-semibold">Descarga Tus PDF:</strong> Una vez que finalice la conversión, puedes descargar tus <strong class="font-semibold">nuevos archivos PDF</strong> individualmente haciendo clic en la miniatura o el botón de descarga de cada archivo. Para conversiones múltiples, haz clic en el botón <strong>"Descargar Todo"</strong> para obtener un cómodo archivo ZIP que contenga todos tus PDF convertidos.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG vs. PDF: Entendiendo los Formatos</h3>
  <p class="mb-4"> Para ayudarte a comprender cuándo es más adecuado cada formato, aquí tienes una <strong class="font-semibold">breve comparación</strong> basada en sus propiedades principales: </p>
  <p class="font-semibold">
    <strong class="font-semibold">SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de gráficos vectoriales.
    </li>
    <li>
      <strong class="font-semibold">Basado En:</strong> XML.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> Infinitamente escalable sin perder calidad (independiente de la resolución).
    </li>
    <li>
      <strong class="font-semibold">Ideal Para:</strong> Logotipos, iconos, ilustraciones, gráficos minimalistas, animaciones, gráficos, gráficos que necesitan verse nítidos en cualquier tamaño en la web.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong> Soportada.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> Tamaño de archivo pequeño para gráficos simples, escala perfectamente, editable con herramientas de texto/vector, se puede buscar, admite animación (para web).
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> No es ideal para imágenes complejas como fotografías, la compatibilidad puede variar en sistemas/software más antiguos, diseñado principalmente para la web.
    </li>
  </ul>
  <p class="font-semibold">
    <strong class="font-semibold">PDF (Portable Document Format):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Tipo:</strong> Formato de documento (puede contener gráficos vectoriales, imágenes raster, texto, formularios, etc.).
    </li>
    <li>
      <strong class="font-semibold">Basado En:</strong> Modelo de lenguaje PostScript.
    </li>
    <li>
      <strong class="font-semibold">Escalabilidad:</strong> El contenido puede ser escalable (como vectores incrustados) o de resolución fija (como imágenes raster incrustadas). A menudo conserva la calidad vectorial de SVG.
    </li>
    <li>
      <strong class="font-semibold">Ideal Para:</strong> Documentos, informes, libros electrónicos, formularios, archivos listos para imprimir, compartir diseños fijos.
    </li>
    <li>
      <strong class="font-semibold">Transparencia:</strong> Soportada dentro del formato, aunque puede acoplarse para la impresión.
    </li>
    <li>
      <strong class="font-semibold">Pros:</strong> <strong class="font-semibold">Ampliamente compatible para visualización e impresión</strong> en todos los dispositivos, conserva el diseño, <strong class="font-semibold">puede incrustar datos vectoriales de SVG</strong> para mantener la nitidez.
    </li>
    <li>
      <strong class="font-semibold">Contras:</strong> La edición puede ser compleja, el tamaño del archivo varía según la complejidad del contenido, no es principalmente un formato de imagen para la incrustación web (utiliza JPG/PNG/SVG en su lugar).
    </li>
  </ul>
  <p class="mb-4"> En última instancia, sirven para propósitos diferentes. Utiliza <strong class="font-semibold">PDF cuando necesites presentar tu gráfico como un documento</strong> para compartir, imprimir o incrustar calidad vectorial en un diseño fijo fácilmente. Utiliza <strong class="font-semibold">SVG cuando la escalabilidad y la capacidad de edición sean tus principales preocupaciones</strong> para el uso web. </p>
  <h3 class="text-xl font-semibold mb-2">Beneficios de Usar Nuestro Convertidor Gratuito de SVG a PDF:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completamente Gratis:</strong> Convierte tantos archivos SVG a PDF como necesites, sin ningún costo.
    </li>
    <li>
      <strong class="font-semibold">Herramienta Online:</strong> No necesitas descargar ni instalar ningún software. Convierte directamente en tu navegador web.
    </li>
    <li>
      <strong class="font-semibold">Rápido y Fácil:</strong> Nuestra interfaz simple y procesamiento rápido aseguran que obtengas tus archivos PDF en momentos.
    </li>
    <li>
      <strong class="font-semibold">Salida PDF de Alta Calidad:</strong> Convierte tu SVG a PDF, con el objetivo de preservar la calidad vectorial siempre que sea posible para obtener líneas y texto nítidos en el documento.
    </li>
    <li>
      <strong class="font-semibold">Conversión por Lotes:</strong> Convierte múltiples archivos SVG simultáneamente, ahorrándote tiempo. Admite hasta 20 archivos por conversión.
    </li>
    <li>
      <strong class="font-semibold">Seguro:</strong> Tus archivos se procesan de forma segura y temporal en nuestros servidores y se eliminan después de la conversión.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Preguntas Frecuentes (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">¿Es gratuito este convertidor de SVG a PDF?</strong> Sí, nuestra herramienta online es completamente gratuita para todos.
    </li>
    <li>
      <strong class="font-semibold">¿Es seguro subir mis archivos?</strong> Absolutamente. Priorizamos tu privacidad y seguridad. Los archivos se procesan temporalmente y se eliminan de nuestros servidores poco después de la conversión.
    </li>
    <li>
      <strong class="font-semibold">¿La imagen PDF convertida mantendrá la calidad?</strong> Sí, la conversión de SVG a PDF a menudo incrusta los datos vectoriales, lo que significa que el gráfico dentro del PDF debería permanecer nítido y escalable cuando se visualiza en diferentes niveles de zoom, preservando la calidad vectorial original mejor que la conversión a formatos raster.
    </li>
    <li>
      <strong class="font-semibold">¿Cuál es la principal diferencia entre SVG y PDF?</strong> La diferencia clave es que SVG es principalmente un formato de imagen vectorial para gráficos web, mientras que PDF es un formato de documento diseñado para presentar diseños fijos que pueden contener varios tipos de contenido, incluidos gráficos vectoriales, imágenes raster y texto.
    </li>
    <li>
      <strong class="font-semibold">¿Puedo convertir varios archivos SVG a la vez?</strong> Sí, nuestra herramienta te permite cargar y convertir hasta 20 archivos SVG simultáneamente.
    </li>
  </ul>
  <p> ¿Listo para convertir tus archivos SVG al versátil formato PDF? <strong class="font-semibold">¡Comienza ahora haciendo clic en el botón "Buscar Archivos" de arriba!</strong> Obtén tus <strong class="font-semibold">documentos PDF de alta calidad y fáciles de compartir</strong> de forma rápida y sencilla. </p>
</div>`,
				icon: 'file-text'
			},
			compress: {
				title: 'Compresión de SVG',
				description: 'Optimiza y reduce el tamaño de tus archivos SVG.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Comprimir y Optimizar Archivos SVG Online Gratis | Fácil y Rápido</h2>
  <p class="mb-4"> ¿Necesitas <strong class="font-semibold">comprimir u optimizar tus archivos SVG</strong> para la web? Nuestro <strong class="font-semibold">optimizador de SVG online gratuito</strong> lo hace rápido y sencillo. Reduce el tamaño de los archivos SVG para mejorar la velocidad de carga y el rendimiento del sitio web directamente en tu navegador, sin necesidad de instalar ningún software. Obtén <strong class="font-semibold">archivos SVG más pequeños y optimizados</strong>, perfectos para sitios web y aplicaciones de carga rápida. </p>
  <h3 class="text-xl font-semibold mb-2">¿Por Qué Comprimir u Optimizar Archivos SVG?</h3>
  <p class="mb-4"> Los archivos SVG, especialmente aquellos creados con software de edición vectorial, a menudo contienen datos innecesarios que aumentan el tamaño del archivo sin afectar la apariencia visual. Optimizar tus archivos SVG ofrece varios beneficios clave: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Carga Más Rápida del Sitio Web:</strong> Los archivos más pequeños significan que tus páginas web se cargan más rápido, lo que proporciona una mejor experiencia de usuario y potencialmente mejora tu clasificación en los motores de búsqueda.
    </li>
    <li>
      <strong class="font-semibold">Reducción del Uso de Ancho de Banda:</strong> Ahorra ancho de banda tanto para tu servidor como para tus visitantes, lo cual es crucial para usuarios móviles o sitios con mucho tráfico.
    </li>
    <li>
      <strong class="font-semibold">Rendimiento Mejorado:</strong> Los SVG optimizados se renderizan más rápido en los navegadores, lo que lleva a animaciones más fluidas y gráficos web más receptivos.
    </li>
    <li>
      <strong class="font-semibold">Eliminación de Datos Innecesarios:</strong> Deshazte de metadatos ocultos del editor, comentarios, capas ocultas, valores predeterminados y precisión decimal excesiva que inflan el tamaño del archivo.
    </li>
  </ol>
  <p class="mb-4"> Comprimir tu SVG consiste en limpiar el código para que el archivo sea lo más pequeño y eficiente posible, manteniendo la integridad visual del gráfico. Es un paso esencial para la optimización web. </p>
  <h3 class="text-xl font-semibold mb-2">Cómo Comprimir Tus Archivos SVG Online:</h3>
  <p class="mb-4"> Comprimir tus <strong class="font-semibold">archivos SVG</strong> utilizando nuestra herramienta online gratuita es simple y lleva solo segundos. Sigue estos sencillos pasos: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Sube Tus Archivos SVG:</strong> Haz clic en el botón <strong>"Buscar Archivos"</strong> o arrastra y suelta tus archivos SVG en el área de carga. Nuestra herramienta admite la compresión de <strong class="font-semibold">hasta 20 archivos</strong> a la vez.
    </li>
    <li>
      <strong class="font-semibold">Espera la Optimización:</strong> Nuestra herramienta comenzará automáticamente el proceso de compresión y optimización. Espera brevemente a que se complete el proceso.
    </li>
    <li>
      <strong class="font-semibold">Descarga Tus SVG Optimizados:</strong> Una vez que finalice la optimización, puedes descargar tus <strong class="font-semibold">nuevos archivos SVG más pequeños</strong> individualmente haciendo clic en la miniatura o el botón de descarga de cada archivo. Para varios archivos, haz clic en el botón <strong>"Descargar Todo"</strong> para obtener un cómodo archivo ZIP que contenga todos tus SVG comprimidos.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">¿Qué es la Optimización SVG?</h3>
  <p class="mb-4"> La optimización SVG es el proceso de analizar y limpiar el código XML subyacente de un archivo SVG para reducir su tamaño. Esto se logra eliminando información redundante, simplificando la estructura del código y aplicando técnicas específicas como reducir el número de decimales en los datos de la ruta. El objetivo es hacer que el archivo SVG sea más pequeño y rápido de procesar sin causar ningún cambio visible en el gráfico en sí. </p>
  <h3 class="text-xl font-semibold mb-2">Beneficios de Usar Nuestro Optimizador de SVG Gratuito:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completamente Gratis:</strong> Optimiza tantos archivos SVG como necesites, sin ningún costo.
    </li>
    <li>
      <strong class="font-semibold">Herramienta Online:</strong> No necesitas descargar ni instalar ningún software. Optimiza directamente en tu navegador web.
    </li>
    <li>
      <strong class="font-semibold">Rápido y Fácil:</strong> Nuestra interfaz simple y procesamiento rápido aseguran que obtengas tus archivos SVG optimizados en momentos.
    </li>
    <li>
      <strong class="font-semibold">Optimización de Alta Calidad:</strong> Nuestra herramienta está diseñada para reducir significativamente el tamaño del archivo manteniendo la integridad visual de tu gráfico SVG.
    </li>
    <li>
      <strong class="font-semibold">Compresión por Lotes:</strong> Optimiza múltiples archivos SVG simultáneamente, ahorrándote tiempo. Admite hasta 20 archivos por sesión.
    </li>
    <li>
      <strong class="font-semibold">Seguro:</strong> Tus archivos se procesan de forma segura y temporal en nuestros servidores y se eliminan después de la optimización.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Preguntas Frecuentes (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">¿Es gratuito este compresor de SVG?</strong> Sí, nuestra herramienta online es completamente gratuita para todos.
    </li>
    <li>
      <strong class="font-semibold">¿Es seguro subir mis archivos?</strong> Absolutamente. Priorizamos tu privacidad y seguridad. Los archivos se procesan temporalmente y se eliminan de nuestros servidores poco después de la optimización.
    </li>
    <li>
      <strong class="font-semibold">¿La compresión de archivos SVG pierde calidad?</strong> Nuestro proceso de optimización elimina principalmente datos innecesarios del código SVG. Está diseñado para lograr el tamaño de archivo más pequeño posible sin una pérdida de calidad visual notable. Configuraciones agresivas (no predeterminadas) *podrían* alterar potencialmente la apariencia si la precisión geométrica se reduce drásticamente, pero la optimización estándar es visualmente sin pérdidas.
    </li>
    <li>
      <strong class="font-semibold">¿Cuánto puedo reducir el tamaño del archivo?</strong> La cantidad de reducción varía mucho según la complejidad del archivo SVG original y cómo se creó. A menudo se logran reducciones del 20% hasta el 80% o más, especialmente para los SVG exportados desde software de edición.
    </li>
    <li>
      <strong class="font-semibold">¿Qué tipo de datos se eliminan durante la optimización?</strong> La optimización elimina elementos como metadatos del editor, comentarios, grupos vacíos, elementos ocultos, valores de atributos predeterminados y reduce el número de decimales en los datos de la ruta.
    </li>
    <li>
      <strong class="font-semibold">¿Puedo comprimir varios archivos SVG a la vez?</strong> Sí, nuestra herramienta te permite cargar y comprimir hasta 20 archivos SVG simultáneamente.
    </li>
  </ul>
  <p> ¿Listo para <strong class="font-semibold">optimizar tus archivos SVG</strong> para un mejor rendimiento web? <strong class="font-semibold">¡Comienza ahora haciendo clic en el botón "Buscar Archivos" de arriba!</strong> Obtén tus <strong class="font-semibold">archivos SVG más pequeños y optimizados</strong> de forma rápida y sencilla. </p>
</div>`,
				icon: 'zap'
			},
			view: {
				title: 'Visor de SVG',
				description: 'Visualiza rápidamente el contenido de tus archivos SVG.',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">Visor de SVG Online | Abre y Visualiza Archivos SVG Gratis | Fácil y Rápido</h2>
  <p class="mb-4"> ¿Necesitas <strong class="font-semibold">abrir y visualizar tus archivos SVG</strong> sin instalar software? Nuestro <strong class="font-semibold">visor de SVG online gratuito</strong> lo hace rápido y sencillo. Simplemente carga tus gráficos SVG y visualízalos al instante en tu navegador. Perfecto para revisar rápidamente archivos SVG en cualquier dispositivo. </p>
  <h3 class="text-xl font-semibold mb-2">¿Por Qué Usar un Visor de SVG Online?</h3>
  <p class="mb-4"> A veces solo necesitas ver qué hay dentro de un archivo SVG rápidamente, sin necesidad de un software de diseño complejo. Un visor de SVG online proporciona una solución conveniente: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">No Requiere Software:</strong> Visualiza archivos SVG directamente en tu navegador web en cualquier sistema operativo, sin necesidad de descargar o instalar programas especiales como Adobe Illustrator o Inkscape.
    </li>
    <li>
      <strong class="font-semibold">Acceso Rápido en Cualquier Lugar:</strong> Abre y revisa archivos SVG desde cualquier dispositivo con acceso a internet: ordenador de escritorio, portátil, tableta o smartphone.
    </li>
    <li>
      <strong class="font-semibold">Vista Previa Instantánea:</strong> Ve rápidamente cómo se ve tu gráfico SVG antes de usarlo en un sitio web, en un documento o de enviárselo a alguien.
    </li>
    <li>
      <strong class="font-semibold">Simple y Enfocado:</strong> Ve directamente a visualizar tu gráfico sin navegar por interfaces de edición complejas.
    </li>
  </ol>
  <p class="mb-4"> Usar un visor online gratuito es la forma más fácil de acceder y mostrar tus archivos SVG cuando estás lejos de tus herramientas de diseño habituales o necesitas una vista previa rápida. </p>
  <h3 class="text-xl font-semibold mb-2">Cómo Abrir y Visualizar Tus Archivos SVG Online:</h3>
  <p class="mb-4"> Usar nuestro <strong class="font-semibold">visor de SVG online</strong> es simple y lleva solo segundos. Sigue estos sencillos pasos: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">Sube Tus Archivos SVG:</strong> Haz clic en el botón <strong>"Subir SVG para Ver"</strong> o arrastra y suelta tus archivos SVG en el área de carga.
    </li>
    <li>
      <strong class="font-semibold">Espera el Procesamiento:</strong> Nuestra herramienta procesará rápidamente tus archivos SVG para su visualización.
    </li>
    <li>
      <strong class="font-semibold">Visualiza Tu SVG:</strong> Una vez procesado, tu gráfico SVG se mostrará directamente en la ventana de tu navegador. Si subiste varios archivos, generalmente puedes cambiar entre las vistas previas.
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">¿Qué es SVG?</h3>
  <p class="mb-4"> SVG significa <strong class="font-semibold">Scalable Vector Graphics</strong> (Gráficos Vectoriales Escalables). Es un formato de imagen vectorial basado en XML para gráficos bidimensionales. </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Formato Vectorial:</strong> A diferencia de los formatos raster (como JPG o PNG) hechos de píxeles, los SVG están hechos de descripciones matemáticas (trazados, formas, colores).
    </li>
    <li>
      <strong class="font-semibold">Escalable:</strong> La principal ventaja es que las imágenes SVG se pueden escalar hacia arriba o hacia abajo a cualquier tamaño sin perder calidad ni nitidez.
    </li>
    <li>
      <strong class="font-semibold">Amigable para la Web:</strong> Los SVG son ligeros para gráficos simples, basados en texto (se pueden buscar) e ideales para logotipos, iconos e ilustraciones en sitios web.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Beneficios de Usar Nuestro Visor de SVG Online Gratuito:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">Completamente Gratis:</strong> Abre y visualiza tantos archivos SVG como necesites, sin ningún costo.
    </li>
    <li>
      <strong class="font-semibold">Herramienta Online:</strong> No necesitas descargar ni instalar ningún software. Visualiza directamente en tu navegador web.
    </li>
    <li>
      <strong class="font-semibold">Acceso Rápido y Fácil:</strong> Diseñado para una visualización rápida de archivos con una interfaz simple e intuitiva.
    </li>
    <li>
      <strong class="font-semibold">No Requiere Software:</strong> Una excelente alternativa si no tienes instalado un software de edición vectorial dedicado.
    </li>
    <li>
      <strong class="font-semibold">Visualiza en Cualquier Dispositivo:</strong> Accede y usa el visor en ordenadores de escritorio, portátiles, tabletas y smartphones.
    </li>
    <li>
      <strong class="font-semibold">Seguro:</strong> Tus archivos se procesan de forma segura y temporal en nuestros servidores y se eliminan después de la visualización.
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Preguntas Frecuentes (FAQs)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">¿Es gratuito este visor de SVG?</strong> Sí, nuestra herramienta online es completamente gratuita para todos.
    </li>
    <li>
      <strong class="font-semibold">¿Es seguro subir mis archivos?</strong> Absolutamente. Priorizamos tu privacidad y seguridad. Los archivos se procesan temporalmente para su visualización y se eliminan de nuestros servidores poco después.
    </li>
    <li>
      <strong class="font-semibold">¿Se mostrará correctamente el SVG?</strong> El visor utiliza las capacidades de renderizado SVG nativas de tu navegador web, por lo que debería mostrar el gráfico según lo previsto. La compatibilidad con funciones SVG muy complejas o avanzadas a veces puede variar ligeramente entre navegadores.
    </li>
    <li>
      <strong class="font-semibold">¿Puedo hacer zoom o desplazarme por el SVG?</strong> Sí, normalmente puedes usar las funciones estándar de zoom y desplazamiento de tu navegador para explorar el gráfico SVG en detalle.
    </li>
    <li>
      <strong class="font-semibold">¿Qué navegadores son compatibles?</strong> Nuestro visor funciona en todos los navegadores web modernos, incluidos Chrome, Firefox, Safari, Edge y otros.
    </li>
    <li>
      <strong class="font-semibold">¿Puedo subir varios archivos SVG?</strong> Sí, puedes subir hasta 20 archivos SVG a la vez para previsualizar.
    </li>
  </ul>
  <p> ¿Listo para <strong class="font-semibold">visualizar tus archivos SVG al instante online</strong>? <strong class="font-semibold">¡Comienza ahora haciendo clic en el botón "Buscar Archivos" de arriba!</strong> Abre y ve tus <strong class="font-semibold">gráficos SVG</strong> de forma rápida y sencilla. </p>
</div>`,
				icon: 'eye'
			}
		},
		errorMessage: 'Error al convertir archivos. Por favor, revisa la consola.',
		noFilesReady: 'No hay archivos listos para descargar.',
		privacy:
			'Tus archivos se procesan de manera segura y se eliminan de nuestros servidores después de 1 hora.',
		footer: 'Todos los derechos reservados.',
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
				title: 'เครื่องมือแปลง SVG เป็น PNG',
				description: 'แปลงไฟล์ SVG ของคุณเป็นภาพ PNG คุณภาพสูง',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">แปลง SVG เป็น PNG ออนไลน์ ฟรี ง่ายและรวดเร็ว</h2>
  <p class="mb-4"> ต้องการแปลง <strong class="font-semibold">ไฟล์ SVG เป็นภาพ PNG</strong> หรือไม่? เครื่องมือ <strong class="font-semibold">แปลง SVG เป็น PNG ออนไลน์ฟรี</strong> ของเราทำให้ง่ายและรวดเร็ว รับภาพ PNG คุณภาพสูงแบบไม่สูญเสียจากกราฟิกเวกเตอร์ที่ปรับขนาดได้โดยตรงในเบราว์เซอร์ของคุณ โดยไม่ต้องติดตั้งซอฟต์แวร์ เหมาะสำหรับกราฟิกเว็บ ภาพที่ต้องการความโปร่งใส หรือเมื่อคุณต้องการรูปแบบแรสเตอร์ที่เข้ากันได้ในวงกว้าง </p>
  <h3 class="text-xl font-semibold mb-2">เหตุใดจึงต้องแปลงจาก SVG เป็น PNG</h3>
  <p class="mb-4"> แม้ว่า SVG (Scalable Vector Graphics) จะยอดเยี่ยมสำหรับกราฟิกที่ไม่ขึ้นกับความละเอียด เช่น โลโก้และไอคอนที่ต้องปรับขนาดได้อย่างไม่สิ้นสุด แต่ก็มีหลายเหตุผลที่คุณอาจต้องแปลง <strong class="font-semibold">ไฟล์ SVG เป็น PNG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">รองรับความโปร่งใส:</strong> แตกต่างจาก JPG ตรงที่ <strong class="font-semibold">PNG รองรับความโปร่งใสอย่างเต็มที่</strong> หากการออกแบบของคุณจำเป็นต้องวางบนพื้นหลังและต้องการให้บางส่วนของภาพโปร่งใส PNG คือรูปแบบที่คุณต้องการ
    </li>
    <li>
      <strong class="font-semibold">ความเข้ากันได้ที่กว้างกว่า:</strong> แม้ว่าเบราว์เซอร์สมัยใหม่จะรองรับ SVG ได้ดี แต่ซอฟต์แวร์เก่า แอปพลิเคชันเฉพาะ หรือแพลตฟอร์มบางอย่างอาจต้องการรูปแบบแรสเตอร์ เช่น PNG
    </li>
    <li>
      <strong class="font-semibold">ภาพที่ซับซ้อน:</strong> ในขณะที่ SVG มีปัญหาในการจัดการรายละเอียดของภาพถ่าย แต่ PNG สามารถจัดการภาพที่ซับซ้อนที่มีหลายสีและไล่ระดับสีได้อย่างมีประสิทธิภาพโดยใช้ <strong class="font-semibold">การบีบอัดแบบไม่สูญเสีย</strong> ทำให้มั่นใจในความคมชัดของภาพสูง (ภายในขีดจำกัดความละเอียด) PNG เป็นรูปแบบแรสเตอร์ที่แข็งแกร่งและมักนิยมใช้สำหรับกราฟิกเว็บที่มีรายละเอียด
    </li>
    <li>
      <strong class="font-semibold">ใช้งานง่ายในโปรแกรมแก้ไขแรสเตอร์:</strong> PNG เป็นแบบพิกเซล ทำให้เปิดและแก้ไขได้ง่ายในซอฟต์แวร์กราฟิกแรสเตอร์มาตรฐาน เช่น Adobe Photoshop หรือโปรแกรมแก้ไขออนไลน์
    </li>
  </ol>
  <p class="mb-4"> PNG เป็นรูปแบบแรสเตอร์ที่หลากหลาย ซึ่งเบราว์เซอร์หลักทุกตัวรู้จักและแสดงผลได้ การแปลง <strong class="font-semibold">SVG เป็น PNG</strong> ช่วยให้คุณใช้ประโยชน์จากจุดแข็งของ PNG โดยเฉพาะอย่างยิ่ง <strong class="font-semibold">ความโปร่งใส</strong> และความเข้ากันได้ที่กว้างขวาง </p>
  <h3 class="text-xl font-semibold mb-2">วิธีแปลง SVG เป็น PNG ออนไลน์:</h3>
  <p class="mb-4"> การแปลงไฟล์ SVG เป็น PNG โดยใช้เครื่องมือออนไลน์ฟรีของเรานั้นง่ายและใช้เวลาเพียงไม่กี่วินาที ทำตามขั้นตอนง่ายๆ เหล่านี้: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">อัปโหลดไฟล์ SVG ของคุณ:</strong> คลิกปุ่ม <strong class="font-semibold"> "เรียกดูไฟล์" </strong> และเลือกไฟล์ SVG ที่คุณต้องการแปลง คุณยังสามารถลากและวางไฟล์ SVG ของคุณลงในพื้นที่วางได้โดยตรง เครื่องมือของเรารองรับการแปลง <strong class="font-semibold">สูงสุด 20 ไฟล์</strong> พร้อมกัน
    </li>
    <li>
      <strong class="font-semibold">รอการแปลง:</strong> เครื่องมือของเราจะเริ่มกระบวนการแปลงโดยอัตโนมัติ เปลี่ยนเวกเตอร์ SVG ของคุณให้เป็นภาพแรสเตอร์ PNG คุณภาพสูง รอสักครู่เพื่อให้กระบวนการเสร็จสมบูรณ์
    </li>
    <li>
      <strong class="font-semibold">ดาวน์โหลด PNG ของคุณ:</strong> เมื่อการแปลงเสร็จสิ้น คุณสามารถดาวน์โหลดไฟล์ภาพ PNG ใหม่ของคุณทีละไฟล์ได้โดยคลิกที่รูปขนาดย่อหรือปุ่มดาวน์โหลดสำหรับแต่ละไฟล์ สำหรับการแปลงหลายไฟล์ ให้คลิกปุ่ม <strong class="font-semibold"> "ดาวน์โหลดทั้งหมด" </strong> เพื่อรับไฟล์ ZIP ที่สะดวกซึ่งมี PNG ที่แปลงแล้วทั้งหมดของคุณ
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG กับ PNG: ทำความเข้าใจรูปแบบ</h3>
  <p class="mb-4"> เพื่อช่วยให้คุณเข้าใจว่ารูปแบบใดเหมาะสมที่สุดเมื่อใด นี่คือการเปรียบเทียบอย่างรวดเร็วตามคุณสมบัติหลัก: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบกราฟิกแบบเวกเตอร์
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> XML
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> ปรับขนาดได้อย่างไม่สิ้นสุดโดยไม่สูญเสียคุณภาพ (ไม่ขึ้นกับความละเอียด)
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> โลโก้ ไอคอน ภาพประกอบ กราฟิกแบบมินิมอล ภาพเคลื่อนไหว แผนภูมิ กราฟิกที่ต้องคมชัดในทุกขนาด
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong> รองรับ
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong> ขนาดไฟล์เล็กสำหรับกราฟิกธรรมดา ปรับขนาดได้อย่างสมบูรณ์แบบ แก้ไขได้ด้วยเครื่องมือข้อความ/เวกเตอร์ ค้นหาได้ รองรับภาพเคลื่อนไหว
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> ไม่เหมาะสำหรับภาพที่ซับซ้อน เช่น ภาพถ่าย การรองรับอาจแตกต่างกันไปในระบบ/ซอฟต์แวร์เก่า
    </li>
  </ul>
  <p class="font-semibold">
    <strong>PNG (Portable Network Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบกราฟิกแบบแรสเตอร์ (อิงตามพิกเซล)
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> พิกเซล
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> ไม่สามารถปรับขนาดได้โดยไม่สูญเสียคุณภาพ (ขึ้นกับความละเอียด) คุณภาพจะลดลงเมื่อขยายขนาดมาก
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> กราฟิกเว็บ ภาพที่ต้องการความโปร่งใส (เช่น โลโก้บนภาพถ่าย) ภาพประกอบ ภาพที่มีเส้นคมชัดและพื้นที่สีทึบ
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong>
      <strong class="font-semibold">รองรับอย่างเต็มที่</strong>
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong>
      <strong class="font-semibold">การบีบอัดแบบไม่สูญเสีย</strong> (รักษาคุณภาพ) รองรับความโปร่งใส เข้ากันได้กับเบราว์เซอร์และซอฟต์แวร์อย่างกว้างขวาง ดีกว่า SVG สำหรับภาพที่ซับซ้อนที่มีหลายสี (แต่ไม่เหมาะสำหรับภาพถ่ายเหมือน JPG)
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> อาจทำให้ขนาดไฟล์ใหญ่กว่า SVG สำหรับกราฟิกธรรมดา ไม่สามารถปรับขนาดได้โดยไม่สูญเสียคุณภาพ ไม่ใช่ตัวเลือกที่ดีที่สุดสำหรับการพิมพ์ที่ความละเอียดสูงมาก <em class="italic">เมื่อเทียบกับเวกเตอร์</em>
    </li>
  </ul>
  <p class="mb-4"> ในที่สุด พวกมันก็มีวัตถุประสงค์ที่แตกต่างกัน ใช้ PNG เมื่อคุณต้องการ <strong class="font-semibold">ภาพแรสเตอร์ที่มีความโปร่งใส</strong> หรือสำหรับกราฟิกเว็บทั่วไปที่คุณภาพแบบไม่สูญเสียและความเข้ากันได้ในวงกว้างเป็นสิ่งสำคัญ ใช้ SVG เมื่อความสามารถในการปรับขนาดและความสามารถในการแก้ไขเป็นข้อกังวลหลักของคุณ </p>
  <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการใช้เครื่องมือแปลง SVG เป็น PNG ฟรีของเรา:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ฟรีโดยสมบูรณ์:</strong> แปลงไฟล์ SVG เป็น PNG ได้มากเท่าที่คุณต้องการ โดยไม่มีค่าใช้จ่ายใดๆ
    </li>
    <li>
      <strong class="font-semibold">เครื่องมือออนไลน์:</strong> ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ใดๆ แปลงโดยตรงในเว็บเบราว์เซอร์ของคุณ
    </li>
    <li>
      <strong class="font-semibold">รวดเร็วและง่ายดาย:</strong> อินเทอร์เฟซที่เรียบง่ายและการประมวลผลที่รวดเร็วของเราช่วยให้คุณได้รับไฟล์ PNG ในเวลาไม่กี่นาที
    </li>
    <li>
      <strong class="font-semibold">เอาต์พุตคุณภาพสูง:</strong> แปลง SVG เป็น PNG โดยใช้การบีบอัดแบบไม่สูญเสียเพื่อรักษาคุณภาพของภาพ
    </li>
    <li>
      <strong class="font-semibold">การแปลงเป็นชุด:</strong> แปลงไฟล์ SVG หลายไฟล์พร้อมกัน ช่วยประหยัดเวลาของคุณ รองรับสูงสุด 20 ไฟล์ต่อการแปลง
    </li>
    <li>
      <strong class="font-semibold">ปลอดภัย:</strong> ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและชั่วคราวบนเซิร์ฟเวอร์ของเรา และจะถูกลบออกหลังจากการแปลง
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">คำถามที่พบบ่อย (FAQ)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">เครื่องมือแปลง SVG เป็น PNG นี้ฟรีหรือไม่?</strong> ใช่ เครื่องมือออนไลน์ของเราใช้งานได้ฟรีสำหรับทุกคน
    </li>
    <li>
      <strong class="font-semibold">การอัปโหลดไฟล์ของฉันปลอดภัยหรือไม่?</strong> ปลอดภัยอย่างแน่นอน เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณ ไฟล์จะถูกประมวลผลชั่วคราวและลบออกจากเซิร์ฟเวอร์ของเราหลังจากทำการแปลงไม่นาน
    </li>
    <li>
      <strong class="font-semibold">ภาพ PNG ที่แปลงแล้วจะสูญเสียคุณภาพหรือไม่?</strong> PNG ใช้การบีบอัดแบบไม่สูญเสีย ในขณะที่การแปลงจากรูปแบบเวกเตอร์ (SVG) เป็นรูปแบบแรสเตอร์ (PNG) เกี่ยวข้องกับการกำหนดภาพที่ความละเอียดเฉพาะ การบีบอัด PNG เองจะไม่ทำให้คุณภาพของภาพลดลงจากความละเอียดที่กำหนดนั้น
    </li>
    <li>
      <strong class="font-semibold">ความแตกต่างหลักระหว่าง SVG และ PNG คืออะไร?</strong> ความแตกต่างหลักคือ SVG เป็นรูปแบบเวกเตอร์ (ปรับขนาดได้อย่างไม่สิ้นสุด) และ PNG เป็นรูปแบบแรสเตอร์ (อิงตามพิกเซล รองรับความโปร่งใสและการบีบอัดแบบไม่สูญเสีย)
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถแปลงไฟล์ SVG หลายไฟล์พร้อมกันได้หรือไม่?</strong> ใช่ เครื่องมือของเราช่วยให้คุณอัปโหลดและแปลงไฟล์ SVG ได้สูงสุด 20 ไฟล์พร้อมกัน
    </li>
  </ul>
  <p> พร้อมที่จะแปลงไฟล์ SVG ของคุณเป็นรูปแบบ PNG ที่หลากหลายแล้วหรือยัง? เริ่มต้นทันทีโดยคลิกปุ่ม <strong class="font-semibold"> "เรียกดูไฟล์" </strong> ด้านบน! รับภาพ PNG คุณภาพสูงที่รองรับความโปร่งใสได้อย่างรวดเร็วและง่ายดาย </p>
</div>`,
				icon: 'image'
			},
			jpg: {
				title: 'เครื่องมือแปลง SVG เป็น JPG',
				description: 'แปลงไฟล์ SVG ของคุณเป็นรูปแบบภาพ JPG มาตรฐาน',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">แปลง SVG เป็น JPG ออนไลน์ ฟรี ง่ายและรวดเร็ว</h2>
  <p class="mb-4"> ต้องการแปลง <strong class="font-semibold">ไฟล์ SVG ของคุณเป็นภาพ JPG</strong> หรือไม่? เครื่องมือ <strong class="font-semibold">แปลง SVG เป็น JPG ออนไลน์ฟรี</strong> ของเราทำให้ง่ายและรวดเร็ว รับภาพ JPG จากกราฟิกเวกเตอร์ที่ปรับขนาดได้ของคุณโดยตรงในเบราว์เซอร์ของคุณ โดยไม่ต้องติดตั้งซอฟต์แวร์ เหมาะสำหรับภาพที่ซับซ้อน เช่น ภาพถ่าย หรือเมื่อ <strong class="font-semibold">ขนาดไฟล์เป็นเรื่องสำคัญ</strong> และ <strong class="font-semibold">ไม่ต้องการความโปร่งใส</strong> </p>
  <h3 class="text-xl font-semibold mb-2">เหตุใดจึงต้องแปลงจาก SVG เป็น JPG</h3>
  <p class="mb-4"> แม้ว่า SVG (Scalable Vector Graphics) จะยอดเยี่ยมสำหรับกราฟิกที่ไม่ขึ้นกับความละเอียด เช่น โลโก้และไอคอนที่ต้องปรับขนาดได้อย่างไม่สิ้นสุด แต่ก็มีหลายเหตุผลที่คุณอาจต้องแปลง <strong class="font-semibold">ไฟล์ SVG ของคุณเป็น JPG</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">จัดการภาพ/ภาพถ่ายที่ซับซ้อน:</strong> JPG ยอดเยี่ยมสำหรับภาพที่ซับซ้อนที่มีหลายสี เช่น ภาพถ่าย ซึ่งเป็นงานที่ SVG ไม่ได้ออกแบบมาเพื่อทำ
    </li>
    <li>
      <strong class="font-semibold">เพื่อให้ได้ขนาดไฟล์ที่เล็กลง:</strong> JPG ใช้ <strong class="font-semibold">การบีบอัดแบบสูญเสีย</strong> เพื่อลดขนาดไฟล์ลงอย่างมาก ทำให้เหมาะอย่างยิ่งเมื่อ <strong class="font-semibold">ขนาดไฟล์เป็นเรื่องสำคัญ</strong>
    </li>
    <li>
      <strong class="font-semibold">ความเข้ากันได้ที่กว้างกว่า:</strong> JPG เป็นหนึ่งในรูปแบบภาพที่ได้รับการสนับสนุนอย่างกว้างขวางที่สุดในเว็บไซต์ ซอฟต์แวร์ และอุปกรณ์ต่างๆ
    </li>
    <li>
      <strong class="font-semibold">ใช้งานง่ายในโปรแกรมแก้ไขแรสเตอร์:</strong> JPG เป็นแบบพิกเซล ทำให้เปิดและแก้ไขได้ง่ายในซอฟต์แวร์กราฟิกแรสเตอร์มาตรฐาน เช่น Adobe Photoshop หรือโปรแกรมแก้ไขออนไลน์
    </li>
  </ol>
  <p class="mb-4"> JPG เป็นรูปแบบแรสเตอร์ที่ได้รับการสนับสนุนอย่างกว้างขวาง ซึ่งปรับให้เหมาะสมสำหรับภาพถ่าย การแปลง <strong class="font-semibold">SVG เป็น JPG</strong> ช่วยให้คุณใช้ประโยชน์จากจุดแข็งของ JPG โดยเฉพาะอย่างยิ่งความสามารถในการจัดการภาพที่ซับซ้อนได้อย่างมีประสิทธิภาพและเพื่อให้ได้ขนาดไฟล์ที่เล็กลง โดยเฉพาะอย่างยิ่งเมื่อ <strong class="font-semibold">ไม่ต้องการความโปร่งใส</strong> </p>
  <h3 class="text-xl font-semibold mb-2">วิธีแปลง SVG เป็น JPG ออนไลน์:</h3>
  <p class="mb-4"> การแปลงไฟล์ SVG ของคุณเป็น JPG โดยใช้เครื่องมือออนไลน์ฟรีของเรานั้นง่ายและใช้เวลาเพียงไม่กี่วินาที ทำตามขั้นตอนง่ายๆ เหล่านี้: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">อัปโหลดไฟล์ SVG ของคุณ:</strong> คลิกปุ่ม <strong class="font-semibold"> "เรียกดูไฟล์" </strong> หรือลากและวางไฟล์ SVG ของคุณลงในพื้นที่วาง เครื่องมือของเรารองรับการแปลง <strong class="font-semibold">สูงสุด 20 ไฟล์</strong> พร้อมกัน
    </li>
    <li>
      <strong class="font-semibold">รอการแปลง:</strong> เครื่องมือของเราจะเริ่มกระบวนการแปลงโดยอัตโนมัติ เปลี่ยนเวกเตอร์ SVG ของคุณให้เป็นภาพแรสเตอร์ JPG รอสักครู่เพื่อให้กระบวนการเสร็จสมบูรณ์
    </li>
    <li>
      <strong class="font-semibold">ดาวน์โหลด JPG ของคุณ:</strong> เมื่อการแปลงเสร็จสิ้น คุณสามารถดาวน์โหลดไฟล์ภาพ JPG ใหม่ของคุณทีละไฟล์ได้โดยคลิกที่รูปขนาดย่อหรือปุ่มดาวน์โหลดสำหรับแต่ละไฟล์ สำหรับการแปลงหลายไฟล์ ให้คลิกปุ่ม <strong class="font-semibold"> "ดาวน์โหลดทั้งหมด" </strong> เพื่อรับไฟล์ ZIP ที่สะดวกซึ่งมี JPG ที่แปลงแล้วทั้งหมดของคุณ
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG กับ JPG: ทำความเข้าใจรูปแบบ</h3>
  <p class="mb-4"> เพื่อช่วยให้คุณเข้าใจว่ารูปแบบใดเหมาะสมที่สุดเมื่อใด นี่คือการเปรียบเทียบอย่างรวดเร็วตามคุณสมบัติหลัก: </p>
  <p class="font-semibold">
    <strong>SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบกราฟิกแบบเวกเตอร์
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> XML
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> ปรับขนาดได้อย่างไม่สิ้นสุดโดยไม่สูญเสียคุณภาพ (ไม่ขึ้นกับความละเอียด)
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> โลโก้ ไอคอน ภาพประกอบ กราฟิกแบบมินิมอล ภาพเคลื่อนไหว แผนภูมิ กราฟิกที่ต้องคมชัดในทุกขนาด
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong> รองรับ
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong> ขนาดไฟล์เล็กสำหรับกราฟิกธรรมดา ปรับขนาดได้อย่างสมบูรณ์แบบ แก้ไขได้ด้วยเครื่องมือข้อความ/เวกเตอร์ ค้นหาได้ รองรับภาพเคลื่อนไหว
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> ไม่เหมาะสำหรับภาพที่ซับซ้อน เช่น ภาพถ่าย การรองรับอาจแตกต่างกันไปในระบบ/ซอฟต์แวร์เก่า
    </li>
  </ul>
  <p class="font-semibold">
    <strong>JPG (Joint Photographic Experts Group):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบกราฟิกแบบแรสเตอร์ (อิงตามพิกเซล)
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> พิกเซล
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> ไม่สามารถปรับขนาดได้โดยไม่สูญเสียคุณภาพ (ขึ้นกับความละเอียด) คุณภาพจะลดลงเมื่อขยายขนาดมาก
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> ภาพถ่ายและภาพที่ซับซ้อนที่มีหลายสีและไล่ระดับสีเรียบ
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong> ไม่รองรับ
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong> <strong class="font-semibold">ยอดเยี่ยมสำหรับภาพถ่าย</strong> ให้ขนาดไฟล์ที่เล็กมากโดยใช้ <strong class="font-semibold">การบีบอัดแบบสูญเสีย</strong> เข้ากันได้กับเบราว์เซอร์และซอฟต์แวร์อย่างกว้างขวาง
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> การบีบอัดแบบสูญเสียหมายถึงคุณภาพบางส่วนสูญหายไปอย่างถาวร (ไม่เหมาะสำหรับภาพที่มีข้อความหรือเส้นคมชัดที่ต้องการรายละเอียดสูงสุด) ไม่รองรับความโปร่งใส
    </li>
  </ul>
  <p class="mb-4"> ในที่สุด พวกมันก็มีวัตถุประสงค์ที่แตกต่างกัน ใช้ JPG เมื่อคุณต้องการ <strong class="font-semibold">ภาพแรสเตอร์สำหรับภาพถ่ายหรือภาพที่ซับซ้อน</strong> และ <strong class="font-semibold">ขนาดไฟล์เป็นเรื่องสำคัญ</strong> แต่ <strong class="font-semibold">ไม่ต้องการความโปร่งใส</strong> ใช้ SVG เมื่อความสามารถในการปรับขนาดและความสามารถในการแก้ไขเป็นข้อกังวลหลักของคุณ </p>
  <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการใช้เครื่องมือแปลง SVG เป็น JPG ฟรีของเรา:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ฟรีโดยสมบูรณ์:</strong> แปลงไฟล์ SVG เป็น JPG ได้มากเท่าที่คุณต้องการ โดยไม่มีค่าใช้จ่ายใดๆ
    </li>
    <li>
      <strong class="font-semibold">เครื่องมือออนไลน์:</strong> ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ใดๆ แปลงโดยตรงในเว็บเบราว์เซอร์ของคุณ
    </li>
    <li>
      <strong class="font-semibold">รวดเร็วและง่ายดาย:</strong> อินเทอร์เฟซที่เรียบง่ายและการประมวลผลที่รวดเร็วของเราช่วยให้คุณได้รับไฟล์ JPG ในเวลาไม่กี่นาที
    </li>
    <li>
      <strong class="font-semibold">เอาต์พุต JPG มาตรฐาน:</strong> แปลง SVG ของคุณเป็นรูปแบบ JPG มาตรฐาน เหมาะสำหรับภาพถ่ายและภาพที่ซับซ้อนที่ขนาดไฟล์มีความสำคัญ
    </li>
    <li>
      <strong class="font-semibold">การแปลงเป็นชุด:</strong> แปลงไฟล์ SVG หลายไฟล์พร้อมกัน ช่วยประหยัดเวลาของคุณ รองรับสูงสุด 20 ไฟล์ต่อการแปลง
    </li>
    <li>
      <strong class="font-semibold">ปลอดภัย:</strong> ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและชั่วคราวบนเซิร์ฟเวอร์ของเรา และจะถูกลบออกหลังจากการแปลง
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">คำถามที่พบบ่อย (FAQ)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">เครื่องมือแปลง SVG เป็น JPG นี้ฟรีหรือไม่?</strong> ใช่ เครื่องมือออนไลน์ของเราใช้งานได้ฟรีสำหรับทุกคน
    </li>
    <li>
      <strong class="font-semibold">การอัปโหลดไฟล์ของฉันปลอดภัยหรือไม่?</strong> ปลอดภัยอย่างแน่นอน เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณ ไฟล์จะถูกประมวลผลชั่วคราวและลบออกจากเซิร์ฟเวอร์ของเราหลังจากทำการแปลงไม่นาน
    </li>
    <li>
      <strong class="font-semibold">ภาพ JPG ที่แปลงแล้วจะสูญเสียคุณภาพหรือไม่?</strong> JPG ใช้ <strong class="font-semibold">การบีบอัดแบบสูญเสีย</strong> ซึ่งหมายถึงข้อมูลบางส่วนถูกทิ้งเพื่อให้ได้ขนาดไฟล์ที่เล็กลง แม้ว่าจะปรับให้เหมาะสมสำหรับภาพถ่าย การแปลงกราฟิกเวกเตอร์ที่มีรายละเอียดอาจทำให้สูญเสียความคมชัดหรือรายละเอียดบางส่วนเมื่อเทียบกับ SVG ต้นฉบับหรือรูปแบบที่ไม่สูญเสีย เช่น PNG
    </li>
    <li>
      <strong class="font-semibold">ความแตกต่างหลักระหว่าง SVG และ JPG คืออะไร?</strong> ความแตกต่างหลักคือ SVG เป็นรูปแบบเวกเตอร์ (ปรับขนาดได้อย่างไม่สิ้นสุด) ในขณะที่ JPG เป็นรูปแบบแรสเตอร์ (อิงตามพิกเซล ใช้ <strong class="font-semibold">การบีบอัดแบบสูญเสีย</strong> ไม่รองรับความโปร่งใส เหมาะสำหรับภาพถ่าย)
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถแปลงไฟล์ SVG หลายไฟล์พร้อมกันได้หรือไม่?</strong> ใช่ เครื่องมือของเราช่วยให้คุณอัปโหลดและแปลงไฟล์ SVG ได้สูงสุด 20 ไฟล์พร้อมกัน
    </li>
  </ul>
  <p> พร้อมที่จะแปลงไฟล์ SVG ของคุณเป็นรูปแบบ JPG ที่ได้รับการสนับสนุนอย่างกว้างขวางแล้วหรือยัง? เริ่มต้นทันทีโดยคลิกปุ่ม <strong class="font-semibold"> "เรียกดูไฟล์" </strong> ด้านบน! รับภาพ JPG ขนาดกะทัดรัดที่เข้ากันได้ในวงกว้างของคุณอย่างรวดเร็วและง่ายดาย </p>
</div>`,
				icon: 'image'
			},
			pdf: {
				title: 'เครื่องมือแปลง SVG เป็น PDF',
				description: 'แปลงไฟล์ SVG ของคุณเป็นเอกสาร PDF ที่เข้าถึงได้สากล',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">แปลง SVG เป็น PDF ออนไลน์ ฟรี ง่ายและรวดเร็ว</h2>
  <p class="mb-4"> ต้องการแปลง <strong class="font-semibold">ไฟล์ SVG เป็นเอกสาร PDF</strong> หรือไม่? เครื่องมือ <strong class="font-semibold">แปลง SVG เป็น PDF ออนไลน์ฟรี</strong> ของเราทำให้ง่ายและรวดเร็ว รับ <strong class="font-semibold">เอกสาร PDF</strong> จากกราฟิกเวกเตอร์ที่ปรับขนาดได้ของคุณโดยตรงในเบราว์เซอร์ของคุณ โดยไม่ต้องติดตั้งซอฟต์แวร์ เหมาะสำหรับ <strong class="font-semibold">การสร้างเอกสาร รายงาน หรือไฟล์พร้อมพิมพ์</strong> จากกราฟิกเวกเตอร์ของคุณ </p>
  <h3 class="text-xl font-semibold mb-2">เหตุใดจึงต้องแปลงจาก SVG เป็น PDF</h3>
  <p class="mb-4"> แม้ว่า SVG (Scalable Vector Graphics) จะยอดเยี่ยมสำหรับกราฟิกเว็บที่ต้องปรับขนาดได้อย่างไม่สิ้นสุด แต่ก็มีหลายเหตุผลที่คุณอาจต้องแปลง <strong class="font-semibold">ไฟล์ SVG เป็น PDF</strong>: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">สร้างเอกสารสำหรับการแบ่งปันและการพิมพ์:</strong> PDF เป็นรูปแบบสากลสำหรับเอกสาร รายงาน และไฟล์พร้อมพิมพ์ ทำให้มั่นใจได้ว่ากราฟิกของคุณจะดูเหมือนกันในทุกที่
    </li>
    <li>
      <strong class="font-semibold">รักษาความสามารถในการปรับขนาดเวกเตอร์ในเอกสาร:</strong> แตกต่างจากการแปลงเป็นรูปแบบแรสเตอร์ (JPG, PNG) การแปลง SVG เป็น PDF มักจะสามารถฝังข้อมูลเวกเตอร์ได้ ทำให้กราฟิกยังคงคมชัดเมื่อซูมภายในโปรแกรมดู PDF
    </li>
    <li>
      <strong class="font-semibold">รูปแบบการเผยแพร่มาตรฐาน:</strong> แชร์กราฟิกของคุณได้อย่างง่ายดายในรูปแบบไฟล์ PDF ที่เข้ากันได้สูง ซึ่งสามารถดูได้บนอุปกรณ์และระบบปฏิบัติการเกือบทุกชนิด
    </li>
  </ol>
  <p class="mb-4"> PDF เป็น <strong class="font-semibold">รูปแบบเอกสารมาตรฐาน</strong> ซึ่งใช้กันอย่างแพร่หลายสำหรับการแบ่งปันและการพิมพ์ทั้งในระดับมืออาชีพและส่วนตัว การแปลง <strong class="font-semibold">SVG เป็น PDF</strong> ช่วยให้คุณใช้กราฟิกเวกเตอร์ของคุณภายในรูปแบบเอกสารที่มีโครงสร้าง เหมาะสำหรับงานนำเสนอ รายงาน หรือการเผยแพร่ดิจิทัล </p>
  <h3 class="text-xl font-semibold mb-2">วิธีแปลง SVG เป็น PDF ออนไลน์:</h3>
  <p class="mb-4"> การแปลง <strong class="font-semibold">ไฟล์ SVG เป็น PDF</strong> โดยใช้เครื่องมือออนไลน์ฟรีของเรานั้นง่ายและใช้เวลาเพียงไม่กี่วินาที ทำตามขั้นตอนง่ายๆ เหล่านี้: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">อัปโหลดไฟล์ SVG ของคุณ:</strong> คลิกปุ่ม <strong class="font-semibold">"เรียกดูไฟล์"</strong> หรือลากและวางไฟล์ SVG ของคุณลงในพื้นที่วาง เครื่องมือของเรารองรับการแปลง <strong class="font-semibold">สูงสุด 20 ไฟล์</strong> พร้อมกัน
    </li>
    <li>
      <strong class="font-semibold">รอการแปลง:</strong> เครื่องมือของเราจะเริ่มกระบวนการแปลงโดยอัตโนมัติ เปลี่ยนเวกเตอร์ SVG ของคุณให้เป็นเอกสาร PDF รอสักครู่เพื่อให้กระบวนการเสร็จสมบูรณ์
    </li>
    <li>
      <strong class="font-semibold">ดาวน์โหลด PDF ของคุณ:</strong> เมื่อการแปลงเสร็จสิ้น คุณสามารถดาวน์โหลด <strong class="font-semibold">ไฟล์ PDF ใหม่</strong> ของคุณทีละไฟล์ได้โดยคลิกที่รูปขนาดย่อหรือปุ่มดาวน์โหลดสำหรับแต่ละไฟล์ สำหรับการแปลงหลายไฟล์ ให้คลิกปุ่ม <strong class="font-semibold">"ดาวน์โหลดทั้งหมด"</strong> เพื่อรับไฟล์ ZIP ที่สะดวกซึ่งมี PDF ที่แปลงแล้วทั้งหมดของคุณ
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG กับ PDF: ทำความเข้าใจรูปแบบ</h3>
  <p class="mb-4"> เพื่อช่วยให้คุณเข้าใจว่ารูปแบบใดเหมาะสมที่สุดเมื่อใด นี่คือ <strong class="font-semibold">การเปรียบเทียบอย่างรวดเร็ว</strong> ตามคุณสมบัติหลัก: </p>
  <p class="font-semibold">
    <strong class="font-semibold">SVG (Scalable Vector Graphics):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบกราฟิกแบบเวกเตอร์
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> XML
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> ปรับขนาดได้อย่างไม่สิ้นสุดโดยไม่สูญเสียคุณภาพ (ไม่ขึ้นกับความละเอียด)
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> โลโก้ ไอคอน ภาพประกอบ กราฟิกแบบมินิมอล ภาพเคลื่อนไหว แผนภูมิ กราฟิกที่ต้องคมชัดในทุกขนาดบนเว็บ
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong> รองรับ
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong> ขนาดไฟล์เล็กสำหรับกราฟิกธรรมดา ปรับขนาดได้อย่างสมบูรณ์แบบ แก้ไขได้ด้วยเครื่องมือข้อความ/เวกเตอร์ ค้นหาได้ รองรับภาพเคลื่อนไหว (สำหรับเว็บ)
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> ไม่เหมาะสำหรับภาพที่ซับซ้อน เช่น ภาพถ่าย การรองรับอาจแตกต่างกันไปในระบบ/ซอฟต์แวร์เก่า ออกแบบมาสำหรับเว็บเป็นหลัก
    </li>
  </ul>
  <p class="font-semibold">
    <strong class="font-semibold">PDF (Portable Document Format):</strong>
  </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ประเภท:</strong> รูปแบบเอกสาร (สามารถมีกราฟิกเวกเตอร์ ภาพแรสเตอร์ ข้อความ แบบฟอร์ม ฯลฯ)
    </li>
    <li>
      <strong class="font-semibold">อิงตาม:</strong> แบบจำลองภาษา PostScript
    </li>
    <li>
      <strong class="font-semibold">ความสามารถในการปรับขนาด:</strong> เนื้อหาสามารถปรับขนาดได้ (เช่น เวกเตอร์ฝัง) หรือความละเอียดคงที่ (เช่น ภาพแรสเตอร์ฝัง) มักจะรักษาคุณภาพเวกเตอร์จาก SVG
    </li>
    <li>
      <strong class="font-semibold">เหมาะสำหรับ:</strong> เอกสาร รายงาน หนังสืออิเล็กทรอนิกส์ แบบฟอร์ม ไฟล์พร้อมพิมพ์ การแชร์เลย์เอาต์คงที่
    </li>
    <li>
      <strong class="font-semibold">ความโปร่งใส:</strong> รองรับภายในรูปแบบ แต่อาจถูกทำให้แบนราบสำหรับการพิมพ์
    </li>
    <li>
      <strong class="font-semibold">ข้อดี:</strong> <strong class="font-semibold">เข้ากันได้อย่างกว้างขวางสำหรับการดูและการพิมพ์</strong> ในอุปกรณ์ต่างๆ รักษาเลย์เอาต์ <strong class="font-semibold">สามารถฝังข้อมูลเวกเตอร์จาก SVG</strong> เพื่อรักษาความคมชัด
    </li>
    <li>
      <strong class="font-semibold">ข้อเสีย:</strong> การแก้ไขอาจซับซ้อน ขนาดไฟล์แตกต่างกันไปตามความซับซ้อนของเนื้อหา ไม่ใช่รูปแบบภาพหลักสำหรับการฝังเว็บ (ใช้ JPG/PNG/SVG แทน)
    </li>
  </ul>
  <p class="mb-4"> ในที่สุด พวกมันก็มีวัตถุประสงค์ที่แตกต่างกัน ใช้ <strong class="font-semibold">PDF เมื่อคุณต้องการนำเสนอกราฟิกของคุณเป็นเอกสาร</strong> เพื่อการแบ่งปัน การพิมพ์ หรือการฝังคุณภาพเวกเตอร์ในเลย์เอาต์คงที่ได้อย่างง่ายดาย ใช้ <strong class="font-semibold">SVG เมื่อความสามารถในการปรับขนาดและความสามารถในการแก้ไขเป็นข้อกังวลหลักของคุณ</strong> สำหรับการใช้งานเว็บ </p>
  <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการใช้เครื่องมือแปลง SVG เป็น PDF ฟรีของเรา:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ฟรีโดยสมบูรณ์:</strong> แปลงไฟล์ SVG เป็น PDF ได้มากเท่าที่คุณต้องการ โดยไม่มีค่าใช้จ่ายใดๆ
    </li>
    <li>
      <strong class="font-semibold">เครื่องมือออนไลน์:</strong> ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ใดๆ แปลงโดยตรงในเว็บเบราว์เซอร์ของคุณ
    </li>
    <li>
      <strong class="font-semibold">รวดเร็วและง่ายดาย:</strong> อินเทอร์เฟซที่เรียบง่ายและการประมวลผลที่รวดเร็วของเราช่วยให้คุณได้รับไฟล์ PDF ในเวลาไม่กี่นาที
    </li>
    <li>
      <strong class="font-semibold">เอาต์พุต PDF คุณภาพสูง:</strong> แปลง SVG ของคุณเป็น PDF โดยมีเป้าหมายเพื่อรักษาคุณภาพเวกเตอร์ให้มากที่สุดเพื่อให้ได้เส้นและข้อความที่คมชัดในเอกสาร
    </li>
    <li>
      <strong class="font-semibold">การแปลงเป็นชุด:</strong> แปลงไฟล์ SVG หลายไฟล์พร้อมกัน ช่วยประหยัดเวลาของคุณ รองรับสูงสุด 20 ไฟล์ต่อการแปลง
    </li>
    <li>
      <strong class="font-semibold">ปลอดภัย:</strong> ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและชั่วคราวบนเซิร์ฟเวอร์ของเรา และจะถูกลบออกหลังจากการแปลง
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">คำถามที่พบบ่อย (FAQ)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">เครื่องมือแปลง SVG เป็น PDF นี้ฟรีหรือไม่?</strong> ใช่ เครื่องมือออนไลน์ของเราใช้งานได้ฟรีสำหรับทุกคน
    </li>
    <li>
      <strong class="font-semibold">การอัปโหลดไฟล์ของฉันปลอดภัยหรือไม่?</strong> ปลอดภัยอย่างแน่นอน เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณ ไฟล์จะถูกประมวลผลชั่วคราวและลบออกจากเซิร์ฟเวอร์ของเราหลังจากทำการแปลงไม่นาน
    </li>
    <li>
      <strong class="font-semibold">ภาพ PDF ที่แปลงแล้วจะรักษาคุณภาพหรือไม่?</strong> ใช่ การแปลง SVG เป็น PDF มักจะฝังข้อมูลเวกเตอร์ ซึ่งหมายความว่ากราฟิกภายใน PDF ควรยังคงคมชัดและปรับขนาดได้เมื่อดูที่ระดับการซูมต่างๆ รักษาคุณภาพเวกเตอร์ดั้งเดิมได้ดีกว่าการแปลงเป็นรูปแบบแรสเตอร์
    </li>
    <li>
      <strong class="font-semibold">ความแตกต่างหลักระหว่าง SVG และ PDF คืออะไร?</strong> ความแตกต่างหลักคือ SVG เป็นรูปแบบภาพเวกเตอร์สำหรับกราฟิกเว็บเป็นหลัก ในขณะที่ PDF เป็นรูปแบบเอกสารที่ออกแบบมาสำหรับการนำเสนอเลย์เอาต์คงที่ซึ่งสามารถมีเนื้อหาประเภทต่างๆ รวมถึงกราฟิกเวกเตอร์ ภาพแรสเตอร์ และข้อความ
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถแปลงไฟล์ SVG หลายไฟล์พร้อมกันได้หรือไม่?</strong> ใช่ เครื่องมือของเราช่วยให้คุณอัปโหลดและแปลงไฟล์ SVG ได้สูงสุด 20 ไฟล์พร้อมกัน
    </li>
  </ul>
  <p> พร้อมที่จะแปลงไฟล์ SVG ของคุณเป็นรูปแบบ PDF ที่หลากหลายแล้วหรือยัง? <strong class="font-semibold">เริ่มต้นทันทีโดยคลิกปุ่ม "เรียกดูไฟล์" ด้านบน!</strong> รับ <strong class="font-semibold">เอกสาร PDF คุณภาพสูงที่แชร์ได้</strong> อย่างรวดเร็วและง่ายดาย </p>
</div>`,
				icon: 'file-text'
			},
			compress: {
				title: 'เครื่องมือบีบอัด SVG',
				description: 'ปรับปรุงและลดขนาดไฟล์ SVG ของคุณ',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">บีบอัดและปรับแต่งไฟล์ SVG ออนไลน์ ฟรี ง่ายและรวดเร็ว</h2>
  <p class="mb-4"> ต้องการ <strong class="font-semibold">บีบอัดหรือปรับแต่งไฟล์ SVG</strong> ของคุณสำหรับเว็บหรือไม่? เครื่องมือ <strong class="font-semibold">ปรับแต่ง SVG ออนไลน์ฟรี</strong> ของเราทำให้ง่ายและรวดเร็ว ลดขนาดไฟล์ SVG เพื่อปรับปรุงความเร็วในการโหลดและประสิทธิภาพของเว็บไซต์โดยตรงในเบราว์เซอร์ของคุณ โดยไม่ต้องติดตั้งซอฟต์แวร์ รับ <strong class="font-semibold">ไฟล์ SVG ที่เล็กลงและปรับแต่งแล้ว</strong> เหมาะสำหรับเว็บไซต์และแอปพลิเคชันที่โหลดเร็ว </p>
  <h3 class="text-xl font-semibold mb-2">เหตุใดจึงต้องบีบอัดหรือปรับแต่งไฟล์ SVG</h3>
  <p class="mb-4"> ไฟล์ SVG โดยเฉพาะอย่างยิ่งไฟล์ที่สร้างด้วยซอฟต์แวร์แก้ไขเวกเตอร์ มักจะมีข้อมูลที่ไม่จำเป็นซึ่งเพิ่มขนาดไฟล์โดยไม่ส่งผลต่อลักษณะที่ปรากฏ การปรับแต่งไฟล์ SVG ของคุณมีประโยชน์หลักหลายประการ: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">โหลดเว็บไซต์เร็วขึ้น:</strong> ขนาดไฟล์ที่เล็กลงหมายถึงหน้าเว็บของคุณโหลดได้เร็วขึ้น มอบประสบการณ์การใช้งานที่ดีขึ้น และอาจปรับปรุงอันดับเครื่องมือค้นหาของคุณ
    </li>
    <li>
      <strong class="font-semibold">ลดการใช้แบนด์วิดท์:</strong> ประหยัดแบนด์วิดท์สำหรับทั้งเซิร์ฟเวอร์และผู้เยี่ยมชมของคุณ ซึ่งเป็นสิ่งสำคัญสำหรับผู้ใช้มือถือหรือเว็บไซต์ที่มีการเข้าชมสูง
    </li>
    <li>
      <strong class="font-semibold">ประสิทธิภาพที่ดีขึ้น:</strong> SVG ที่ปรับแต่งแล้วจะแสดงผลได้เร็วกว่าในเบราว์เซอร์ ทำให้ภาพเคลื่อนไหวราบรื่นขึ้นและกราฟิกเว็บตอบสนองได้ดีขึ้น
    </li>
    <li>
      <strong class="font-semibold">ลบข้อมูลที่ไม่จำเป็น:</strong> กำจัดข้อมูลเมตาของโปรแกรมแก้ไขที่ซ่อนอยู่ ความคิดเห็น เลเยอร์ที่ซ่อนอยู่ ค่าเริ่มต้น และความแม่นยำทศนิยมที่มากเกินไปซึ่งทำให้ขนาดไฟล์ใหญ่ขึ้น
    </li>
  </ol>
  <p class="mb-4"> การบีบอัด SVG ของคุณคือการล้างโค้ดเพื่อให้ไฟล์มีขนาดเล็กและมีประสิทธิภาพมากที่สุดเท่าที่จะเป็นไปได้ ในขณะที่ยังคงรักษาความสมบูรณ์ของภาพของกราฟิก เป็นขั้นตอนสำคัญสำหรับการเพิ่มประสิทธิภาพเว็บ </p>
  <h3 class="text-xl font-semibold mb-2">วิธีบีบอัดไฟล์ SVG ของคุณออนไลน์:</h3>
  <p class="mb-4"> การบีบอัด <strong class="font-semibold">ไฟล์ SVG</strong> ของคุณโดยใช้เครื่องมือออนไลน์ฟรีของเรานั้นง่ายและใช้เวลาเพียงไม่กี่วินาที ทำตามขั้นตอนง่ายๆ เหล่านี้: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">อัปโหลดไฟล์ SVG ของคุณ:</strong> คลิกปุ่ม <strong class="font-semibold">"เรียกดูไฟล์"</strong> หรือลากและวางไฟล์ SVG ของคุณลงในพื้นที่วาง เครื่องมือของเรารองรับการบีบอัด <strong class="font-semibold">สูงสุด 20 ไฟล์</strong> พร้อมกัน
    </li>
    <li>
      <strong class="font-semibold">รอการปรับแต่ง:</strong> เครื่องมือของเราจะเริ่มกระบวนการบีบอัดและปรับแต่งโดยอัตโนมัติ รอสักครู่เพื่อให้กระบวนการเสร็จสมบูรณ์
    </li>
    <li>
      <strong class="font-semibold">ดาวน์โหลด SVG ที่ปรับแต่งแล้วของคุณ:</strong> เมื่อการปรับแต่งเสร็จสิ้น คุณสามารถดาวน์โหลด <strong class="font-semibold">ไฟล์ SVG ใหม่ที่เล็กลง</strong> ของคุณทีละไฟล์ได้โดยคลิกที่รูปขนาดย่อหรือปุ่มดาวน์โหลดสำหรับแต่ละไฟล์ สำหรับหลายไฟล์ ให้คลิกปุ่ม <strong class="font-semibold">"ดาวน์โหลดทั้งหมด"</strong> เพื่อรับไฟล์ ZIP ที่สะดวกซึ่งมี SVG ที่บีบอัดแล้วทั้งหมดของคุณ
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">การปรับแต่ง SVG คืออะไร?</h3>
  <p class="mb-4"> การปรับแต่ง SVG คือกระบวนการวิเคราะห์และล้างโค้ด XML พื้นฐานของไฟล์ SVG เพื่อลดขนาดไฟล์ ซึ่งทำได้โดยการลบข้อมูลที่ซ้ำซ้อน ทำให้โครงสร้างโค้ดง่ายขึ้น และใช้เทคนิคเฉพาะ เช่น การลดจำนวนตำแหน่งทศนิยมในข้อมูลพาธ เป้าหมายคือทำให้ไฟล์ SVG มีขนาดเล็กลงและประมวลผลได้เร็วขึ้น โดยไม่ทำให้เกิดการเปลี่ยนแปลงที่มองเห็นได้กับกราฟิก </p>
  <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการใช้เครื่องมือปรับแต่ง SVG ฟรีของเรา:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ฟรีโดยสมบูรณ์:</strong> ปรับแต่งไฟล์ SVG ได้มากเท่าที่คุณต้องการ โดยไม่มีค่าใช้จ่ายใดๆ
    </li>
    <li>
      <strong class="font-semibold">เครื่องมือออนไลน์:</strong> ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ใดๆ ปรับแต่งโดยตรงในเว็บเบราว์เซอร์ของคุณ
    </li>
    <li>
      <strong class="font-semibold">รวดเร็วและง่ายดาย:</strong> อินเทอร์เฟซที่เรียบง่ายและการประมวลผลที่รวดเร็วของเราช่วยให้คุณได้รับไฟล์ SVG ที่ปรับแต่งแล้วในเวลาไม่กี่นาที
    </li>
    <li>
      <strong class="font-semibold">การปรับแต่งคุณภาพสูง:</strong> เครื่องมือของเราได้รับการออกแบบมาเพื่อลดขนาดไฟล์ลงอย่างมาก ในขณะที่ยังคงรักษาความสมบูรณ์ของภาพของกราฟิก SVG ของคุณ
    </li>
    <li>
      <strong class="font-semibold">การบีบอัดเป็นชุด:</strong> ปรับแต่งไฟล์ SVG หลายไฟล์พร้อมกัน ช่วยประหยัดเวลาของคุณ รองรับสูงสุด 20 ไฟล์ต่อเซสชัน
    </li>
    <li>
      <strong class="font-semibold">ปลอดภัย:</strong> ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและชั่วคราวบนเซิร์ฟเวอร์ของเรา และจะถูกลบออกหลังจากการปรับแต่ง
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">คำถามที่พบบ่อย (FAQ)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">เครื่องมือบีบอัด SVG นี้ฟรีหรือไม่?</strong> ใช่ เครื่องมือออนไลน์ของเราใช้งานได้ฟรีสำหรับทุกคน
    </li>
    <li>
      <strong class="font-semibold">การอัปโหลดไฟล์ของฉันปลอดภัยหรือไม่?</strong> ปลอดภัยอย่างแน่นอน เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณ ไฟล์จะถูกประมวลผลชั่วคราวและลบออกจากเซิร์ฟเวอร์ของเราหลังจากทำการปรับแต่งไม่นาน
    </li>
    <li>
      <strong class="font-semibold">การบีบอัดไฟล์ SVG ทำให้คุณภาพลดลงหรือไม่?</strong> กระบวนการปรับแต่งของเราส่วนใหญ่จะลบข้อมูลที่ไม่จำเป็นออกจากโค้ดของ SVG ได้รับการออกแบบมาเพื่อให้ได้ขนาดไฟล์ที่เล็กที่สุดเท่าที่จะเป็นไปได้โดยไม่สูญเสียคุณภาพของภาพที่เห็นได้ชัด การตั้งค่าที่รุนแรง (ไม่ใช่ค่าเริ่มต้น) *อาจ* เปลี่ยนลักษณะที่ปรากฏหากลดความแม่นยำทางเรขาคณิตลงอย่างมาก แต่การปรับแต่งมาตรฐานคือการไม่สูญเสียภาพ
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถลดขนาดไฟล์ได้เท่าไหร่?</strong> ปริมาณการลดลงแตกต่างกันอย่างมากขึ้นอยู่กับความซับซ้อนของไฟล์ SVG ต้นฉบับและวิธีการสร้าง โดยทั่วไปสามารถลดลงได้ 20% ถึง 80% ขึ้นไป โดยเฉพาะอย่างยิ่งสำหรับ SVG ที่ส่งออกจากซอฟต์แวร์แก้ไข
    </li>
    <li>
      <strong class="font-semibold">ข้อมูลประเภทใดที่ถูกลบออกระหว่างการปรับแต่ง?</strong> การปรับแต่งจะลบสิ่งต่างๆ เช่น ข้อมูลเมตาของโปรแกรมแก้ไข ความคิดเห็น กลุ่มว่างเปล่า องค์ประกอบที่ซ่อนอยู่ ค่าแอตทริบิวต์เริ่มต้น และลดจำนวนตำแหน่งทศนิยมในข้อมูลพาธ
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถบีบอัดไฟล์ SVG หลายไฟล์พร้อมกันได้หรือไม่?</strong> ใช่ เครื่องมือของเราช่วยให้คุณอัปโหลดและบีบอัดไฟล์ SVG ได้สูงสุด 20 ไฟล์พร้อมกัน
    </li>
  </ul>
  <p> พร้อมที่จะ <strong class="font-semibold">ปรับแต่งไฟล์ SVG</strong> ของคุณเพื่อประสิทธิภาพเว็บที่ดีขึ้นหรือไม่? <strong class="font-semibold">เริ่มต้นทันทีโดยคลิกปุ่ม "เรียกดูไฟล์" ด้านบน!</strong> รับ <strong class="font-semibold">ไฟล์ SVG ที่เล็กลงและปรับแต่งแล้ว</strong> อย่างรวดเร็วและง่ายดาย </p>
</div>`,
				icon: 'zap'
			},
			view: {
				title: 'เครื่องมือดู SVG',
				description: 'ดูเนื้อหาไฟล์ SVG ของคุณอย่างรวดเร็ว',
				descriptionHtml: `<div class="container mx-auto py-4">
  <h2 class="text-2xl font-bold mb-4">โปรแกรมดู SVG ออนไลน์ | เปิดและดูไฟล์ SVG ฟรี | ง่ายและรวดเร็ว</h2>
  <p class="mb-4"> ต้องการ <strong class="font-semibold">เปิดและดูไฟล์ SVG ของคุณ</strong> โดยไม่ต้องติดตั้งซอฟต์แวร์หรือไม่? <strong class="font-semibold">โปรแกรมดู SVG ออนไลน์ฟรี</strong> ของเราทำให้ง่ายและรวดเร็ว เพียงอัปโหลดกราฟิก SVG ของคุณและดูแสดงผลทันทีในเบราว์เซอร์ของคุณ เหมาะสำหรับการตรวจสอบไฟล์ SVG อย่างรวดเร็วบนอุปกรณ์ใดก็ได้ </p>
  <h3 class="text-xl font-semibold mb-2">เหตุใดจึงต้องใช้โปรแกรมดู SVG ออนไลน์</h3>
  <p class="mb-4"> บางครั้งคุณเพียงแค่ต้องการดูว่ามีอะไรอยู่ในไฟล์ SVG อย่างรวดเร็ว โดยไม่จำเป็นต้องใช้ซอฟต์แวร์ออกแบบที่ซับซ้อน โปรแกรมดู SVG ออนไลน์มอบโซลูชันที่สะดวก: </p>
  <ol class="list-decimal my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ไม่ต้องใช้ซอฟต์แวร์:</strong> ดูไฟล์ SVG ได้โดยตรงในเว็บเบราว์เซอร์ของคุณบนระบบปฏิบัติการใดก็ได้ โดยไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งโปรแกรมพิเศษ เช่น Adobe Illustrator หรือ Inkscape
    </li>
    <li>
      <strong class="font-semibold">เข้าถึงได้รวดเร็วทุกที่:</strong> เปิดและตรวจสอบไฟล์ SVG จากอุปกรณ์ใดก็ได้ที่เชื่อมต่ออินเทอร์เน็ต - เดสก์ท็อป แล็ปท็อป แท็บเล็ต หรือสมาร์ทโฟน
    </li>
    <li>
      <strong class="font-semibold">ดูตัวอย่างทันที:</strong> ดูอย่างรวดเร็วว่ากราฟิก SVG ของคุณมีลักษณะอย่างไรก่อนที่จะใช้บนเว็บไซต์ ในเอกสาร หรือส่งให้ผู้อื่น
    </li>
    <li>
      <strong class="font-semibold">เรียบง่ายและเน้นการดู:</strong> ไปที่การดูกราฟิกของคุณโดยตรงโดยไม่ต้องนำทางผ่านอินเทอร์เฟซการแก้ไขที่ซับซ้อน
    </li>
  </ol>
  <p class="mb-4"> การใช้โปรแกรมดูออนไลน์ฟรีเป็นวิธีที่ง่ายที่สุดในการเข้าถึงและแสดงไฟล์ SVG ของคุณเมื่อคุณไม่อยู่ที่เครื่องมือออกแบบปกติของคุณ หรือต้องการดูตัวอย่างอย่างรวดเร็ว </p>
  <h3 class="text-xl font-semibold mb-2">วิธีเปิดและดูไฟล์ SVG ของคุณออนไลน์:</h3>
  <p class="mb-4"> การใช้ <strong class="font-semibold">โปรแกรมดู SVG ออนไลน์</strong> ของเรานั้นง่ายและใช้เวลาเพียงไม่กี่วินาที ทำตามขั้นตอนง่ายๆ เหล่านี้: </p>
  <ol class="list-decimal list-inside mb-4 ml-4 space-y-2">
    <li>
      <strong class="font-semibold">อัปโหลดไฟล์ SVG ของคุณ:</strong> คลิกปุ่ม <strong>"อัปโหลด SVG เพื่อดู"</strong> หรือลากและวางไฟล์ SVG ของคุณลงในพื้นที่วาง
    </li>
    <li>
      <strong class="font-semibold">รอการประมวลผล:</strong> เครื่องมือของเราจะประมวลผลไฟล์ SVG ของคุณอย่างรวดเร็วเพื่อแสดงผล
    </li>
    <li>
      <strong class="font-semibold">ดู SVG ของคุณ:</strong> เมื่อประมวลผลแล้ว กราฟิก SVG ของคุณจะแสดงโดยตรงในหน้าต่างเบราว์เซอร์ของคุณ หากคุณอัปโหลดหลายไฟล์ คุณสามารถสลับไปมาระหว่างตัวอย่างได้
    </li>
  </ol>
  <h3 class="text-xl font-semibold mb-2">SVG คืออะไร?</h3>
  <p class="mb-4"> SVG ย่อมาจาก <strong class="font-semibold">Scalable Vector Graphics</strong> เป็นรูปแบบภาพเวกเตอร์แบบ XML สำหรับกราฟิกสองมิติ </p>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">รูปแบบเวกเตอร์:</strong> แตกต่างจากรูปแบบแรสเตอร์ (เช่น JPG หรือ PNG) ที่สร้างจากพิกเซล SVG สร้างจากคำอธิบายทางคณิตศาสตร์ (พาธ รูปร่าง สี)
    </li>
    <li>
      <strong class="font-semibold">ปรับขนาดได้:</strong> ข้อดีหลักคือภาพ SVG สามารถปรับขนาดขึ้นหรือลงได้ทุกขนาดโดยไม่สูญเสียคุณภาพหรือความคมชัด
    </li>
    <li>
      <strong class="font-semibold">เป็นมิตรกับเว็บ:</strong> SVG มีขนาดเล็กสำหรับกราฟิกธรรมดา เป็นแบบข้อความ (ค้นหาได้) และเหมาะสำหรับโลโก้ ไอคอน และภาพประกอบบนเว็บไซต์
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">ประโยชน์ของการใช้โปรแกรมดู SVG ออนไลน์ฟรีของเรา:</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">ฟรีโดยสมบูรณ์:</strong> เปิดและดูไฟล์ SVG ได้มากเท่าที่คุณต้องการ โดยไม่มีค่าใช้จ่ายใดๆ
    </li>
    <li>
      <strong class="font-semibold">เครื่องมือออนไลน์:</strong> ไม่จำเป็นต้องดาวน์โหลดหรือติดตั้งซอฟต์แวร์ใดๆ ดูได้โดยตรงในเว็บเบราว์เซอร์ของคุณ
    </li>
    <li>
      <strong class="font-semibold">เข้าถึงได้รวดเร็วและง่ายดาย:</strong> ออกแบบมาสำหรับการดูไฟล์อย่างรวดเร็วด้วยอินเทอร์เฟซที่เรียบง่ายและใช้งานง่าย
    </li>
    <li>
      <strong class="font-semibold">ไม่ต้องใช้ซอฟต์แวร์:</strong> ทางเลือกที่ดีหากคุณไม่ได้ติดตั้งซอฟต์แวร์แก้ไขเวกเตอร์โดยเฉพาะ
    </li>
    <li>
      <strong class="font-semibold">ดูบนอุปกรณ์ใดก็ได้:</strong> เข้าถึงและใช้โปรแกรมดูบนเดสก์ท็อป แล็ปท็อป แท็บเล็ต และสมาร์ทโฟน
    </li>
    <li>
      <strong class="font-semibold">ปลอดภัย:</strong> ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและชั่วคราวบนเซิร์ฟเวอร์ของเรา และจะถูกลบออกหลังจากดู
    </li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">คำถามที่พบบ่อย (FAQ)</h3>
  <ul class="list-disc my-4 ml-8 space-y-2">
    <li>
      <strong class="font-semibold">โปรแกรมดู SVG นี้ฟรีหรือไม่?</strong> ใช่ เครื่องมือออนไลน์ของเราใช้งานได้ฟรีสำหรับทุกคน
    </li>
    <li>
      <strong class="font-semibold">การอัปโหลดไฟล์ของฉันปลอดภัยหรือไม่?</strong> ปลอดภัยอย่างแน่นอน เราให้ความสำคัญกับความเป็นส่วนตัวและความปลอดภัยของคุณ ไฟล์จะถูกประมวลผลชั่วคราวสำหรับการดูและลบออกจากเซิร์ฟเวอร์ของเราหลังจากนั้นไม่นาน
    </li>
    <li>
      <strong class="font-semibold">SVG จะแสดงผลถูกต้องหรือไม่?</strong> โปรแกรมดูใช้ความสามารถในการแสดงผล SVG ดั้งเดิมของเว็บเบราว์เซอร์ของคุณ ดังนั้นจึงควรแสดงกราฟิกตามที่ตั้งใจไว้ ความเข้ากันได้กับคุณสมบัติ SVG ที่ซับซ้อนหรือขั้นสูงมากอาจแตกต่างกันเล็กน้อยระหว่างเบราว์เซอร์
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถซูมหรือเลื่อนดู SVG ได้หรือไม่?</strong> ใช่ โดยทั่วไปคุณสามารถใช้ฟังก์ชันซูมและเลื่อนดูมาตรฐานของเบราว์เซอร์เพื่อสำรวจกราฟิก SVG โดยละเอียดได้
    </li>
    <li>
      <strong class="font-semibold">เบราว์เซอร์ใดบ้างที่รองรับ?</strong> โปรแกรมดูของเราทำงานในเว็บเบราว์เซอร์สมัยใหม่ทั้งหมด รวมถึง Chrome, Firefox, Safari, Edge และอื่นๆ
    </li>
    <li>
      <strong class="font-semibold">ฉันสามารถอัปโหลดไฟล์ SVG หลายไฟล์ได้หรือไม่?</strong> ใช่ คุณสามารถอัปโหลดไฟล์ SVG ได้สูงสุด 20 ไฟล์พร้อมกันเพื่อดูตัวอย่าง
    </li>
  </ul>
  <p> พร้อมที่จะ <strong class="font-semibold">ดูไฟล์ SVG ของคุณทางออนไลน์ได้ทันที</strong> หรือยัง? <strong class="font-semibold">เริ่มต้นทันทีโดยคลิกปุ่ม "เรียกดูไฟล์" ด้านบน!</strong> เปิดและดูกราฟิก <strong class="font-semibold">SVG</strong> ของคุณได้อย่างรวดเร็วและง่ายดาย </p>
</div>`,
				icon: 'eye'
			}
		},
		errorMessage: 'การแปลงไฟล์ล้มเหลว โปรดตรวจสอบคอนโซล',
		noFilesReady: 'ไม่มีไฟล์พร้อมสำหรับการดาวน์โหลด',
		privacy: 'ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและถูกลบออกจากเซิร์ฟเวอร์ของเราหลังจาก 1 ชั่วโมง',
		footer: 'สงวนลิขสิทธิ์ทั้งหมด',
		successMessage: 'แปลงไฟล์สำเร็จแล้ว!'
	} as Translation
};
