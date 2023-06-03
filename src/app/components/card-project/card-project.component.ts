import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent {
  @Input() title?: string;
  @Input() dueDate?: number | string;
  @Input() completedTask?: number;
  @Input() checkListProject?: number;
}
