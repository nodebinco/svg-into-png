<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { languages, type Language, type Format } from '$lib/i18n';
	import { fade, fly } from 'svelte/transition';
	import SEO from '$lib/components/SEO.svelte';
	import { Toaster, toast } from 'svelte-french-toast';
	import ViewerModal from '$lib/components/ViewerModal.svelte';

	let files: File[] = [];
	let isDragging = false;
	let convertedFiles: {
		name: string;
		url: string;
		preview?: string;
		format: Format;
		originalFile?: File;
		size?: string;
	}[] = [];
	let selectedFormat: Format = 'png';
	let lang: Language = 'en';
	let t = languages[lang];
	let activeTab: Format = 'png';
	let isConverting = false;
	let convertingIndexes: number[] = [];
	let fileInputRef: HTMLInputElement;
	let showViewer = false;
	let viewerContent = '';

	// Get SEO content based on active tab and language
	$: seoTitle = t.seo?.baseTitle?.replace('{format}', t.formats[activeTab]) + ' - ' + t.seo?.domain;
	$: seoDescription = t.seo?.conversions?.[activeTab]?.description || '';
	$: conversionInfo = t.seo?.conversions?.[activeTab] || {};

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
			// Reset the input value to allow selecting the same file again
			input.value = '';
		}
	}

	function clearQueue() {
		files = [];
		// Cleanup URLs to prevent memory leaks
		convertedFiles.forEach((file) => {
			if (file.url) URL.revokeObjectURL(file.url);
			if (file.preview) URL.revokeObjectURL(file.preview);
		});
		convertedFiles = [];
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
		// Use the default toast for info messages
		toast(message, {
			icon: 'ℹ️' // Optional: Add an info icon
		});
	}

	async function handleFiles(newFiles: File[]) {
		const validFiles = newFiles.filter((file) => file.type === 'image/svg+xml');

		// Filter out duplicates: check if a file with the same name and target format already exists
		const uniqueNewFiles = validFiles.filter((newFile) => {
			return !convertedFiles.some(
				(existingFile) =>
					existingFile.originalFile?.name === newFile.name && existingFile.format === activeTab
			);
		});

		if (uniqueNewFiles.length > 0) {
			// Special handling for 'view' format
			if (activeTab === 'view') {
				const firstFile = uniqueNewFiles[0];
				const reader = new FileReader();
				reader.onload = (e) => {
					viewerContent = e.target?.result as string;
					showViewer = true;
				};
				reader.readAsText(firstFile);
				// Optional: Add file to list without processing further if needed
				// Or maybe clear the queue after viewing?
			} else {
				// Create previews and add to queue for other formats
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

		try {
			const newConvertedFiles = [...convertedFiles];

			for (let i = 0; i < filesToConvert.length; i++) {
				const index = startIndex + i;
				const file = files[index];
				const format = newConvertedFiles[index].format;

				convertingIndexes = [...convertingIndexes, index];

				const formData = new FormData();
				formData.append('file', file);
				formData.append('format', format);

				const response = await fetch('/api/convert', {
					method: 'POST',
					body: formData
				});

				if (!response.ok) {
					throw new Error('Conversion failed');
				}

				const blob = await response.blob();
				// Cleanup old URL if it exists
				if (newConvertedFiles[index]?.url) URL.revokeObjectURL(newConvertedFiles[index].url);

				const url = URL.createObjectURL(blob);
				newConvertedFiles[index] = {
					...newConvertedFiles[index],
					name: file.name.replace('.svg', getFileExtension(format)),
					url
				};

				convertingIndexes = convertingIndexes.filter((idx) => idx !== index);
			}

			// Check if all files converted successfully
			if (convertingIndexes.length === 0 && filesToConvert.length > 0) {
				showSuccessToast('Files converted successfully!');
			}

			convertedFiles = newConvertedFiles;
		} catch (error) {
			console.error('Conversion error:', error);
			// Use toast for errors
			showErrorToast('Failed to convert some files. Please check the console.');
		} finally {
			isConverting = false;
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
				return '.png';
		}
	}

	function downloadAll() {
		convertedFiles.forEach((file) => {
			if (file.url) {
				const link = document.createElement('a');
				link.href = file.url;
				link.download = file.name;
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		});
	}

	function setLanguage(newLang: Language) {
		lang = newLang;
		t = languages[lang];
	}

	function handleTabClick(format: Format) {
		activeTab = format;
		selectedFormat = format;

		if (format === 'view') {
			viewerContent = ''; // Reset viewer content
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
		return cleanup;
	});
</script>

<Toaster />
<ViewerModal bind:show={showViewer} content={viewerContent} />

<SEO
	title={seoTitle || 'SVG Converter'}
	description={conversionInfo?.description || t.description}
	domain={t.seo?.domain || 'svgtopng.com'}
/>

<div class="min-h-screen bg-base-200">
	<div class="container mx-auto px-4 py-8">
		<div class="flex justify-between items-center mb-8">
			<div class="flex items-center gap-3">
				<Logo size="h-10 w-10" />
				<h1 class="text-4xl font-bold text-primary">
					<span class="text-primary">SVG</span>
					<span class="text-base-content opacity-70">to</span>
					<span class="text-accent">{activeTab.toUpperCase()}</span>
				</h1>
			</div>
			<div class="dropdown dropdown-end">
				<label tabindex="0" class="btn btn-ghost">
					{lang.toUpperCase()}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 ml-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</label>
				<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-10">
					{#each Object.keys(languages) as langCode}
						<li>
							<button
								class="btn btn-ghost justify-start"
								on:click={() => setLanguage(langCode as Language)}>{langCode.toUpperCase()}</button
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="max-w-5xl mx-auto">
			<!-- Conversion Info Card -->
			{#if conversionInfo?.title}
				<div class="card bg-base-100 mb-8" in:fade={{ duration: 300 }}>
					<div class="card-body">
						<h2 class="card-title text-2xl">
							{conversionInfo.title}
						</h2>
						<p class="text-base-content/80">
							{conversionInfo.description}
						</p>
					</div>
				</div>
			{/if}

			<!-- Format Tabs -->
			<div class="card tabs tabs-border bg-base-100 mb-4 flex justify-center p-1">
				{#each Object.entries(t.seo?.conversions || {}) as [format, info]}
					<button
						class="tab tab-lg gap-2 text-lg font-medium {activeTab === format ? 'tab-active' : ''}"
						on:click={() => handleTabClick(format as Format)}
					>
						{#if info?.icon === 'image'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
								<circle cx="8.5" cy="8.5" r="1.5" />
								<polyline points="21 15 16 10 5 21" />
							</svg>
						{:else if info?.icon === 'file-text'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
								<polyline points="14 2 14 8 20 8" />
								<line x1="16" y1="13" x2="8" y2="13" />
								<line x1="16" y1="17" x2="8" y2="17" />
								<polyline points="10 9 9 9 8 9" />
							</svg>
						{:else if info?.icon === 'zap'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
							</svg>
						{:else if info?.icon === 'eye'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
								<circle cx="12" cy="12" r="3" />
							</svg>
						{/if}
						{t.formats[format as Format]}
					</button>
				{/each}
			</div>

			{#if activeTab !== 'view'}
				<!-- Drop Zone (now only shown for conversion tabs) -->
				<div
					class="border-3 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors bg-base-100 hover:bg-base-300 {isDragging
						? 'border-primary bg-primary/10'
						: 'border-base-300'} mb-8"
					on:dragover={handleDragOver}
					on:dragleave={handleDragLeave}
					on:drop={handleDrop}
				>
					<div class="flex flex-col items-center justify-center gap-6">
						<Logo size="h-16 w-16" />
						<div>
							<h2 class="text-2xl font-bold mb-2">{t.convertTo} {t.formats[activeTab]}</h2>
							<p class="text-xl font-medium">
								{t.dragDrop}
								{t.convertTo.toLowerCase()}
								{t.formats[activeTab]}
							</p>
							<p class="text-base text-base-content/70 mt-2">{t.or}</p>
						</div>
						<div class="flex gap-4">
							<label class="btn btn-primary btn-lg text-lg gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="17 8 12 3 7 8" />
									<line x1="12" y1="3" x2="12" y2="15" />
								</svg>
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

				<!-- File Grid Section (Only shown if files exist and not in View mode) -->
				{#if convertedFiles.length > 0}
					<div class="mb-4">
						<div class="flex justify-between items-center mb-4">
							<h2 class="text-xl font-bold">
								{convertedFiles.length === 1
									? t.fileCount.replace('{count}', '1')
									: t.filesCount.replace('{count}', convertedFiles.length.toString())}
							</h2>
							<button class="btn btn-error btn-sm gap-2" on:click={clearQueue}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M3 6h18" />
									<path
										d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
									/>
									<line x1="10" y1="11" x2="10" y2="17" />
									<line x1="14" y1="11" x2="14" y2="17" />
								</svg>
								{t.clearFiles || 'Clear All'}
							</button>
						</div>

						<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{#each convertedFiles as file, i (file.name + i + file.format)}
								<div
									class="card bg-base-100 border border-base-300 overflow-hidden transition-all hover:shadow-md"
									in:fade={{ duration: 300, delay: i * 50 }}
								>
									<figure class="relative pt-[100%] bg-base-300 flex items-center justify-center">
										<!-- Always show SVG preview, even for PDF -->
										<img
											src={file.preview}
											alt={file.name}
											class="absolute inset-0 w-full h-full object-contain p-2"
										/>
										<!-- Format badge -->
										<div
											class="absolute top-3 left-3 badge badge-lg badge-primary text-primary-content font-bold"
										>
											{t.formats[file.format]}
										</div>

										<!-- File size badge -->
										{#if file.size}
											<div class="absolute top-3 right-3 badge badge-lg badge-ghost">
												{file.size}
											</div>
										{/if}

										{#if convertingIndexes.includes(i) || (isConverting && !file.url)}
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
										<h3 class="card-title text-base truncate">{file.name}</h3>
										<div class="card-actions justify-end mt-2">
											<a
												href={file.url}
												download={file.name}
												class="btn btn-primary {!file.url && 'btn-disabled'} gap-2"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-5 w-5"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													stroke-width="2"
													stroke-linecap="round"
													stroke-linejoin="round"
												>
													<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
													<polyline points="7 10 12 15 17 10" />
													<line x1="12" y1="15" x2="12" y2="3" />
												</svg>
												{t.download}
											</a>
										</div>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div class="flex justify-center mt-8">
						<button class="btn btn-primary btn-lg gap-2 text-lg" on:click={downloadAll}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="7 10 12 15 17 10" />
								<line x1="12" y1="15" x2="12" y2="3" />
							</svg>
							{t.downloadAll}
						</button>
					</div>
				{/if}
				<!-- End File Grid Section -->
			{:else}
				<!-- SVG Viewer Section (Only shown when View tab is active) -->
				<div
					class="border-3 border-dashed rounded-xl p-10 text-center bg-base-100 border-base-300 mb-8"
				>
					<div class="flex flex-col items-center justify-center gap-6">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-16 w-16 text-primary mb-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
						<h2 class="card-title text-2xl">{t.viewerTitle}</h2>
						<p class="text-base-content/80 mt-2">{t.viewerDescription}</p>
						<div class="card-actions mt-4">
							<label class="btn btn-primary btn-lg text-lg gap-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<polyline points="17 8 12 3 7 8" />
									<line x1="12" y1="3" x2="12" y2="15" />
								</svg>
								{t.uploadToView}
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
			{/if}
		</div>

		<!-- SEO Content -->
		{#if t.seo?.conversions?.[activeTab]?.descriptionHtml}
			<div class="mt-16 prose prose-lg max-w-5xl mx-auto bg-base-100 p-8 rounded-lg shadow">
				<h2 class="text-3xl font-bold mb-4">{conversionInfo.title}</h2>
				{@html conversionInfo.descriptionHtml}

				<h3 class="mt-8 mb-4 text-2xl font-semibold">
					{t.seo?.steps?.title?.replace('{format}', t.formats[activeTab])}
				</h3>
				<ol class="list-decimal list-inside space-y-2">
					<li>{t.seo?.steps?.upload || 'Upload your SVG file.'}</li>
					<li>{t.seo?.steps?.wait || 'Wait for processing.'}</li>
					<li>
						{t.seo?.steps?.download?.replace('{format}', t.formats[activeTab]) ||
							'Download your file.'}
					</li>
				</ol>

				<p class="mt-8 text-sm text-base-content/70">{t.seo?.privacy}</p>
			</div>
		{/if}

		<!-- Footer -->
		<footer class="footer footer-center p-10 mt-16 text-base-content">
			<div>
				<p class="font-bold">
					<Logo size="h-6 w-6 inline-block mr-2" />
					{t.seo?.domain || 'SVG Converter'}
				</p>
				<p>{t.seo?.footer?.since || '© 2025'}</p>
				<p>{t.seo?.footer?.rights || 'All rights reserved'}</p>
			</div>
		</footer>
	</div>
</div>
