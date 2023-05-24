import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

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

  readonly teamsList$: Observable<TeamModel[]> =
    this._teamsService.getAllTeams();

  constructor(private _teamsService: TeamsService) {}
}
