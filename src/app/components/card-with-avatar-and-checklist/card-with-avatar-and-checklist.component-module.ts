import { NgModule } from '@angular/core';
import { CardWithAvatarAndChecklistComponent } from './card-with-avatar-and-checklist.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CardWithAvatarAndChecklistComponent],
  providers: [],
  exports: [CardWithAvatarAndChecklistComponent],
})
export class CardWithAvatarAndChecklistComponentModule {}
