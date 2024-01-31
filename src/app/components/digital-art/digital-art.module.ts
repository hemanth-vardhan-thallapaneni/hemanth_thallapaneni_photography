import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitalArtRoutingModule } from './digital-art-routing.module';
import { DigitalArtComponent } from './digital-art.component';

@NgModule({
  declarations: [DigitalArtComponent],
  imports: [CommonModule, DigitalArtRoutingModule],
})
export class DigitalArtModule {}
