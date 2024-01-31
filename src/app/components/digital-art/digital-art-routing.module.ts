import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigitalArtComponent } from './digital-art.component';

const routes: Routes = [{ path: '', component: DigitalArtComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalArtRoutingModule {}
