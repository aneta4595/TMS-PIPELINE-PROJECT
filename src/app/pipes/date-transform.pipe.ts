import { Inject, Pipe, PipeTransform } from '@angular/core';
import { DATE_TRANSFORM_PIPE_CONFIG } from './date-transform.config';

@Pipe({ name: 'dateTransform' })
export class DateTransformPipe implements PipeTransform {
  constructor(
    @Inject(DATE_TRANSFORM_PIPE_CONFIG) private _config: Record<number, string>
  ) {}
  transform(value: number): unknown {
    const secondsToMilliseconds = value * 1000;

    const day = new Date(secondsToMilliseconds).getUTCDate();
    const month = new Date(secondsToMilliseconds).getUTCMonth();
    const year = new Date(secondsToMilliseconds).getUTCFullYear();

    return 'Due on ' + this._config[month] + ' ' + day + ', ' + year;
  }
}
