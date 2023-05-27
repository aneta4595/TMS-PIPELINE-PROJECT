import { NgModule } from '@angular/core';
import { AvatarCardComponent } from './avatar-card.component';
import { PlaceholderImgPipeModule } from 'src/app/pipes/placeholder-img.pipe-module';

@NgModule({
  imports: [PlaceholderImgPipeModule],
  declarations: [AvatarCardComponent],
  providers: [],
  exports: [AvatarCardComponent],
})
export class AvatarCardComponentModule {}
