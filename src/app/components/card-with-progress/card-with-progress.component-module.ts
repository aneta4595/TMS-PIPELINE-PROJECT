import { NgModule } from '@angular/core';
import { CardWithProgressComponent } from './card-with-progress.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CardWithProgressComponent],
  providers: [],
  exports: [CardWithProgressComponent],
})
export class CardWithProgressComponentModule {}
