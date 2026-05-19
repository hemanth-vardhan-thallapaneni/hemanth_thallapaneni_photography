import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideUpComponent } from './dynamic-components/slide-up/slide-up.component';
import { FormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { PopUpComponent } from './dynamic-components/pop-up/pop-up.component';
import { SideMenuListComponent } from './dynamic-components/side-menu-list/side-menu-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SlideUpComponent,
    PopUpComponent,
    SideMenuListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
  ],
  providers: [
    NgxImageCompressService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
