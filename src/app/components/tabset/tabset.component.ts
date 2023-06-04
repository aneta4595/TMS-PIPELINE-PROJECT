import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-tabset',
  templateUrl: './tabset.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetComponent {
  @Input() navTitle!: string;
}
