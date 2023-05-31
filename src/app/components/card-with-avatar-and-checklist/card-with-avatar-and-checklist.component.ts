import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-card-with-avatar-and-checklist',
  templateUrl: './card-with-avatar-and-checklist.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWithAvatarAndChecklistComponent {
  @Input() name?: string;
  @Input() dueDate?: number | unknown;
}
