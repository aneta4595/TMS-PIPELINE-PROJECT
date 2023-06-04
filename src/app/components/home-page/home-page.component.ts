import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  readonly teamsList$: Observable<TeamModel[]> =
    this._teamsService.getAllTeams();
  readonly employeesList$: Observable<EmployeeModel[]> =
    this._employeesService.getAllEmployees();

  constructor(
    private _teamsService: TeamsService,
    private _employeesService: EmployeesService
  ) {}
}
