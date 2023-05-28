import { NgModule } from '@angular/core';
import { TeamsPageComponent } from './teams-page.component';
import { CommonModule } from '@angular/common';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { CardsRowComponentModule } from '../cards-row/cards-row.component-module';

@NgModule({
  imports: [
    CommonModule,
    PresentationComponentModule,
    SimpleCardComponentModule,
    CardsRowComponentModule,
  ],
  declarations: [TeamsPageComponent],
  providers: [],
  exports: [TeamsPageComponent],
})
export class TeamsPageComponentModule {}
