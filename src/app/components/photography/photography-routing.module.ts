import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographyComponent } from './photography.component';

const routes: Routes = [{ path: '', component: PhotographyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotographyRoutingModule {}
