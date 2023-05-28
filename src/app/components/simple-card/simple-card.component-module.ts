import { NgModule } from '@angular/core';
import { SimpleCardComponent } from './simple-card.component';
import { CardWithProgressComponentModule } from '../card-with-progress/card-with-progress.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CardWithProgressComponentModule,
    AvatarListComponentModule,
    RouterModule,
  ],
  declarations: [SimpleCardComponent],
  providers: [],
  exports: [SimpleCardComponent],
})
export class SimpleCardComponentModule {}
