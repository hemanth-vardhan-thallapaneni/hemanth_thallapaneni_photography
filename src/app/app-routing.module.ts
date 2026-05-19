import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'photography',
    loadChildren: () =>
      import('./components/hub/hub.module').then((m) => m.HubModule),
  },
  {
    path: 'software',
    loadChildren: () =>
      import('./components/hub/hub.module').then((m) => m.HubModule),
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./components/hub/hub.module').then((m) => m.HubModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
