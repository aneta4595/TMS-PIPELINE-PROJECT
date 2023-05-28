import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { PlaceholderImgPipeModule } from 'src/app/pipes/placeholder-img.pipe-module';
import { CardsRowComponentModule } from '../cards-row/cards-row.component-module';

@NgModule({
  imports: [
    PresentationComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PlaceholderImgPipeModule,
    CardsRowComponentModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
