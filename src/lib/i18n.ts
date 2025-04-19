export type Language = 'en' | 'es' | 'th';
export type Format = 'png' | 'jpg' | 'pdf' | 'optimize' | 'view';

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
}

export const languages: Record<Language, Translation> = {
  en: {
    title: "SVG Converter",
    description: "Convert your SVG files to various formats instantly",
    dragDrop: "Drag & drop your SVG files here",
    or: "or",
    browseFiles: "Browse Files",
    clearFiles: "Clear",
    convertTo: "Convert to",
    downloadAll: "Download All",
    formats: {
      png: "PNG",
      jpg: "JPG",
      pdf: "PDF",
      optimize: "Optimize",
      view: "View"
    }
  },
  es: {
    title: "Convertidor SVG",
    description: "Convierte tus archivos SVG a varios formatos al instante",
    dragDrop: "Arrastra y suelta tus archivos SVG aquí",
    or: "o",
    browseFiles: "Explorar Archivos",
    clearFiles: "Clear",
    convertTo: "Convertir a",
    downloadAll: "Descargar Todo",
    formats: {
      png: "PNG",
      jpg: "JPG",
      pdf: "PDF",
      optimize: "Optimizar",
      view: "Ver"
    }
  },
  th: {
    title: "ตัวแปลง SVG",
    description: "แปลงไฟล์ SVG ของคุณเป็นรูปแบบต่างๆ ได้ทันที",
    dragDrop: "ลากและวางไฟล์ SVG ของคุณที่นี่",
    or: "หรือ",
    browseFiles: "เลือกไฟล์",
    clearFiles: "เคลียร์ไฟล์",
    convertTo: "แปลงเป็น",
    downloadAll: "ดาวน์โหลดทั้งหมด",
    formats: {
      png: "PNG",
      jpg: "JPG",
      pdf: "PDF",
      optimize: "ปรับแต่ง",
      view: "ดู"
    }
  }
}; 