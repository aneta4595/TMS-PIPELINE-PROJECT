import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CardWithProgressComponentModule } from '../card-with-progress/card-with-progress.component-module';

@NgModule({
  imports: [CardWithProgressComponentModule],
  declarations: [CardComponent],
  providers: [],
  exports: [CardComponent],
})
export class CardComponentModule {}
