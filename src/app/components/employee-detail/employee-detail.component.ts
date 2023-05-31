import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { TeamModel } from '../../models/team.model';
import { EmployeesService } from '../../services/employees.service';
import { TeamsService } from '../../services/teams.service';
import { EmployeeWithTeamsQueryModel } from 'src/app/models/employee-with-teams-query.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  readonly employee$: Observable<EmployeeWithTeamsQueryModel | undefined> =
    combineLatest([
      this._employeesService.getAllEmployees(),
      this._activatedRoute.params,
      this._teamsService.getAllTeams(),
    ]).pipe(
      map(
        ([employees, params, teams]: [
          EmployeeModel[],
          Params,
          TeamModel[]
        ]) => {
          const employee: EmployeeModel | undefined = employees.find(
            (e) => e.id === params['id']
          );
          const employeeTeams = teams
            .filter((t) => t.members.some((m) => m.id === employee?.id))
            .map((team) => {
              return {
                name: team.name,
                numberOfProjects: team.projects.length,
                numberOfMembers: team.members.length,
                id: team.id,
                members: team.members.map((m) => {
                  return {
                    avatarUrl: m.avatarUrl,
                    redirectUrl: `/employees/${m.id}`,
                  };
                }),
              };
            });
          if (!employee) {
            return undefined;
          }
          return {
            id: employee.id,
            fullName: employee.firstName + ' ' + employee.lastName,
            position: employee.position,
            avatarUrl: employee.avatarUrl,
            teams: employeeTeams,
          };
        }
      )
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _teamsService: TeamsService
  ) {}
}
