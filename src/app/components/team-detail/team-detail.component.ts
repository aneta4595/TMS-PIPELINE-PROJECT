import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute, Params } from '@angular/router';
import { TeamWihProjectsQueryModel } from 'src/app/query-models/team-wih-projects.query-model';
import { TeamModel } from 'src/app/models/team.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailComponent {
  readonly teamsList$: Observable<TeamWihProjectsQueryModel[]> = combineLatest([
    this._teamsService.getAllTeams(),
    this._activatedRoute.params,
  ]).pipe(
    map(([teams, params]: [TeamModel[], Params]) =>
      teams
        .filter((t) => t.id === params['id'])
        .map((team) => {
          return this._mapTeamsWithProjects(team);
        })
    )
  );

  constructor(
    private _teamsService: TeamsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  private _mapTeamsWithProjects(team: TeamModel): TeamWihProjectsQueryModel {
    return {
      name: team.name,
      description: team.description,
      projects: team.projects,
      members: team.members.map((m) => {
        return {
          avatarUrl: m.avatarUrl,
          redirectUrl: `/employees/${m.id}`,
        };
      }),
    };
  }
}
