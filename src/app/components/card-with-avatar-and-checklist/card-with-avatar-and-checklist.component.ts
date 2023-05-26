import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-with-avatar-and-checklist',
  templateUrl: './card-with-avatar-and-checklist.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardWithAvatarAndChecklistComponent {
  @Input() avatar?: string;
  @Input() checklist?: string[];
  @Input() name?: string;
  @Input() dueDate?: number;
}
