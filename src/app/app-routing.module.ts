import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DigitalArtComponent } from './components/digital-art/digital-art.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { ShopComponent } from './components/shop/shop.component';

const routes: Routes = [
  { path: '', component: PhotographyComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'digital_art', component: DigitalArtComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
