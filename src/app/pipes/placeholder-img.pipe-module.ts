import { NgModule } from '@angular/core';
import { PlaceholderImgPipe } from './placeholder-img.pipe';
import { PLACEHOLDER_IMAGE_SOURCE } from './placeholder-img.config';

@NgModule({
  imports: [],
  declarations: [PlaceholderImgPipe],
  providers: [
    {
      provide: PLACEHOLDER_IMAGE_SOURCE,
      useValue: '/src/assets/img/broken-image.jpg',
    },
  ],
  exports: [PlaceholderImgPipe],
})
export class PlaceholderImgPipeModule {}
