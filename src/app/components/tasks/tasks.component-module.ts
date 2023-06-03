import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { CardWithAvatarAndChecklistComponentModule } from '../card-with-avatar-and-checklist/card-with-avatar-and-checklist.component-module';
import { CommonModule } from '@angular/common';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { DateTransformPipeModule } from 'src/app/pipes/date-transform.pipe-module';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar.directive-module';
import { CursorPointerDirectiveModule } from 'src/app/directives/cursor-pointer.directive-module';

@NgModule({
  imports: [
    PresentationComponentModule,
    CardWithAvatarAndChecklistComponentModule,
    CommonModule,
    AvatarListComponentModule,
    DateTransformPipeModule,
    ProgressBarDirectiveModule,
    CursorPointerDirectiveModule,
  ],
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
})
export class TasksComponentModule {}
