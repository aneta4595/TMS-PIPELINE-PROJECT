import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamWithProjectsQueryModel } from 'src/app/models/team-with-projects-query.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailComponent {
  readonly teamsList$: Observable<TeamWithProjectsQueryModel[]> = combineLatest(
    [this._teamsService.getAllTeams(), this._activatedRoute.params]
  ).pipe(
    map(([teams, params]) =>
      teams
        .filter((t) => t.id === params['id'])
        .map((team) => {
          return {
            name: team.name,
            description: team.description,
            projects: team.projects,
            members: team.members.map((m) => {
              return {
                avatarUrl: m.avatarUrl,
                redirectUrl: m.avatarUrl,
              };
            }),
          };
        })
    )
  );

  constructor(
    private _teamsService: TeamsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
