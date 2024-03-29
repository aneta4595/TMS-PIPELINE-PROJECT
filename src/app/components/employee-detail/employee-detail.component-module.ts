import { NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';
import { CardEmployeeDetailComponentModule } from '../card-employee-detail/card-employee-detail.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { PlaceholderImgPipeModule } from '../../pipes/placeholder-img.pipe-module';
import { CursorPointerDirectiveModule } from 'src/app/directives/cursor-pointer.directive-module';
import { NavTabsComponentModule } from '../nav-tabs/nav-tabs.component-module';
import { TabContentComponentModule } from '../tab-content/tab-content.component-module';
import { CardProjectComponentModule } from '../card-project/card-project.component-module';
import { HowManyDaysPipeModule } from 'src/app/pipes/how-many-days.pipe-module';

@NgModule({
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
  imports: [
    CardEmployeeDetailComponentModule,
    CommonModule,
    AvatarListComponentModule,
    SimpleCardComponentModule,
    PlaceholderImgPipeModule,
    CursorPointerDirectiveModule,
    NavTabsComponentModule,
    TabContentComponentModule,
    CardProjectComponentModule,
    HowManyDaysPipeModule,
  ],
})
export class EmployeeDetailComponentModule {}
