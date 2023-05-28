import { Input, NgModule } from '@angular/core';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CommonModule } from '@angular/common';
import { CardEmployeeDetailComponentModule } from '../card-employee-detail/card-employee-detail.component-module';
import { TabsetComponentModule } from '../tabset/tabset.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';

@NgModule({
  imports: [
    CardEmployeeDetailComponentModule,
    CommonModule,
    TabsetComponentModule,
    AvatarListComponentModule,
    SimpleCardComponentModule,
  ],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
