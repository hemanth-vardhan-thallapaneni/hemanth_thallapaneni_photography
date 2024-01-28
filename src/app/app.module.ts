import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { DigitalArtComponent } from './components/digital-art/digital-art.component';
import { ShopComponent } from './components/shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideUpComponent } from './dynamic-components/slide-up/slide-up.component';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AboutComponent } from './components/about/about.component';
import { PopUpComponent } from './dynamic-components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PhotographyComponent,
    DigitalArtComponent,
    ShopComponent,
    SlideUpComponent,
    AboutComponent,
    PopUpComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})
export class AppModule {}
