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

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  readonly employeesList$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAllEmployees(),
    this._activatedRoute.params,
  ]).pipe(
    map(([employees, params]) => employees.filter((e) => e.id === params['id']))
  );

  readonly teamsList$: Observable<TeamModel[]> = combineLatest([
    this._teamsService.getAllTeams(),
    this._employeesService.getAllEmployees(),
  ]).pipe(
    map(([teams, employees]) =>
      teams.filter((t) =>
        t.members
          .filter((m) => m.id.includes(t.id)) //  <-- wyświetelnie awatarów we właściwym teamie
          .map((employees) => employees.id)
          .includes(t.id)
      )
    )
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _teamsService: TeamsService
  ) {}
}
