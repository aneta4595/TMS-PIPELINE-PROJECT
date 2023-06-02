import { NgModule } from '@angular/core';
import { CardWithAvatarAndChecklistComponent } from './card-with-avatar-and-checklist.component';
import { CommonModule } from '@angular/common';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar.directive-module';

@NgModule({
  imports: [CommonModule, ProgressBarDirectiveModule],
  declarations: [CardWithAvatarAndChecklistComponent],
  providers: [],
  exports: [CardWithAvatarAndChecklistComponent],
})
export class CardWithAvatarAndChecklistComponentModule {}
