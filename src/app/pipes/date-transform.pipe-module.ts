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
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec',
      },
    },
  ],
  exports: [DateTransformPipe],
})
export class DateTransformPipeModule {}
