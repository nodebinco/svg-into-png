import sharp from 'sharp';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const format = formData.get('format') as string;
    
    if (!file) {
      return json({ error: 'No file provided' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    let sharpInstance = sharp(Buffer.from(buffer));

    switch (format) {
      case 'png':
        sharpInstance = sharpInstance.png();
        break;
      case 'jpg':
        sharpInstance = sharpInstance.jpeg();
        break;
      case 'pdf':
        // For PDF conversion, we'll need additional libraries
        // This is a placeholder for now
        sharpInstance = sharpInstance.png();
        break;
      case 'optimize':
        sharpInstance = sharpInstance
          .png({ compressionLevel: 9 })
          .resize(800, 800, { fit: 'inside' });
        break;
      case 'view':
        sharpInstance = sharpInstance.png();
        break;
      default:
        sharpInstance = sharpInstance.png();
    }

    const outputBuffer = await sharpInstance.toBuffer();
    const contentType = format === 'pdf' ? 'application/pdf' : `image/${format}`;

    return new Response(outputBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${file.name.replace('.svg', `.${format}`)}"`
      }
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return json({ error: 'Failed to convert SVG' }, { status: 500 });
  }
} 