import { NgModule } from '@angular/core';
import { SimpleCardComponent } from './simple-card.component';
import { CardWithProgressComponentModule } from '../card-with-progress/card-with-progress.component-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CardWithProgressComponentModule,
    RouterModule,
    CardWithProgressComponentModule,
  ],
  declarations: [SimpleCardComponent],
  providers: [],
  exports: [SimpleCardComponent],
})
export class SimpleCardComponentModule {}
