import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'howManyDays' })
export class HowManyDaysPipe implements PipeTransform {
  transform(value: string): number | string {
    const today = new Date();
    const dueDate = new Date(value);

    if (dueDate < today || dueDate === today) {
      return `Time's up!`;
    }

    return Math.floor(
      (Date.UTC(dueDate.getFullYear(), dueDate.getMonth(), dueDate.getDate()) -
        Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  }
}
