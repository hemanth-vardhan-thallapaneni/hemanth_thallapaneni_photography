import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import {
  AngularFireStorage,
  AngularFireStorageReference,
} from '@angular/fire/compat/storage';
import { NgxImageCompressService } from 'ngx-image-compress';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private photographyPath = 'images/photography';
  photographyRef: AngularFireList<any> | undefined;
  images: any[] = [
    {
      image_url: '../../../assets/images/IMG_0016.JPG',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0706.jpg',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0160.JPG',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_0059.JPG',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0117.jpg',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_7228.jpg',
      category: 'auto',
    },
    {
      image_url: '../../../assets/images/IMG_0135.JPG',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_0156.JPG',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_0159.JPG',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_0031.JPG',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_7227.jpg',
      category: 'auto',
    },
    {
      image_url: '../../../assets/images/IMG_0164.JPG',
      category: 'architecture',
    },
    {
      image_url: '../../../assets/images/IMG_0221.JPG',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0384-Enhanced-NR.jpg',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0415.jpg',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0558-2.jpg',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0602.jpg',
      category: 'nature',
    },

    {
      image_url: '../../../assets/images/IMG_0813.jpg',
      category: 'nature',
    },
    {
      image_url: '../../../assets/images/IMG_0924.jpg',
      category: 'nature',
    },
  ];

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private imageCompress: NgxImageCompressService
  ) {
    this.photographyRef = db.list(this.photographyPath);
    //this.uploadPhotos();
  }

  getAllPhotos(): AngularFireList<any> | any {
    return this.db.list<any>('images/photography').valueChanges();
  }
  uploadPhotos(file: File, category: string, orienations: any) {
    if (file && category && orienations) {
      let thumbnailImage;
      this.imageCompress.uploadFile().then(({ image, orientation }) => {
        this.imageCompress
          .compressFile(image, orientation, 50, 50) // 50% ratio, 50% quality
          .then((compressedImage) => {
            this.uploadImageAndThumbnail(
              file,
              compressedImage,
              category,
              orienations
            );
          });
      });
    }
  }

  async uploadImageAndThumbnail(
    imageFile: any,
    thumbnailFile: any,
    category: string,
    orientation: string
  ) {
    let OriginalDownloadURL: any;
    let thumbNailDownloadURL: any;
    // Upload the thumbnail file.
    // const thumbnailFilePath = `images/thumbnails/photography/${imageFile.name}`;
    // const thumbnailFileRef = this.storage.ref(thumbnailFilePath);
    // thumbnailFileRef
    //   .put(imageFile.name, thumbnailFile)
    //   .then((snapshot: any) => {
    //     thumbnailFileRef.getDownloadURL().subscribe((res) => {
    //       thumbNailDownloadURL = res;
    // Upload the original image file.
    const OriginalFilePath = `images/photography/${imageFile.name}`;
    const imageFileRef = this.storage.ref(OriginalFilePath);
    console.log(imageFile);
    this.storage.upload(OriginalFilePath, imageFile).then((snapshot: any) => {
      snapshot.ref.getDownloadURL().then((res: any) => {
        OriginalDownloadURL = res;
        // Create a new object to store the image information.
        const imageInfo = {
          name: imageFile.name,
          OriginalFilePath: OriginalFilePath,
          OriginalImageUrl: OriginalDownloadURL,
          thumbnailFileUrl: thumbnailFile,
          category: category,
          orientation: orientation,
        };

        this.photographyRef?.push(imageInfo);
        console.log('here');
      });
    });
    //   });
    // });
  }

  downloadOriginal(imageObj: any) {
    // window.open(imageObj.OriginalImageUrl);
    fetch(imageObj.OriginalImageUrl)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'my-image.jpg';
        link.click();
      });
  }
}
