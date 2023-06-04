import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-card-presentation',
  templateUrl: './card-presentation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPresentationComponent {
  @Input() titleOfPage!: string;
  @Input() subtitleOfPage!: string;
}
