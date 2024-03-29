import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { CommonModule } from '@angular/common';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { CursorPointerDirectiveModule } from 'src/app/directives/cursor-pointer.directive-module';
import { RouterModule } from '@angular/router';
import { CardPresentationComponentModule } from '../card-presentation/card-presentation.component-module';

@NgModule({
  imports: [
    CardPresentationComponentModule,
    AvatarListComponentModule,
    CommonModule,
    SimpleCardComponentModule,
    TabsetComponentModule,
    CursorPointerDirectiveModule,
    RouterModule,
  ],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent],
})
export class TeamDetailComponentModule {}
