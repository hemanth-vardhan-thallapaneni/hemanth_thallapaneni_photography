import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  // Using static open-source images from Unsplash (Cinematic/Architectural/Tech)
  private staticImages: any[] = [
    {
      name: 'NEON_DISTRICT',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200',
      category: 'architecture',
    },
    {
      name: 'INDUSTRIAL_UNIT_01',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
      category: 'architecture',
    },
    {
      name: 'CYBER_PUNK_VIBE',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=1200',
      category: 'auto',
    },
    {
      name: 'BRUTAL_CONCRETE',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1518005020250-6759229547b5?auto=format&fit=crop&q=80&w=1200',
      category: 'architecture',
    },
    {
      name: 'NIGHT_DRIVE',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1493238792040-d7104756681b?auto=format&fit=crop&q=80&w=1200',
      category: 'auto',
    },
    {
      name: 'VOID_STRUCTURE',
      OriginalImageUrl: 'https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80&w=1200',
      category: 'nature',
    }
  ];

  constructor() {}

  getAllPhotos(): Observable<any[]> {
    return of(this.staticImages);
  }

  // Placeholder for download logic to prevent errors
  downloadOriginal(imageObj: any) {
    window.open(imageObj.OriginalImageUrl, '_blank');
  }

  // Stub for components that might still call these
  uploadPhotos(file: File, category: string, orienations: any) {
    console.warn('Upload disabled: Firebase removed.');
  }
}

