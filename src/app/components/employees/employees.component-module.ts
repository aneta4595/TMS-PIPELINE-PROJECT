import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { PlaceholderImgPipeModule } from 'src/app/pipes/placeholder-img.pipe-module';

@NgModule({
  imports: [
    PresentationComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PlaceholderImgPipeModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
