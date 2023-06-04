import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { SimpleCardComponentModule } from '../simple-card/simple-card.component-module';
import { PlaceholderImgPipeModule } from 'src/app/pipes/placeholder-img.pipe-module';
import { CardPresentationComponentModule } from '../card-presentation/card-presentation.component-module';

@NgModule({
  imports: [
    CardPresentationComponentModule,
    SimpleCardComponentModule,
    AvatarCardComponentModule,
    CommonModule,
    PlaceholderImgPipeModule,
  ],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageComponentModule {}
