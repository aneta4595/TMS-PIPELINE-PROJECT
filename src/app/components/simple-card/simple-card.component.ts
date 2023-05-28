import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-simple-card',
  styleUrls: ['./simple-card.component.scss'],
  templateUrl: './simple-card.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardComponent {
  @Input() title?: string;
  @Input() subtitle?: string | number;
  @Input() id?: string;
}
