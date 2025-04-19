export type Language = 'en' | 'es' | 'th';
export type Format = 'png' | 'jpg' | 'pdf' | 'compress' | 'view';

interface ConversionInfo {
	title: string;
	description: string;
	descriptionHtml: string;
	icon: 'image' | 'file-text' | 'zap' | 'eye';
}

interface StepInfo {
	title: string;
	upload?: string;
	wait?: string;
	download?: string;
}

interface Translation {
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
	viewerTitle: string;
	viewerDescription: string;
	uploadToView: string;
	seo: {
		baseTitle: string;
		domain: string;
		conversions: Record<Format, ConversionInfo>;
		steps: StepInfo;
		privacy: string;
		footer: {
			since: string;
			rights: string;
		};
	};
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
		viewerTitle: 'SVG Viewer',
		viewerDescription: 'Upload or drag & drop an SVG file to view its content.',
		uploadToView: 'Upload SVG to View',
		seo: {
			baseTitle: 'Convert SVG to {format}',
			domain: 'svgintopng.com',
			conversions: {
				png: {
					title: 'SVG to PNG Conversion',
					description: 'Convert your SVG files to PNG images.',
					descriptionHtml: `<p>Easily convert your <strong>SVG vector files</strong> into versatile <strong>PNG raster images</strong>. PNGs are ideal for web use, supporting transparency and lossless compression. Perfect for logos, icons, and graphics where scalability isn't the primary need after conversion.</p><p>Our tool ensures high-quality output, preserving the visual fidelity of your original SVG.</p>`,
					icon: 'image'
				},
				jpg: {
					title: 'SVG to JPG Conversion',
					description: 'Transform your SVG files into JPG format.',
					descriptionHtml: `<p>Convert your <strong>SVG graphics</strong> into the widely supported <strong>JPG format</strong>. JPG is excellent for complex images with many colors, like photographs, using lossy compression to achieve smaller file sizes. Note that transparency is not supported in JPG.</p><p>Ideal for situations where file size is a major concern and transparency isn't needed.</p>`,
					icon: 'image'
				},
				pdf: {
					title: 'SVG to PDF Conversion',
					description: 'Convert your SVG files into PDF documents.',
					descriptionHtml: `<p>Turn your <strong>Scalable Vector Graphics (SVG)</strong> into professional <strong>Portable Document Format (PDF)</strong> files. PDFs embed the vector data, ensuring your graphics remain sharp and scalable within the document, perfect for printing and sharing.</p><p>Great for technical drawings, reports, and documents requiring high fidelity graphics.</p>`,
					icon: 'file-text'
				},
				compress: {
					title: 'Compress SVG Files',
					description: 'Optimize and reduce the file size of your SVG files.',
					descriptionHtml: `<p>Reduce the size of your <strong>SVG files</strong> significantly by optimizing their code. Our tool removes redundant information, cleans up code, and applies various optimization techniques using SVGO.</p><p>Compressed SVGs load faster and are more efficient, perfect for web usage while retaining scalability and quality.</p>`,
					icon: 'zap'
				},
				view: {
					title: 'SVG Viewer',
					description: 'Quickly view the contents of your SVG files.',
					descriptionHtml: `<p>Use this tool to instantly preview your <strong>SVG files</strong>. See how your vector graphic renders without needing specialized software. Useful for quick checks and verifying file contents.</p>`,
					icon: 'eye'
				}
			},
			steps: {
				title: 'How to convert SVG to {format}',
				upload: 'Upload your SVG file by dragging and dropping it or using the browse button.',
				wait: 'Wait for the conversion/compression process to complete.',
				download: 'Download your converted {format} file.'
			},
			privacy: 'Your files are processed securely and deleted from our servers after 1 hour.',
			footer: {
				since: '© 2024',
				rights: 'All rights reserved.'
			}
		}
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
		viewerTitle: 'Visor de SVG',
		viewerDescription: 'Carga o arrastra un archivo SVG para ver su contenido.',
		uploadToView: 'Cargar SVG para Ver',
		seo: {
			baseTitle: 'Convertidor de SVG a {format}',
			domain: 'svgintopng.com',
			conversions: {
				png: {
					title: 'Conversión de SVG a PNG',
					description: 'Convierte tus archivos SVG a imágenes PNG.',
					descriptionHtml: `<p>Convierte tus <strong>SVG vector files</strong> en imágenes <strong>PNG raster</strong> versátiles. PNG son ideales para uso web, soportando transparencia y sin pérdida de compresión. Perfectos para logos, íconos y gráficos donde la escalabilidad no es la necesidad principal después de la conversión.</p><p>Nuestro herramienta asegura una salida de alta calidad, preservando la fidelidad visual de tu original SVG.</p>`,
					icon: 'image'
				},
				jpg: {
					title: 'Conversión de SVG a JPG',
					description: 'Transforma tus archivos SVG a formato JPG.',
					descriptionHtml: `<p>Convierte tus <strong>SVG graphics</strong> en el formato de imagen <strong>JPG</strong> estándar. JPG es excelente para imágenes complejas con muchos colores, como fotografías, usando la compresión con pérdida para lograr tamaños de archivo más pequeños. Tenga en cuenta que la transparencia no se admite en JPG.</p><p>Ideal para situaciones donde el tamaño del archivo es una preocupación importante y no se necesita transparencia.</p>`,
					icon: 'image'
				},
				pdf: {
					title: 'Conversión de SVG a PDF',
					description: 'Convierte tus archivos SVG a documentos PDF.',
					descriptionHtml: `<p>Convierta sus <strong>SVG vector files</strong> en documentos <strong>Portable Document Format (PDF)</strong> profesionales accesibles universalmente. PDFs incrustan los datos vectoriales, asegurando que sus gráficos permanezcan nítidos y escalables dentro del documento, perfectos para imprimir y compartir.</p><p>Excelente para dibujos técnicos, informes y documentos que requieren gráficos de alta fidelidad.</p>`,
					icon: 'file-text'
				},
				compress: {
					title: 'Compresión de SVG',
					description: 'Optimiza y reduce el tamaño de tus archivos SVG.',
					descriptionHtml: `<p>Reduzca el tamaño de sus <strong>SVG files</strong> significativamente optimizando su código. Nuestro herramienta elimina la información redundante, limpia el código y aplica varias técnicas de optimización usando SVGO.</p><p>Los SVG comprimidos se cargan más rápidos y son más eficientes, perfectos para uso web mientras mantienen la escalabilidad y la calidad.</p>`,
					icon: 'zap'
				},
				view: {
					title: 'Visor de SVG',
					description: 'Visualiza rápidamente el contenido de tus archivos SVG.',
					descriptionHtml: `<p>Use este herramienta para ver instantáneamente el contenido de sus <strong>SVG files</strong>. Vea cómo se representa su gráfico vectorial sin necesidad de software especializado. Útil para verificaciones rápidas y verificación de contenido de archivo.</p>`,
					icon: 'eye'
				}
			},
			steps: {
				title: 'Cómo convertir SVG a {format}',
				upload: 'Sube tu archivo SVG arrastrándolo o usando el botón de explorar.',
				wait: 'Espera a que se complete el proceso de conversión/compresión.',
				download: 'Descarga tu archivo {format} convertido.'
			},
			privacy:
				'Tus archivos se procesan de manera segura y se eliminan de nuestros servidores después de 1 hora.',
			footer: {
				since: '© 2024',
				rights: 'Todos los derechos reservados.'
			}
		}
	} as Translation,
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
			compress: 'บีบอัด',
			view: 'ดู'
		},
		clearFiles: 'เคลียร์ไฟล์',
		filesCount: '{count} ไฟล์',
		fileCount: '{count} ไฟล์',
		converting: 'แปลงอยู่...',
		download: 'ดาวน์โหลด',
		viewerTitle: 'เครื่องมือดู SVG',
		viewerDescription: 'อัปโหลดหรือลากและวางไฟล์ SVG เพื่อดูเนื้อหาของมัน',
		uploadToView: 'อัปโหลด SVG เพื่อดู',
		seo: {
			baseTitle: 'เครื่องมือแปลง SVG เป็น {format}',
			domain: 'svgintopng.com',
			conversions: {
				png: {
					title: 'การแปลง SVG เป็น PNG',
					description: 'แปลงไฟล์ SVG ของคุณเป็นภาพ PNG คุณภาพสูง',
					descriptionHtml: `<p>การแปลงกราฟิกเวกเตอร์ SVG เป็นรูปภาพ PNG ที่รองรับความโปร่งใส เหมาะสำหรับการใช้กราฟิกเวกเตอร์ในแอปพลิเคชันที่ไม่รองรับ SVG</p><p>รูปภาพ PNG นี้สำหรับใช้งานบนเว็บไซต์ รองรับความโปร่งใสและการบีบอัดที่ไม่มีการสูญเสียข้อมูล สำหรับใช้งานบนเว็บไซต์หรือการสร้างรูปภาพสำหรับการใช้งานอื่นๆ ที่ไม่ต้องการความโปร่งใส</p>`,
					icon: 'image'
				},
				jpg: {
					title: 'การแปลง SVG เป็น JPG',
					description: 'แปลงไฟล์ SVG ของคุณเป็นรูปแบบภาพ JPG มาตรฐาน',
					descriptionHtml: `<p>การแปลงไฟล์ SVG เป็นรูปภาพ JPG ที่มีคุณภาพที่ปรับแต่งได้ เหมาะสำหรับเนื้อหาเว็บและไฟล์แนบอีเมลที่ขนาดไฟล์มีความสำคัญ</p><p>JPG มีการบีบอัดสูงและเหมาะสำหรับภาพถ่ายหรือภาพที่ซับซ้อนที่ขนาดไฟล์มีความสำคัญ การแปลง SVG เป็น JPG มีประโยชน์เมื่อคุณต้องการขนาดไฟล์ที่เล็กลงสำหรับการใช้งานบนเว็บ ไฟล์แนบอีเมล หรือเมื่อไม่จำเป็นต้องมีความโปร่งใส</p>`,
					icon: 'image'
				},
				pdf: {
					title: 'การแปลง SVG เป็น PDF',
					description: 'แปลงไฟล์ SVG ของคุณเป็นเอกสาร PDF ที่เข้าถึงได้สากล',
					descriptionHtml: `<p>การแปลงไฟล์ SVG เป็นเอกสาร PDF ที่รักษาคุณภาพเวกเตอร์ในขณะที่สร้างรูปแบบเอกสารที่ง่ายต่อการแชร์ พิมพ์ และดูบนอุปกรณ์ใดๆ โดยไม่ต้องใช้ซอฟต์แวร์พิเศษ</p><p>เอกสาร PDF นี้เหมาะสำหรับเอกสารและวัสดุที่พิมพ์ได้ สำหรับการสร้างเอกสารที่พิมพ์ได้จากกราฟิกเวกเตอร์</p>`,
					icon: 'file-text'
				},
				compress: {
					title: 'การบีบอัด SVG',
					description: 'ปรับปรุงและลดขนาดไฟล์ SVG ของคุณ',
					descriptionHtml: `<p>การบีบอัดไฟล์ SVG ลดขนาดโดยการลบข้อมูลที่ไม่จำเป็น ปรับเส้นทางให้เหมาะสม และลดขนาดโค้ด ทำให้ไฟล์ SVG ของคุณโหลดเร็วขึ้นบนเว็บไซต์และแอปพลิเคชันในขณะที่รักษาคุณภาพเวกเตอร์</p><p>การบีบอัดนี้ลดขนาดโดยการลบข้อมูลที่ไม่จำเป็น ปรับเส้นทางให้เหมาะสม และลดขนาดโค้ด ทำให้ไฟล์ SVG ของคุณโหลดเร็วขึ้นบนเว็บไซต์และแอปพลิเคชันในขณะที่รักษาคุณภาพเวกเตอร์</p>`,
					icon: 'zap'
				},
				view: {
					title: 'เครื่องมือดู SVG',
					description: 'ดูเนื้อหาไฟล์ SVG ของคุณอย่างรวดเร็ว',
					descriptionHtml: `<p>การดูไฟล์ SVG ในเครื่องมือดูเฉพาะช่วยให้คุณตรวจสอบกราฟิกเวกเตอร์ ตรวจสอบขนาด และตรวจสอบคุณภาพก่อนใช้ในโปรเจกต์ของคุณ</p>`,
					icon: 'eye'
				}
			},
			steps: {
				title: 'วิธีแปลง SVG เป็น {format}',
				upload: 'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือใช้ปุ่มเลือกไฟล์',
				wait: 'รอให้กระบวนการแปลง/บีบอัดเสร็จสมบูรณ์',
				download: 'ดาวน์โหลดไฟล์ {format} ที่แปลงแล้วของคุณ'
			},
			privacy:
				'ไฟล์ของคุณจะถูกประมวลผลอย่างปลอดภัยและถูกลบออกจากเซิร์ฟเวอร์ของเราหลังจาก 1 ชั่วโมง',
			footer: {
				since: '© 2024',
				rights: 'สงวนลิขสิทธิ์ทั้งหมด'
			}
		}
	} as Translation
};
