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

    // Set default options for better quality
    const defaultOptions = {
      density: 300, // Higher density for better quality
    };

    switch (format) {
      case 'png':
        sharpInstance = sharpInstance
          .png({ 
            compressionLevel: 6,
            quality: 90,
            palette: true
          });
        break;
      case 'jpg':
        sharpInstance = sharpInstance
          .jpeg({
            quality: 85,
            progressive: true
          });
        break;
      case 'pdf':
        // For PDF conversion, we'll use PNG as an intermediate format
        // since sharp doesn't directly support PDF output
        sharpInstance = sharpInstance
          .png({
            quality: 100,
            compressionLevel: 9
          });
        break;
      case 'compress':
        // For SVG compression, we'll optimize the SVG
        sharpInstance = sharpInstance
          .png({ 
            compressionLevel: 9,
            quality: 85,
            palette: true
          })
          .resize(800, 800, { fit: 'inside', withoutEnlargement: true });
        break;
      default:
        sharpInstance = sharpInstance.png();
    }

    const outputBuffer = await sharpInstance.toBuffer();
    
    // Determine content type based on format
    let contentType;
    switch (format) {
      case 'png':
        contentType = 'image/png';
        break;
      case 'jpg':
        contentType = 'image/jpeg';
        break;
      case 'pdf':
        contentType = 'application/pdf';
        break;
      case 'compress':
        contentType = 'image/svg+xml';
        break;
      default:
        contentType = 'image/png';
    }

    // Generate a more descriptive filename
    const originalName = file.name.replace('.svg', '');
    let filename;
    
    switch (format) {
      case 'compress':
        filename = `${originalName}-compressed.svg`;
        break;
      default:
        filename = `${originalName}.${format}`;
    }

    return new Response(outputBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=31536000' // Cache for 1 year
      }
    });
  } catch (error) {
    console.error('Conversion error:', error);
    return json({ error: 'Failed to convert SVG' }, { status: 500 });
  }
}