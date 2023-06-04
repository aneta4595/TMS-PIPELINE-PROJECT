import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-avatar-card',
  templateUrl: './avatar-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCardComponent {
  @Input() avatar?: string | null;
  @Input() fullName!: string;
  @Input() position!: string;
  @Input() redirectUrl!: string;
}
