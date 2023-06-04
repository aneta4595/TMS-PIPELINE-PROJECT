import { NgModule } from '@angular/core';
import { CardPresentationComponent } from './card-presentation.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CardPresentationComponent],
  providers: [],
  exports: [CardPresentationComponent],
})
export class CardPresentationComponentModule {}
