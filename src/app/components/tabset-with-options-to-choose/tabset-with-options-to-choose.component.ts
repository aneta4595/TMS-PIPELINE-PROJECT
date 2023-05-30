import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-tabset-with-options',
  templateUrl: './tabset-with-options-to-choose.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsetWithOptionsToChooseComponent {
  @Input() optionOne?: string;
  @Input() optionTwo?: string;
}
