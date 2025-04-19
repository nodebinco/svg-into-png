export type Language = 'en' | 'es' | 'th';
export type Format = 'png' | 'jpg' | 'pdf' | 'compress' | 'view';

interface ConversionInfo {
	title: string;
	description: string;
	icon: string;
	whyConvert: string;
	howToConvert: string[];
}

interface Translation {
	title: string;
	description: string;
	dragDrop: string;
	or: string;
	browseFiles: string;
	clearFiles: string;
	convertTo: string;
	downloadAll: string;
	formats: Record<Format, string>;
	seo: {
		baseTitle: string;
		domain: string;
		privacy: string;
		footer: {
			since: string;
			rights: string;
		};
		conversions: Record<Format, ConversionInfo>;
		steps: {
			title: string;
			upload: string;
			wait: string;
			download: string;
		};
	};
}

export const languages: Record<Language, Translation> = {
	en: {
		title: 'SVG Converter',
		description: 'Convert your SVG files to various formats instantly',
		dragDrop: 'Drag & drop your SVG files here',
		or: 'or',
		browseFiles: 'Browse Files',
		clearFiles: 'Clear Files',
		convertTo: 'Convert to',
		downloadAll: 'Download All',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'Compress',
			view: 'View'
		},
		seo: {
			baseTitle: 'SVG to {format} Converter',
			domain: 'svgintopng.com',
			privacy:
				'All conversions happen in your browser - your files are never uploaded to our servers, ensuring complete privacy and security.',
			footer: {
				since: 'Free SVG conversion tools since 2023',
				rights: '© 2023 svgintopng.com - All rights reserved'
			},
			conversions: {
				png: {
					title: 'SVG to PNG Converter',
					description:
						"Convert SVG vector graphics to PNG images with transparency support. Perfect for using vector graphics in applications that don't support SVG.",
					icon: 'image',
					whyConvert:
						"PNG files support transparency and are widely compatible with all applications and websites. Converting SVG to PNG is useful when you need to use your vector graphics in applications that don't support SVG, or when you need a fixed-size raster image for specific purposes.",
					howToConvert: [
						'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
						'Wait for the automatic conversion to complete',
						'Download your converted PNG file'
					]
				},
				jpg: {
					title: 'SVG to JPG Converter',
					description:
						'Convert SVG files to JPG images with customizable quality. Ideal for web content and email attachments where file size matters.',
					icon: 'image',
					whyConvert:
						'JPG files are highly compressed and ideal for photographs or complex images where file size matters. Converting SVG to JPG is useful when you need smaller file sizes for web use, email attachments, or when transparency is not required.',
					howToConvert: [
						'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
						'Wait for the automatic conversion to complete',
						'Download your converted JPG file'
					]
				},
				pdf: {
					title: 'SVG to PDF Converter',
					description:
						'Convert SVG files to PDF documents while preserving vector quality. Perfect for creating printable documents from vector graphics.',
					icon: 'file-text',
					whyConvert:
						"PDF files are perfect for documents and printable materials. Converting SVG to PDF maintains vector quality while creating a document format that's easy to share, print, and view on any device without special software.",
					howToConvert: [
						'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
						'Wait for the automatic conversion to complete',
						'Download your converted PDF file'
					]
				},
				compress: {
					title: 'SVG Compression',
					description:
						'Compress SVG files by removing unnecessary data and reducing file size. Makes SVGs faster to load and easier to work with.',
					icon: 'zap',
					whyConvert:
						'Compressing SVG files reduces their size by removing unnecessary data, optimizing paths, and minifying code. This makes your SVG files load faster on websites and applications while maintaining their vector quality.',
					howToConvert: [
						'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
						'Wait for the automatic compression to complete',
						'Download your compressed SVG file'
					]
				},
				view: {
					title: 'SVG Viewer',
					description:
						'View and inspect SVG files directly in your browser. No installation required.',
					icon: 'eye',
					whyConvert:
						'Viewing SVG files in a dedicated viewer allows you to inspect the vector graphics, check dimensions, and ensure quality before using them in your projects.',
					howToConvert: [
						'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
						'The SVG will be displayed instantly in the viewer',
						'Inspect and download if needed'
					]
				}
			},
			steps: {
				title: 'How to Convert SVG to {format}',
				upload:
					'Upload your SVG file by dragging and dropping it or clicking the "Browse Files" button',
				wait: 'Wait for the automatic conversion to complete',
				download: 'Download your converted {format} file'
			}
		}
	},
	es: {
		title: 'Convertidor SVG',
		description: 'Convierte tus archivos SVG a varios formatos al instante',
		dragDrop: 'Arrastra y suelta tus archivos SVG aquí',
		or: 'o',
		browseFiles: 'Explorar Archivos',
		clearFiles: 'Limpiar',
		convertTo: 'Convertir a',
		downloadAll: 'Descargar Todo',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'Comprimir',
			view: 'Ver'
		},
		seo: {
			baseTitle: 'Convertidor de SVG a {format}',
			domain: 'svgintopng.com',
			privacy:
				'Todas las conversiones ocurren en tu navegador - tus archivos nunca se suben a nuestros servidores, garantizando total privacidad y seguridad.',
			footer: {
				since: 'Herramientas gratuitas de conversión SVG desde 2023',
				rights: '© 2023 svgintopng.com - Todos los derechos reservados'
			},
			conversions: {
				png: {
					title: 'Convertidor de SVG a PNG',
					description:
						'Convierte gráficos vectoriales SVG a imágenes PNG con soporte de transparencia. Perfecto para usar gráficos vectoriales en aplicaciones que no admiten SVG.',
					icon: 'image',
					whyConvert:
						'Los archivos PNG admiten transparencia y son ampliamente compatibles con todas las aplicaciones y sitios web. Convertir SVG a PNG es útil cuando necesitas usar tus gráficos vectoriales en aplicaciones que no admiten SVG, o cuando necesitas una imagen raster de tamaño fijo para propósitos específicos.',
					howToConvert: [
						'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
						'Espera a que se complete la conversión automática',
						'Descarga tu archivo PNG convertido'
					]
				},
				jpg: {
					title: 'Convertidor de SVG a JPG',
					description:
						'Convierte archivos SVG a imágenes JPG con calidad personalizable. Ideal para contenido web y adjuntos de correo electrónico donde el tamaño del archivo importa.',
					icon: 'image',
					whyConvert:
						'Los archivos JPG están altamente comprimidos y son ideales para fotografías o imágenes complejas donde el tamaño del archivo importa. Convertir SVG a JPG es útil cuando necesitas tamaños de archivo más pequeños para uso web, adjuntos de correo electrónico, o cuando no se requiere transparencia.',
					howToConvert: [
						'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
						'Espera a que se complete la conversión automática',
						'Descarga tu archivo JPG convertido'
					]
				},
				pdf: {
					title: 'Convertidor de SVG a PDF',
					description:
						'Convierte archivos SVG a documentos PDF manteniendo la calidad vectorial. Perfecto para crear documentos imprimibles a partir de gráficos vectoriales.',
					icon: 'file-text',
					whyConvert:
						'Los archivos PDF son perfectos para documentos y materiales imprimibles. Convertir SVG a PDF mantiene la calidad vectorial mientras crea un formato de documento que es fácil de compartir, imprimir y ver en cualquier dispositivo sin software especial.',
					howToConvert: [
						'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
						'Espera a que se complete la conversión automática',
						'Descarga tu archivo PDF convertido'
					]
				},
				compress: {
					title: 'Compresión de SVG',
					description:
						'Comprime archivos SVG eliminando datos innecesarios y reduciendo el tamaño del archivo. Hace que los SVG se carguen más rápido y sean más fáciles de trabajar.',
					icon: 'zap',
					whyConvert:
						'Comprimir archivos SVG reduce su tamaño eliminando datos innecesarios, optimizando rutas y minificando código. Esto hace que tus archivos SVG se carguen más rápido en sitios web y aplicaciones mientras mantienen su calidad vectorial.',
					howToConvert: [
						'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
						'Espera a que se complete la compresión automática',
						'Descarga tu archivo SVG comprimido'
					]
				},
				view: {
					title: 'Visor de SVG',
					description:
						'Visualiza e inspecciona archivos SVG directamente en tu navegador. No requiere instalación.',
					icon: 'eye',
					whyConvert:
						'Ver archivos SVG en un visor dedicado te permite inspeccionar los gráficos vectoriales, verificar dimensiones y asegurar la calidad antes de usarlos en tus proyectos.',
					howToConvert: [
						'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
						'El SVG se mostrará instantáneamente en el visor',
						'Inspecciona y descarga si es necesario'
					]
				}
			},
			steps: {
				title: 'Cómo convertir SVG a {format}',
				upload:
					'Sube tu archivo SVG arrastrándolo y soltándolo o haciendo clic en el botón "Explorar Archivos"',
				wait: 'Espera a que se complete la conversión automática',
				download: 'Descarga tu archivo {format} convertido'
			}
		}
	},
	th: {
		title: 'ตัวแปลง SVG',
		description: 'แปลงไฟล์ SVG ของคุณเป็นรูปแบบต่างๆ ได้ทันที',
		dragDrop: 'ลากและวางไฟล์ SVG ของคุณที่นี่',
		or: 'หรือ',
		browseFiles: 'เลือกไฟล์',
		clearFiles: 'เคลียร์ไฟล์',
		convertTo: 'แปลงเป็น',
		downloadAll: 'ดาวน์โหลดทั้งหมด',
		formats: {
			png: 'PNG',
			jpg: 'JPG',
			pdf: 'PDF',
			compress: 'บีบอัด',
			view: 'ดู'
		},
		seo: {
			baseTitle: 'เครื่องมือแปลง SVG เป็น {format}',
			domain: 'svgintopng.com',
			privacy:
				'การแปลงทั้งหมดเกิดขึ้นในเบราว์เซอร์ของคุณ - ไฟล์ของคุณไม่เคยถูกอัปโหลดไปยังเซิร์ฟเวอร์ของเรา เพื่อความเป็นส่วนตัวและความปลอดภัยที่สมบูรณ์',
			footer: {
				since: 'เครื่องมือแปลง SVG ฟรีตั้งแต่ปี 2023',
				rights: '© 2023 svgintopng.com - สงวนลิขสิทธิ์ทั้งหมด'
			},
			conversions: {
				png: {
					title: 'เครื่องมือแปลง SVG เป็น PNG',
					description:
						'แปลงกราฟิกเวกเตอร์ SVG เป็นรูปภาพ PNG ที่รองรับความโปร่งใส เหมาะสำหรับการใช้กราฟิกเวกเตอร์ในแอปพลิเคชันที่ไม่รองรับ SVG',
					icon: 'image',
					whyConvert:
						'ไฟล์ PNG รองรับความโปร่งใสและเข้ากันได้กับทุกแอปพลิเคชันและเว็บไซต์ การแปลง SVG เป็น PNG มีประโยชน์เมื่อคุณต้องการใช้กราฟิกเวกเตอร์ในแอปพลิเคชันที่ไม่รองรับ SVG หรือเมื่อคุณต้องการภาพแรสเตอร์ขนาดคงที่สำหรับวัตถุประสงค์เฉพาะ',
					howToConvert: [
						'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
						'รอให้การแปลงอัตโนมัติเสร็จสมบูรณ์',
						'ดาวน์โหลดไฟล์ PNG ที่แปลงแล้วของคุณ'
					]
				},
				jpg: {
					title: 'เครื่องมือแปลง SVG เป็น JPG',
					description:
						'แปลงไฟล์ SVG เป็นรูปภาพ JPG ที่มีคุณภาพที่ปรับแต่งได้ เหมาะสำหรับเนื้อหาเว็บและไฟล์แนบอีเมลที่ขนาดไฟล์มีความสำคัญ',
					icon: 'image',
					whyConvert:
						'ไฟล์ JPG มีการบีบอัดสูงและเหมาะสำหรับภาพถ่ายหรือภาพที่ซับซ้อนที่ขนาดไฟล์มีความสำคัญ การแปลง SVG เป็น JPG มีประโยชน์เมื่อคุณต้องการขนาดไฟล์ที่เล็กลงสำหรับการใช้งานบนเว็บ ไฟล์แนบอีเมล หรือเมื่อไม่จำเป็นต้องมีความโปร่งใส',
					howToConvert: [
						'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
						'รอให้การแปลงอัตโนมัติเสร็จสมบูรณ์',
						'ดาวน์โหลดไฟล์ JPG ที่แปลงแล้วของคุณ'
					]
				},
				pdf: {
					title: 'เครื่องมือแปลง SVG เป็น PDF',
					description:
						'แปลงไฟล์ SVG เป็นเอกสาร PDF โดยรักษาคุณภาพเวกเตอร์ เหมาะสำหรับการสร้างเอกสารที่พิมพ์ได้จากกราฟิกเวกเตอร์',
					icon: 'file-text',
					whyConvert:
						'ไฟล์ PDF เหมาะสำหรับเอกสารและวัสดุที่พิมพ์ได้ การแปลง SVG เป็น PDF รักษาคุณภาพเวกเตอร์ในขณะที่สร้างรูปแบบเอกสารที่ง่ายต่อการแชร์ พิมพ์ และดูบนอุปกรณ์ใดๆ โดยไม่ต้องใช้ซอฟต์แวร์พิเศษ',
					howToConvert: [
						'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
						'รอให้การแปลงอัตโนมัติเสร็จสมบูรณ์',
						'ดาวน์โหลดไฟล์ PDF ที่แปลงแล้วของคุณ'
					]
				},
				compress: {
					title: 'การบีบอัด SVG',
					description:
						'บีบอัดไฟล์ SVG โดยลบข้อมูลที่ไม่จำเป็นและลดขนาดไฟล์ ทำให้ SVG โหลดเร็วขึ้นและง่ายต่อการทำงาน',
					icon: 'zap',
					whyConvert:
						'การบีบอัดไฟล์ SVG ลดขนาดโดยการลบข้อมูลที่ไม่จำเป็น ปรับเส้นทางให้เหมาะสม และลดขนาดโค้ด ทำให้ไฟล์ SVG ของคุณโหลดเร็วขึ้นบนเว็บไซต์และแอปพลิเคชันในขณะที่รักษาคุณภาพเวกเตอร์',
					howToConvert: [
						'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
						'รอให้การบีบอัดอัตโนมัติเสร็จสมบูรณ์',
						'ดาวน์โหลดไฟล์ SVG ที่บีบอัดแล้วของคุณ'
					]
				},
				view: {
					title: 'เครื่องมือดู SVG',
					description: 'ดูและตรวจสอบไฟล์ SVG โดยตรงในเบราว์เซอร์ของคุณ ไม่จำเป็นต้องติดตั้ง',
					icon: 'eye',
					whyConvert:
						'การดูไฟล์ SVG ในเครื่องมือดูเฉพาะช่วยให้คุณตรวจสอบกราฟิกเวกเตอร์ ตรวจสอบขนาด และตรวจสอบคุณภาพก่อนใช้ในโปรเจกต์ของคุณ',
					howToConvert: [
						'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
						'SVG จะแสดงทันทีในเครื่องมือดู',
						'ตรวจสอบและดาวน์โหลดหากจำเป็น'
					]
				}
			},
			steps: {
				title: 'วิธีแปลง SVG เป็น {format}',
				upload: 'อัปโหลดไฟล์ SVG ของคุณโดยการลากและวางหรือคลิกที่ปุ่ม "เลือกไฟล์"',
				wait: 'รอให้การแปลงอัตโนมัติเสร็จสมบูรณ์',
				download: 'ดาวน์โหลดไฟล์ {format} ที่แปลงแล้วของคุณ'
			}
		}
	}
};
