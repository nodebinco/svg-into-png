<script lang="ts">
	import { onMount, getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { goto, preloadData } from '$app/navigation';
	import {
		languages,
		type Language,
		type Format,
		type Translation,
		type ConversionInfo
	} from '$lib/i18n';
	import { fade } from 'svelte/transition';
	import SEO from '$lib/components/SEO.svelte';
	import { Toaster, toast } from 'svelte-french-toast';
	import ViewerModal from '$lib/components/ViewerModal.svelte';

	import {
		ChevronDown,
		Upload,
		Download,
		Eye,
		Image,
		FileText,
		Zap,
		Trash2,
		FileImage
	} from 'lucide-svelte';

	// Data from this page's +page.server.ts
	export let data: {
		initialFormat: Format;
		initialConversionInfo: ConversionInfo;
	};

	// Data from parent +layout.svelte (via context)
	const langStore = getContext<Writable<Language>>('lang');
	const tStore = getContext<Writable<Translation>>('t');
	let lang: Language;
	let t: Translation;

	langStore.subscribe((value) => (lang = value));
	tStore.subscribe((value) => (t = value));

	// --- Component State ---
	let activeTab: Format = data.initialFormat;
	let files: File[] = [];
	let isDragging = false;
	let convertedFiles: {
		name: string;
		url: string;
		preview?: string;
		format: Format; // Format will match activeTab
		originalFile?: File;
		size?: string;
	}[] = [];
	let isConverting = false;
	let convertingIndexes: number[] = [];
	let fileInputRef: HTMLInputElement;
	let showViewer = false;
	let viewerContent = '';

	// Define slugToFormat here (needed for language switcher)
	const slugToFormat: Record<string, Format> = {
		'svg-to-png': 'png',
		'svg-to-jpg': 'jpg',
		'svg-to-pdf': 'pdf',
		'compress-svg': 'compress',
		'svg-viewer': 'view'
	};

	// Reactive values based on activeTab and layout context
	$: currentFormat = activeTab; // Use activeTab now
	$: currentConversionInfo = t?.conversions?.[activeTab] || {};

	// Get the format URL segment based on the current format
	$: formatUrlSegment =
		Object.entries(slugToFormat).find(([_, fmt]) => fmt === currentFormat)?.[0] || 'svg-to-png';

	// Reactive SEO data
	$: seoTitle =
		t?.baseTitle?.replace('{format}', t?.formats?.[currentFormat] ?? currentFormat.toUpperCase()) +
		' - ' +
		t?.domain;

	// Language display names
	const languageNames: Record<string, string> = {
		ar: 'العربية (AR)',
		be: 'Беларуская мова (BE)',
		bg: 'български език (BG)',
		cs: 'Čeština (CS)',
		da: 'Dansk (DA)',
		de: 'Deutsch (DE)',
		el: 'Ελληνικά (EL)',
		en: 'English (EN)',
		es: 'Español (ES)',
		fi: 'Suomi (FI)',
		fr: 'Français (FR)',
		he: 'עברית (HE)',
		hi: 'हिन्दी (HI)',
		hr: 'Hrvatski (HR)',
		hu: 'Magyar (HU)',
		id: 'Bahasa Indonesia (ID)',
		it: 'Italiano (IT)',
		ja: '日本語 (JA)',
		ko: '한국어 (KO)',
		lt: 'Lietuvių kalba (LT)',
		nl: 'Nederlands (NL)',
		pl: 'Polski (PL)',
		pt: 'Português (PT)',
		ro: 'Română (RO)',
		ru: 'Русский (RU)',
		sk: 'Slovenčina (SK)',
		sv: 'Svenska (SV)',
		th: 'ภาษาไทย (TH)',
		tr: 'Türkçe (TR)',
		uk: 'Українська мова (UK)',
		vi: 'Tiếng Việt (VI)',
		zh: '中文 (ZH)'
	};

	// Add function to generate URL for formats
	function getFormatUrl(format: Format): string {
		const formatSlug = Object.entries(slugToFormat).find(([_, fmt]) => fmt === format)?.[0];
		if (formatSlug) {
			return lang === 'en' ? `/${formatSlug}` : `/${lang}/${formatSlug}`;
		}
		return '#'; // Fallback
	}

	function handleTabClick(format: Format, event: MouseEvent) {
		// If it's the current tab or the user used ctrl/cmd+click to open in a new tab, don't prevent default
		if (activeTab === format || event.ctrlKey || event.metaKey) {
			return;
		}

		// Prevent default navigation for normal clicks
		event.preventDefault();

		// Get the URL path for this format
		const formatSlug = Object.entries(slugToFormat).find(([_, fmt]) => fmt === format)?.[0];
		if (formatSlug) {
			// Navigate to the new URL with proper language and format
			const newUrl = lang === 'en' ? `/${formatSlug}` : `/${lang}/${formatSlug}`;

			// Use direct location change instead of goto for more reliable navigation
			// window.location.href = newUrl;
			goto(newUrl, { replaceState: true });
		}

		// If no URL available, just update the tab (fallback behavior)
		activeTab = format;
		// Clear the queue when changing tabs to avoid confusion
		clearQueue();
		if (format === 'view') {
			viewerContent = ''; // Reset viewer content
		}
	}

	// Add preload functionality for smoother tab changes
	function handleTabHover(format: Format) {
		const formatSlug = Object.entries(slugToFormat).find(([_, fmt]) => fmt === format)?.[0];
		if (formatSlug) {
			const prefetchUrl = lang === 'en' ? `/${formatSlug}` : `/${lang}/${formatSlug}`;
			preloadData(prefetchUrl);
		}
	}

	// --- Functions (Mostly identical to original, but use activeTab) ---

	function handleDragOver(e: DragEvent) {
		e.preventDefault();
		isDragging = true;
	}

	function handleDragLeave() {
		isDragging = false;
	}

	function handleDrop(e: DragEvent) {
		e.preventDefault();
		isDragging = false;
		const droppedFiles = Array.from(e.dataTransfer?.files || []);
		handleFiles(droppedFiles);
	}

	function handleFileInput(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files) {
			handleFiles(Array.from(input.files));
			input.value = ''; // Reset input
		}
	}

	function clearQueue() {
		files = [];
		convertedFiles.forEach((file) => {
			if (file.url) URL.revokeObjectURL(file.url);
			if (file.preview) URL.revokeObjectURL(file.preview);
		});
		convertedFiles = [];
		convertingIndexes = [];
		isConverting = false;
	}

	function formatFileSize(bytes: number): string {
		if (bytes < 1024) return bytes + ' B';
		else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
		else return (bytes / 1048576).toFixed(1) + ' MB';
	}

	async function createPreview(file: File): Promise<string> {
		return new Promise((resolve) => {
			const reader = new FileReader();
			reader.onload = (e) => resolve(e.target?.result as string);
			reader.readAsDataURL(file);
		});
	}

	function showSuccessToast(message: string) {
		toast.success(message);
	}

	function showErrorToast(message: string) {
		toast.error(message);
	}

	function showInfoToast(message: string) {
		toast(message, { icon: 'ℹ️' });
	}

	async function handleFiles(newFiles: File[]) {
		const validFiles = newFiles.filter((file) => file.type === 'image/svg+xml');

		const uniqueNewFiles = validFiles.filter((newFile) => {
			return !convertedFiles.some(
				(existingFile) =>
					existingFile.originalFile?.name === newFile.name && existingFile.format === activeTab
			);
		});

		if (uniqueNewFiles.length > 0) {
			if (activeTab === 'view') {
				const firstFile = uniqueNewFiles[0];
				const reader = new FileReader();
				reader.onload = (e) => {
					viewerContent = e.target?.result as string;
					showViewer = true;
				};
				reader.readAsText(firstFile);
			} else {
				const filesWithPreviews = await Promise.all(
					uniqueNewFiles.map(async (file) => {
						const preview = await createPreview(file);
						return { file, preview, size: formatFileSize(file.size) };
					})
				);

				const oldFilesCount = files.length;
				files = [...files, ...filesWithPreviews.map((f) => f.file)];

				const newConvertedFileObjects = filesWithPreviews.map((f) => ({
					name: f.file.name,
					url: '',
					preview: f.preview,
					format: activeTab,
					originalFile: f.file,
					size: f.size
				}));

				convertedFiles = [...convertedFiles, ...newConvertedFileObjects];

				convertFiles(newConvertedFileObjects, oldFilesCount);
			}
		} else if (validFiles.length > 0 && uniqueNewFiles.length === 0 && activeTab !== 'view') {
			showInfoToast('Some files were already added for this format.');
		}
	}

	async function convertFiles(filesToConvert: typeof convertedFiles, startIndex: number) {
		if (isConverting) return;
		isConverting = true;
		convertingIndexes = filesToConvert.map((_, i) => startIndex + i);

		try {
			const newConvertedFiles = [...convertedFiles];

			for (let i = 0; i < filesToConvert.length; i++) {
				const fileIndex = startIndex + i;
				const originalFile = files[fileIndex]; // Use original file list
				const format = activeTab; // Use activeTab

				if (!originalFile) continue; // Safety check

				const formData = new FormData();
				formData.append('file', originalFile);
				formData.append('format', format);

				const response = await fetch('/api/convert', {
					method: 'POST',
					body: formData
				});

				if (!response.ok) {
					const errorText = await response.text();
					console.error('Conversion API Error:', response.status, errorText);
					// Mark this specific file as failed maybe?
					// For now, just throwing a general error
					throw new Error(
						`Conversion failed for ${originalFile.name}: ${errorText || response.statusText}`
					);
				}

				const blob = await response.blob();
				if (newConvertedFiles[fileIndex]?.url)
					URL.revokeObjectURL(newConvertedFiles[fileIndex].url);

				const url = URL.createObjectURL(blob);
				newConvertedFiles[fileIndex] = {
					...newConvertedFiles[fileIndex],
					name: originalFile.name.replace(/\.svg$/i, getFileExtension(format)), // Use regex replace
					url
				};

				// Update convertingIndexes reactively
				convertingIndexes = convertingIndexes.filter((idx) => idx !== fileIndex);
			}

			if (convertingIndexes.length === 0 && filesToConvert.length > 0) {
				showSuccessToast(t?.successMessage ?? 'Files converted successfully!');
			}

			convertedFiles = newConvertedFiles;
		} catch (error: any) {
			console.error('Conversion error:', error);
			showErrorToast(t?.errorMessage ?? 'Failed to convert files. Please check the console.');
			// Clear converting indexes on error too
			convertingIndexes = [];
		} finally {
			if (convertingIndexes.length === 0) {
				isConverting = false;
			}
		}
	}

	function getFileExtension(format: Format): string {
		switch (format) {
			case 'png':
				return '.png';
			case 'jpg':
				return '.jpg';
			case 'pdf':
				return '.pdf';
			case 'compress':
				return '.svg';
			default:
				return '.file';
		}
	}

	function downloadAll() {
		let downloadedCount = 0;
		convertedFiles.forEach((file) => {
			if (file.url && file.format === activeTab) {
				// Only download for current tab
				const link = document.createElement('a');
				link.href = file.url;
				link.download = file.name;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				downloadedCount++;
			}
		});
		if (downloadedCount === 0 && convertedFiles.filter((f) => f.format === activeTab).length > 0) {
			showInfoToast(t?.noFilesReady ?? 'No files are ready for download for the current format.');
		}
	}

	// Cleanup URLs when component is destroyed
	let cleanup = () => {
		convertedFiles.forEach((file) => {
			if (file.url) URL.revokeObjectURL(file.url);
			if (file.preview) URL.revokeObjectURL(file.preview);
		});
	};

	onMount(() => {
		// Ensure initial state syncs with data
		activeTab = data.initialFormat;
		return cleanup;
	});

	// Filter files to display based on the active tab
	$: displayedFiles = convertedFiles.filter((f) => f.format === activeTab);

	// Function to generate a URL with language and format
	function getLangFormatUrl(langCode: string): string {
		if (langCode === 'en') {
			// English is default, so format-only URL for english
			return `/${formatUrlSegment}`;
		}
		return `/${langCode}/${formatUrlSegment}`;
	}
</script>

<Toaster />
{#if activeTab === 'view'}
	<ViewerModal bind:show={showViewer} content={viewerContent} />
{/if}

{#if t && currentConversionInfo}
	<SEO
		title={currentConversionInfo.title ?? `${activeTab.toUpperCase()} Converter`}
		description={currentConversionInfo?.description ?? t.description}
		domain={t.domain ?? 'example.com'}
	/>

	<div class="min-h-screen bg-base-200">
		<div class="container max-w-5xl mx-auto px-4 py-8">
			<!-- Header Section -->
			<div class="flex justify-between items-center mb-8">
				<div class="flex items-center gap-3">
					<FileImage class="h-10 w-10 text-primary" />
					<!-- Header title changes based on active tab -->
					<h1 class="text-4xl font-bold text-primary">
						<span class="text-primary">SVG</span>
						<span class="text-base-content opacity-70">to</span>
						<span class="text-accent"
							>{t.formats?.[activeTab]?.toUpperCase() ?? activeTab.toUpperCase()}</span
						>
					</h1>
				</div>
				<!-- Language Selector Dropdown (Only languages) -->
				<div class="dropdown dropdown-end">
					<label tabindex="0" class="btn btn-ghost">
						{languageNames[lang] || lang?.toUpperCase()}
						<ChevronDown class="h-5 w-5 ml-1" />
					</label>
					<ul
						tabindex="0"
						class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60 z-50"
					>
						{#each Object.keys(languages) as langCode (langCode)}
							{#if langCode !== lang}
								<li class="text-left">
									<a href={getLangFormatUrl(langCode)} class="btn btn-ghost justify-start"
										>{languageNames[langCode] || langCode.toUpperCase()}</a
									>
								</li>
							{/if}
						{/each}
					</ul>
				</div>
			</div>

			<div class="max-w-5xl mx-auto">
				<!-- Conversion Info Card (Updates with activeTab) -->
				{#if currentConversionInfo?.title}
					<div class="card bg-base-100 mb-8" in:fade={{ duration: 300 }}>
						<div class="card-body">
							<h2 class="card-title text-2xl">{currentConversionInfo.title}</h2>
							<p class="text-base-content/80">{currentConversionInfo.description}</p>
						</div>
					</div>
				{/if}

				<!-- Format Tabs -->
				<div class="card tabs tabs-boxed mb-4 justify-center bg-base-100 p-1 shadow" role="tablist">
					{#each Object.entries(t.conversions || {}) as [format, info] (format)}
						<a
							role="tab"
							href={getFormatUrl(format as Format)}
							class="tab tab-lg gap-2 font-medium no-underline {activeTab === format
								? 'tab-active !bg-primary !text-primary-content'
								: 'hover:bg-base-200'}"
							aria-selected={activeTab === format}
							on:click={(e) => handleTabClick(format as Format, e)}
							on:mouseenter={() => handleTabHover(format as Format)}
						>
							{#if info?.icon === 'image'}
								<Image class="h-5 w-5" />
							{:else if info?.icon === 'file-text'}
								<FileText class="h-5 w-5" />
							{:else if info?.icon === 'zap'}
								<Zap class="h-5 w-5" />
							{:else if info?.icon === 'eye'}
								<Eye class="h-5 w-5" />
							{/if}
							{t.formats[format as Format]}
						</a>
					{/each}
				</div>

				<!-- Drop Zone / Viewer Upload (Conditional based on activeTab) -->
				{#if activeTab === 'view'}
					<div
						class="border-3 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors bg-base-100 hover:bg-base-300 {isDragging
							? 'border-primary bg-primary/10'
							: 'border-base-300'} mb-8"
						on:dragover={handleDragOver}
						on:dragleave={handleDragLeave}
						on:drop={handleDrop}
					>
						<!-- Viewer Upload Content -->
						<div class="flex flex-col items-center justify-center gap-6">
							<Eye class="h-16 w-16 text-primary mb-4" />
							<div>
								<h2 class="text-2xl font-bold mb-2">{t.viewerTitle ?? 'SVG Viewer'}</h2>
								<p class="text-xl font-medium">
									{t.viewerDescription ?? 'Upload an SVG to view it'}
								</p>
								<p class="text-base text-base-content/70 mt-2">{t.or}</p>
							</div>
							<div class="flex gap-4">
								<label class="btn btn-primary btn-lg text-lg gap-2">
									<Upload class="h-6 w-6" />
									{t.uploadToView ?? 'Upload SVG File'}
									<input
										type="file"
										accept=".svg"
										class="hidden"
										on:change={handleFileInput}
										bind:this={fileInputRef}
									/>
								</label>
							</div>
						</div>
					</div>
				{:else}
					<!-- Drop Zone for Conversions -->
					<div
						class="border-3 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors bg-base-100 hover:bg-base-300 {isDragging
							? 'border-primary bg-primary/10'
							: 'border-base-300'} mb-8"
						on:dragover={handleDragOver}
						on:dragleave={handleDragLeave}
						on:drop={handleDrop}
					>
						<!-- Conversion Dropzone Content -->
						<div class="flex flex-col items-center justify-center gap-6">
							<FileImage class="h-16 w-16 text-primary" />
							<div>
								{#if activeTab === 'compress'}
									<h2 class="text-2xl font-bold mb-2">{t.compressTitle}</h2>
								{:else}
									<h2 class="text-2xl font-bold mb-2">{t.convertTo} {t.formats[activeTab]}</h2>
								{/if}
								<p class="text-xl font-medium">
									{t.dragDrop}
									{activeTab !== 'compress'
										? t.convertTo.toLowerCase() + ' ' + t.formats[activeTab]
										: ''}
								</p>
								<p class="text-base text-base-content/70 mt-2">{t.or}</p>
							</div>
							<div class="flex gap-4">
								<label class="btn btn-primary btn-lg text-lg gap-2">
									<Upload class="h-6 w-6" />
									{t.browseFiles}
									<input
										type="file"
										accept=".svg"
										class="hidden"
										multiple
										on:change={handleFileInput}
										bind:this={fileInputRef}
									/>
								</label>
							</div>
						</div>
					</div>

					<!-- File Grid Section (Filtered by activeTab) -->
					{#if displayedFiles.length > 0}
						<div class="mb-4">
							<div class="flex justify-between items-center mb-4">
								<h2 class="text-xl font-bold">
									{displayedFiles.length === 1
										? t.fileCount?.replace('{count}', '1')
										: t.filesCount?.replace('{count}', displayedFiles.length.toString())} ({t
										.formats[activeTab]})
								</h2>
								<button class="btn btn-error btn-sm gap-2" on:click={clearQueue}>
									<Trash2 class="h-5 w-5" />
									{t.clearFiles ?? 'Clear All'}
								</button>
							</div>

							<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
								{#each displayedFiles as file, i (file.originalFile?.name + '-' + i + '-' + file.format || `file-${i}-${file.format}`)}
									{@const fileIndex = convertedFiles.findIndex(
										(cf) =>
											cf.originalFile?.name === file.originalFile?.name && cf.format === file.format
									)}
									<div
										class="card bg-base-100 border border-base-300 overflow-hidden transition-all hover:shadow-md"
										in:fade={{ duration: 300, delay: i * 50 }}
									>
										<figure class="relative pt-[100%] bg-base-300 flex items-center justify-center">
											<img
												src={file.preview}
												alt={file.name}
												class="absolute inset-0 w-full h-full object-contain p-2"
											/>
											<div
												class="absolute top-3 left-3 badge badge-lg badge-primary text-primary-content font-bold"
											>
												{t.formats[file.format]}
											</div>
											{#if file.size}
												<div class="absolute top-3 right-3 badge badge-lg badge-ghost">
													{file.size}
												</div>
											{/if}
											{#if convertingIndexes.includes(fileIndex) || (isConverting && !file.url)}
												<div
													class="absolute inset-0 bg-base-100/80 flex items-center justify-center backdrop-blur-sm"
												>
													<div class="flex flex-col items-center gap-2">
														<span class="loading loading-spinner loading-lg text-primary"></span>
														<span class="font-medium">{t.converting}</span>
													</div>
												</div>
											{/if}
										</figure>
										<div class="card-body p-4">
											<h3 class="card-title text-base truncate" title={file.name}>{file.name}</h3>
											<div class="card-actions justify-end mt-2">
												<a
													href={file.url}
													download={file.name}
													class="btn btn-primary {!file.url && 'btn-disabled'} gap-2"
												>
													<Download class="h-5 w-5" />
													{t.download}
												</a>
											</div>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<div class="flex justify-center mt-8">
							<button
								class="btn btn-primary btn-lg gap-2 text-lg"
								on:click={downloadAll}
								disabled={displayedFiles.filter((f) => f.url).length === 0}
							>
								<Download class="h-6 w-6" />
								{t.downloadAll} ({t.formats[activeTab]})
							</button>
						</div>
					{/if}
					<!-- End File Grid -->
				{/if}
				<!-- End Drop Zone Type Check -->

				<!-- SEO Content Area (Updates with activeTab) -->
				{#if currentConversionInfo?.descriptionHtml}
					<div class="mt-16 prose prose-lg max-w-5xl mx-auto bg-base-100 p-8 rounded-lg shadow">
						{@html currentConversionInfo.descriptionHtml}
					</div>
				{/if}
			</div>

			<!-- Footer -->
			<footer class="footer footer-center p-10 mt-16 text-base-content">
				<div>
					<p class="font-bold">
						<FileImage class="h-6 w-6 inline-block mr-2 text-primary" />
						<a href="/">{t.domain ?? 'SVG Converter'}</a>
					</p>
					<p>© {new Date().getFullYear()}</p>
					<p>{t.footer ?? 'All rights reserved'}</p>
					<p class="mt-4 text-sm text-base-content/70">{t.privacy ?? ''}</p>
					<ul class="flex space-x-4 mt-4">
						<li><a href="/privacy">Privacy Policy</a></li>
						<li><a href="/terms">Terms of Use</a></li>
						<li><a href="/about">About Us</a></li>
						<li><a href="/contact">Contact</a></li>
					</ul>
				</div>
			</footer>
		</div>
	</div>
{:else}
	<div class="min-h-screen flex items-center justify-center">
		<span class="loading loading-lg"></span>
	</div>
{/if}
