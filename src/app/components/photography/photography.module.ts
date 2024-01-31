import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyRoutingModule } from './photography-routing.module';
import { PhotographyComponent } from './photography.component';

@NgModule({
  declarations: [PhotographyComponent],
  imports: [CommonModule, PhotographyRoutingModule],
})
export class PhotographyModule {}
