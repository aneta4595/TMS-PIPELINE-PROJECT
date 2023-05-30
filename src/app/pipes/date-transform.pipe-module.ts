import { NgModule } from '@angular/core';
import { DateTransformPipe } from './date-transform.pipe';
import { DATE_TRANSFORM_PIPE_CONFIG } from './date-transform.config';

@NgModule({
  imports: [],
  declarations: [DateTransformPipe],
  providers: [
    {
      provide: DATE_TRANSFORM_PIPE_CONFIG,
      useValue: {
        1: 'Jan',
        2: 'Feb',
        3: 'March',
        10: 'Nov',
      },
    },
  ],
  exports: [DateTransformPipe],
})
export class DateTransformPipeModule {}
