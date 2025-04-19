<script lang="ts">
  import { onMount } from 'svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { languages, type Language, type Format } from '$lib/i18n';
  
  let files: File[] = [];
  let isDragging = false;
  let convertedFiles: { name: string; url: string; preview?: string; format: Format }[] = [];
  let selectedFormat: Format = 'png';
  let lang: Language = 'en';
  let t = languages[lang];
  let activeTab: Format = 'png';
  let isConverting = false;
  let convertingIndexes: number[] = [];

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
    }
  }

  function clearQueue() {
    files = [];
    // Cleanup URLs to prevent memory leaks
    convertedFiles.forEach(file => {
      if (file.url) URL.revokeObjectURL(file.url);
      if (file.preview) URL.revokeObjectURL(file.preview);
    });
    convertedFiles = [];
  }

  async function createPreview(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.readAsDataURL(file);
    });
  }

  async function handleFiles(newFiles: File[]) {
    const validFiles = newFiles.filter(file => file.type === 'image/svg+xml');
    if (validFiles.length > 0) {
      // Create previews first
      const filesWithPreviews = await Promise.all(
        validFiles.map(async (file) => {
          const preview = await createPreview(file);
          return { file, preview };
        })
      );
      
      const oldFilesCount = files.length;
      files = [...files, ...filesWithPreviews.map(f => f.file)];
      
      const newConvertedFiles = filesWithPreviews.map(f => ({
        name: f.file.name,
        url: '', // Will be set after conversion
        preview: f.preview,
        format: activeTab
      }));
      
      convertedFiles = [...convertedFiles, ...newConvertedFiles];
      
      // Convert only the newly added files
      convertFiles(newConvertedFiles, oldFilesCount);
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
        
        convertingIndexes = convertingIndexes.filter(idx => idx !== index);
      }
      
      convertedFiles = newConvertedFiles;
    } catch (error) {
      console.error('Conversion error:', error);
      alert('Failed to convert files. Please try again.');
    } finally {
      isConverting = false;
    }
  }

  function getFileExtension(format: Format): string {
    switch (format) {
      case 'png': return '.png';
      case 'jpg': return '.jpg';
      case 'pdf': return '.pdf';
      case 'optimize': return '.svg';
      default: return '.png';
    }
  }

  function downloadAll() {
    convertedFiles.forEach(file => {
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
  }

  // Cleanup URLs when component is destroyed
  onMount(() => {
    return () => {
      convertedFiles.forEach(file => {
        if (file.url) URL.revokeObjectURL(file.url);
        if (file.preview) URL.revokeObjectURL(file.preview);
      });
    };
  });
</script>

<div class="min-h-screen bg-base-200">
  <div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center gap-2">
        <Logo size="h-8 w-8" />
        <h1 class="text-4xl font-bold text-primary">{t.title}</h1>
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          {lang.toUpperCase()}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          {#each Object.keys(languages) as langCode}
            <li><button class="btn btn-ghost justify-start" on:click={() => setLanguage(langCode as Language)}>{langCode.toUpperCase()}</button></li>
          {/each}
        </ul>
      </div>
    </div>

    <p class="text-lg text-base-content/70 text-center mb-8">{t.description}</p>

    <div class="max-w-5xl mx-auto">
      <!-- Format Tabs -->
      <div class="tabs tabs-boxed bg-base-100 mb-8 flex justify-center">
        <button 
          class="tab tab-lg {activeTab === 'png' ? 'tab-active' : ''}" 
          on:click={() => handleTabClick('png')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {t.formats.png}
        </button>
        <button 
          class="tab tab-lg {activeTab === 'jpg' ? 'tab-active' : ''}" 
          on:click={() => handleTabClick('jpg')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {t.formats.jpg}
        </button>
        <button 
          class="tab tab-lg {activeTab === 'pdf' ? 'tab-active' : ''}" 
          on:click={() => handleTabClick('pdf')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          {t.formats.pdf}
        </button>
        <button 
          class="tab tab-lg {activeTab === 'optimize' ? 'tab-active' : ''}" 
          on:click={() => handleTabClick('optimize')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {t.formats.optimize}
        </button>
      </div>

      <!-- Drop Zone with integrated buttons -->
      <div
        class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors bg-base-100 {isDragging ? 'border-primary bg-primary/10' : 'border-base-300'} mb-8"
        on:dragover={handleDragOver}
        on:dragleave={handleDragLeave}
        on:drop={handleDrop}
      >
        <div class="flex flex-col items-center justify-center gap-4">
          <Logo />
          <div>
            <p class="text-lg font-medium">{t.dragDrop}</p>
            <p class="text-sm text-base-content/70">{t.or}</p>
          </div>
          <div class="flex gap-4">
            <label class="btn btn-primary btn-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" />
              </svg>
              {t.browseFiles}
              <input type="file" accept=".svg" class="hidden" multiple on:change={handleFileInput} />
            </label>
            {#if files.length > 0}
              <button class="btn btn-error btn-lg" on:click={clearQueue}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {t.clearFiles}
              </button>
            {/if}
          </div>
        </div>
      </div>

      <!-- File Grid -->
      {#if convertedFiles.length > 0}
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {#each convertedFiles as file, i (file.name + i)}
            <div class="card bg-base-100 shadow-xl">
              <figure class="relative pt-[100%]">
                <img
                  src={file.preview}
                  alt={file.name}
                  class="absolute inset-0 w-full h-full object-contain p-2"
                />
                <!-- Format overlay - more visible with background -->
                <div class="absolute top-2 left-2 bg-primary text-primary-content px-3 py-1 rounded-lg text-sm font-bold shadow-md">
                  {file.format.toUpperCase()}
                </div>
                {#if convertingIndexes.includes(i) || (isConverting && !file.url)}
                  <div class="absolute inset-0 bg-base-100/80 flex items-center justify-center">
                    <span class="loading loading-spinner loading-lg text-primary"></span>
                  </div>
                {/if}
              </figure>
              <div class="card-body p-4">
                <h3 class="card-title text-sm truncate">{file.name}</h3>
                <div class="card-actions justify-end">
                  <a
                    href={file.url}
                    download={file.name}
                    class="btn btn-primary btn-sm {!file.url && 'btn-disabled'}"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <div class="flex justify-center mt-8">
          <button class="btn btn-primary btn-lg" on:click={downloadAll}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            {t.downloadAll}
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
