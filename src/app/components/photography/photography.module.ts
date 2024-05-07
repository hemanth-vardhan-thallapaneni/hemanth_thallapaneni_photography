import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographyRoutingModule } from './photography-routing.module';
import { PhotographyComponent } from './photography.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PhotographyComponent],
  imports: [CommonModule, PhotographyRoutingModule, FormsModule],
})
export class PhotographyModule {}
