import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { PlaceholderImgPipeModule } from 'src/app/pipes/placeholder-img.pipe-module';
import { CardPresentationComponentModule } from '../card-presentation/card-presentation.component-module';

@NgModule({
  imports: [
    CardPresentationComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PlaceholderImgPipeModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
