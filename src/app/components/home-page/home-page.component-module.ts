import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { PresentationComponentModule } from '../presentation/presentation.component-module';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';

@NgModule({
  imports: [
    SimpleCardComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PresentationComponentModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageComponentModule {}
