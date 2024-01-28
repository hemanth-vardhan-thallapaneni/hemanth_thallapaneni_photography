import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { SlideUpComponent } from 'src/app/dynamic-components/slide-up/slide-up.component';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { DataShareService } from 'src/app/shared/services/data-share.service';
import {
  fadeInOnEnterAnimation,
  fadeInUpBigAnimation,
  fadeOutOnLeaveAnimation,
  flipAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    flipAnimation(),
    fadeInUpBigAnimation(),
  ],
})
export class PhotographyComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private themeService: ThemeService,
    private dataSharedSerivce: DataShareService
  ) {
    this.themeService.isDarkMode.subscribe(
      (mode: boolean) => (this.isDarkMode = mode)
    );
  }
  loadImages: any[] = [];
  isDarkMode: boolean = false;
  currentCount: number = 0;
  imagesPerColumn: number = 0;
  selectedFile: any;
  category: any;
  orientation: any;
  imagesLoaded: boolean = false;

  ngOnInit() {
    this.getImages();
  }

  imageClicked(imageObj: any) {
    const dialogRef = this.dialog.open(SlideUpComponent, {
      data: imageObj,
      minHeight: '75vh',
      minWidth: '100vw',
      enterAnimationDuration: '300ms',
      position: { bottom: '0px' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  getImages() {
    this.dataSharedSerivce.getAllPhotos().subscribe((res: any) => {
      res.forEach((imageObj: any) => {
        // setTimeout(() => {
        this.loadImages.push(imageObj);
        // }, 1500);
      });
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }

  uploadImages(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadToFirebase(event: any) {
    this.dataSharedSerivce.uploadPhotos(
      this.selectedFile,
      this.category,
      this.orientation
    );
  }
}
