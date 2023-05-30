import { Input, NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';
import { CardEmployeeDetailComponentModule } from '../card-employee-detail/card-employee-detail.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { PlaceholderImgPipeModule } from '../../pipes/placeholder-img.pipe-module';
import { TabContentComponentModule } from '../tab-content/tab-content.component-module';
import { TabsetWithOptionsToChooseComponentModule } from '../tabset-with-options-to-choose/tabset-with-options-to-choose.component-module';

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
    TabsetWithOptionsToChooseComponentModule,
    TabContentComponentModule,
  ],
})
export class EmployeeDetailComponentModule {}
