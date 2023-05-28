import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    PresentationComponentModule,
    AvatarListComponentModule,
    CommonModule,
  ],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent],
})
export class TeamDetailComponentModule {}
