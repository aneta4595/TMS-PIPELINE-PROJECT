import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-employee-detail',
  templateUrl: './card-employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEmployeeDetailComponent {
  @Input() name?: string;
  @Input() position?: string;
  @Input() avatarUrl?: string;
}
