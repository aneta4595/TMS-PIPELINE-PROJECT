import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailComponent {
  readonly teamsList$: Observable<TeamModel[]> = combineLatest([
    this._teamsService.getAllTeams(),
    this._activatedRoute.params,
  ]).pipe(map(([teams, params]) => teams.filter((t) => t.id === params['id'])));

  constructor(
    private _teamsService: TeamsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
