import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams-page',
  styleUrls: ['./teams-page.component.scss'],
  templateUrl: './teams-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsPageComponent {
  readonly teamsList$: Observable<TeamModel[]> =
    this._teamsService.getAllTeams();

  constructor(private _teamsService: TeamsService) {}
}
