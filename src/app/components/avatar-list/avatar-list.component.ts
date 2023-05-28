import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarListComponent {
  @Input() avatarUrl?: string;
  @Input() name?: string;
  @Input() id?: string;
}
