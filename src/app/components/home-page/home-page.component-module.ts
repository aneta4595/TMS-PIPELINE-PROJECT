import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { CardComponentModule } from '../card/card.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from '../presentation/presentation.component';
import { PresentationComponentModule } from '../presentation/presentation.component-module';

@NgModule({
  imports: [
    CardComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PresentationComponentModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageComponentModule {}
