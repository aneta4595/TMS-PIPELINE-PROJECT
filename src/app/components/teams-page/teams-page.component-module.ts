import { NgModule } from '@angular/core';
import { TeamsPageComponent } from './teams-page.component';
import { CommonModule } from '@angular/common';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { CardComponentModule } from '../card/card.component-module';

@NgModule({
  imports: [CommonModule, PresentationComponentModule, CardComponentModule],
  declarations: [TeamsPageComponent],
  providers: [],
  exports: [TeamsPageComponent],
})
export class TeamsPageComponentModule {}
