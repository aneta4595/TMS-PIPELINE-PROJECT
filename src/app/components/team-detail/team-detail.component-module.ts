import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { CommonModule } from '@angular/common';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { TabContentComponentModule } from '../tab-content/tab-content.component-module';

@NgModule({
  imports: [
    PresentationComponentModule,
    AvatarListComponentModule,
    CommonModule,
    SimpleCardComponentModule,
    TabsetComponentModule,
    TabContentComponentModule,
  ],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent],
})
export class TeamDetailComponentModule {}
