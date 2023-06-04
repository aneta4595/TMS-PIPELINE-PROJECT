import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeWithTeamsQueryModel } from '../../query-models/employee-with-teams.query-model';
import { EmployeeModel } from '../../models/employee.model';
import { TeamModel } from '../../models/team.model';
import { ProjectModel } from '../../models/project.model';
import { EmployeesService } from '../../services/employees.service';
import { TeamsService } from '../../services/teams.service';
import { TasksService } from '../../services/tasks.service';
import { TeamQueryModel } from '../../query-models/team.query-model';
import { TaskModel } from 'src/app/models/task.model';
import { ChecklistModel } from 'src/app/models/checklist.model';
import { CheckListProjectQueryModel } from 'src/app/query-models/check-list-project.query-model';

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
      this._teamsService.getAllProjects(),
      this._tasksService.getAllTasks(),
      this._tasksService.checklist(),
    ]).pipe(
      map(
        ([employees, params, teams, projects, tasks, checkList]: [
          EmployeeModel[],
          Params,
          TeamModel[],
          ProjectModel[],
          TaskModel[],
          ChecklistModel[]
        ]) => {
          const employee: EmployeeModel | undefined = employees.find(
            (e) => e.id === params['id']
          );
          const task: TaskModel | undefined = tasks.find((t) => t.projectId);
          const project: ProjectModel | undefined = projects.find(
            (p) => p.id === task?.projectId
          );

          const employeeTeams = teams
            .filter((t) => t.members.some((m) => m.id === employee?.id))
            .map((team) => {
              return this._mapToTeam(team);
            });
          if (!employee) {
            return undefined;
          }

          const employeeProjects = projects
            .filter((p) => p.assignees.some((a) => a.id === employee.id))
            .map((project) => {
              return this._mapToProject(project, tasks, checkList);
            });

          return {
            id: employee.id,
            fullName: employee.firstName + ' ' + employee.lastName,
            position: employee.position,
            avatarUrl: employee.avatarUrl,
            teams: employeeTeams,
            projects: employeeProjects,
          };
        }
      )
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeesService: EmployeesService,
    private _teamsService: TeamsService,
    private _tasksService: TasksService
  ) {}
  private _mapToTeam(team: TeamModel): TeamQueryModel {
    return {
      name: team.name,
      numberOfProjects: team.projects.length,
      numberOfMembers: team.members.length,
      id: team.id,
      members: team.members.map((m) => {
        return {
          avatarUrl: m.avatarUrl,
          redirectUrl: `/employees/${m.id}`,
          fullName: m.firstName + ' ' + m.lastName,
        };
      }),
    };
  }
  private _mapToProject(
    project: ProjectModel,
    tasks: TaskModel[],
    checkList: ChecklistModel[]
  ): CheckListProjectQueryModel {
    const completeTaskMap = checkList.reduce(
      (a, c) => ({ ...a, [c.id]: c.isDone }),
      {} as Record<string, boolean>
    );

    return {
      name: project.name,
      dueDate: project.dueDate,
      checkListProject: tasks
        .filter((task) => task.projectId === project.id)
        .flatMap((tasks) => tasks.checkList).length,
      completedTask: tasks
        .filter((t) => t.projectId === project.id)
        .flatMap((tasks) => tasks.checkList)
        .map((c) => completeTaskMap[c])
        .filter((c) => c).length,
    };
  }
}
