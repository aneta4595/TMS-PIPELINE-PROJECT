import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MemberViewModel } from 'src/app/view-models/member.view-model';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarListComponent {
  @Input() avatars!: MemberViewModel[];
}
