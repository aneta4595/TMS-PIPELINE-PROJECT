import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-presentation',
  styleUrls: ['./presentation.component.scss'],
  templateUrl: './presentation.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {
  @Input() titleOfPage?: string;
  @Input() subtitleOfPage?: string;
}
