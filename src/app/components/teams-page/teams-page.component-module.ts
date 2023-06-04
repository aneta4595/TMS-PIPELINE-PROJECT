import { NgModule } from '@angular/core';
import { TeamsPageComponent } from './teams-page.component';
import { CommonModule } from '@angular/common';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { CardPresentationComponentModule } from '../card-presentation/card-presentation.component-module';

@NgModule({
  imports: [
    CommonModule,
    CardPresentationComponentModule,
    SimpleCardComponentModule,
  ],
  declarations: [TeamsPageComponent],
  providers: [],
  exports: [TeamsPageComponent],
})
export class TeamsPageComponentModule {}
