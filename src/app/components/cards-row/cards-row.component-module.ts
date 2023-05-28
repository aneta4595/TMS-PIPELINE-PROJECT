import { NgModule } from '@angular/core';
import { CardsRowComponent } from './cards-row.component';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';

@NgModule({
  imports: [SimpleCardComponentModule],
  declarations: [CardsRowComponent],
  providers: [],
  exports: [CardsRowComponent],
})
export class CardsRowComponentModule {}
