import { Component, HostListener, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataShareService } from 'src/app/shared/services/data-share.service';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-slide-up',
  templateUrl: './slide-up.component.html',
  styleUrls: ['./slide-up.component.scss'],
})
export class SlideUpComponent {
  isDarkMode: boolean = false;
  imageSize: boolean = false;
  imageResolution: string = 'original';
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    event.preventDefault();
  }
  constructor(
    private themeService: ThemeService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SlideUpComponent>,
    private dataService: DataShareService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.themeService.isDarkMode.subscribe(
      (mode: boolean) => (this.isDarkMode = mode)
    );
  }

  downloadImage() {
    let noticeAgreed = localStorage.getItem('noticeAgreed');
    if (noticeAgreed) {
      this.dataService.downloadOriginal(this.data);
      return;
    }
    this.showNotice();
  }

  showNotice() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      height: '300px',
      width: '60%',
      enterAnimationDuration: '300ms',
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  displayOriginalImage() {
    this.imageSize = !this.imageSize;
    this.imageResolution = this.imageSize ? 'original' : 'low';
  }
}
