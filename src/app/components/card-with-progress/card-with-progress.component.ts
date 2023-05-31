import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-card-with-progress',
  styleUrls: ['./card-with-progress.component.scss'],
  templateUrl: './card-with-progress.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWithProgressComponent {
  @Input() title?: string;
  @Input() subtitle?: string | null;
  @Input() value?: number;
}
