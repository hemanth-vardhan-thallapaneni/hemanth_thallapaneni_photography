import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photography',
    loadChildren: () =>
      import('./components/photography/photography.module').then(
        (m) => m.PhotographyModule
      ),
  },
  {
    path: 'digital_art',
    loadChildren: () =>
      import('./components/digital-art/digital-art.module').then(
        (m) => m.DigitalArtModule
      ),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./components/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./components/about/about.module').then((m) => m.AboutModule),
  },
  { path: '', redirectTo: 'photography', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
