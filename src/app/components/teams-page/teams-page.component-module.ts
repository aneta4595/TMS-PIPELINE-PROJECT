import { NgModule } from '@angular/core';
import { TeamsPageComponent } from './teams-page.component';
import { CommonModule } from '@angular/common';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';

@NgModule({
  imports: [
    CommonModule,
    PresentationComponentModule,
    SimpleCardComponentModule,
  ],
  declarations: [TeamsPageComponent],
  providers: [],
  exports: [TeamsPageComponent],
})
export class TeamsPageComponentModule {}
