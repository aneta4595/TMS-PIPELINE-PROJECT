import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [PresentationComponent],
  providers: [],
  exports: [PresentationComponent],
})
export class PresentationComponentModule {}
