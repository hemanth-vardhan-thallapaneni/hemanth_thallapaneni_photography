import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub.component';
import { SoftwareDetailComponent } from '../software-detail/software-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HubComponent
  },
  {
    path: ':id', // Matches /software/:id
    component: SoftwareDetailComponent
  },
  {
    path: ':id/:subpage', // Matches /software/:id/:subpage
    component: SoftwareDetailComponent // Can be enhanced later to handle subpages
  }
];

@NgModule({
  declarations: [HubComponent, SoftwareDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HubModule { }
