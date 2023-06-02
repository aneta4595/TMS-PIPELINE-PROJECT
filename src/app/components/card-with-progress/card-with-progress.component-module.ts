import { NgModule } from '@angular/core';
import { CardWithProgressComponent } from './card-with-progress.component';
import { CommonModule } from '@angular/common';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar.directive-module';

@NgModule({
  imports: [CommonModule, ProgressBarDirectiveModule],
  declarations: [CardWithProgressComponent],
  providers: [],
  exports: [CardWithProgressComponent],
})
export class CardWithProgressComponentModule {}
