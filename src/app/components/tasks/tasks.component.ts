import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TasksService } from '../../services/tasks.service';
import { EmployeesService } from '../../services/employees.service';
import { MemberQueryModel } from 'src/app/query-models/member.query-model';
import { TaskQueryModel } from 'src/app/query-models/task.query-model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TaskModel } from 'src/app/models/task.model';
import { ChecklistModel } from 'src/app/models/checklist.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  readonly tasksList$: Observable<TaskQueryModel[] | undefined> = combineLatest(
    [
      this._tasksService.getAllTasks(),
      this._employeesService.getAllEmployees(),
      this._tasksService.checklist(),
    ]
  ).pipe(
    map(
      ([tasks, employees, checkList]: [
        TaskModel[],
        EmployeeModel[],
        ChecklistModel[]
      ]) => {
        return this._mapToTaskQuery(employees, tasks, checkList);
      }
    )
  );

  constructor(
    private _tasksService: TasksService,
    private _employeesService: EmployeesService
  ) {}

  private _mapToTaskQuery(
    employees: EmployeeModel[],
    tasks: TaskModel[],
    checkList: ChecklistModel[]
  ): TaskQueryModel[] {
    const statusItemMap = checkList.reduce(
      (a, c) => ({ ...a, [c.id]: c.isDone }),

      {} as Record<string, boolean>
    );

    const membersMap = employees.reduce(
      (a, c) => ({
        ...a,
        [c.id]: {
          avatarUrl: c.avatarUrl,
          redirectUrl: `/employees/${c.id}`,
          fullName: c.firstName + ' ' + c.lastName,
        },
      }),
      {} as Record<string, MemberQueryModel>
    );
    return tasks.map((t) => {
      return {
        name: t.name,
        dueDate: t.dueDate,
        members: t.assigneeIds.map((a) => membersMap[a]),
        maxNumberOfItems: t.checkList.length,
        statusItems: t.checkList.map((c) => statusItemMap[c]).filter((c) => c)
          .length,
      };
    });
  }
}
