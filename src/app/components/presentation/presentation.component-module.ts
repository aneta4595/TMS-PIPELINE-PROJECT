import { NgModule } from '@angular/core';
import { PresentationComponent } from './presentation.component';
import { CommonModule } from '@angular/common';
import { CardComponentModule } from '../card/card.component-module';

@NgModule({
  imports: [CommonModule, CardComponentModule],
  declarations: [PresentationComponent],
  providers: [],
  exports: [PresentationComponent],
})
export class PresentationComponentModule {}
