import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

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
  @Input() value!: number;
}
