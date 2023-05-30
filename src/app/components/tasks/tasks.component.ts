import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { ChecklistModel } from '../../models/checklist.model';
import { TaskModel } from '../../models/task.model';
import { ProjectModel } from '../../models/project.model';
import { TasksService } from '../../services/tasks.service';
import { TeamsService } from '../../services/teams.service';
import { TaskQueryModel } from 'src/app/models/task-query.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  readonly tasksList$: Observable<TaskModel[]> =
    this._tasksService.getAllTasks();
  readonly checklist$: Observable<ChecklistModel[]> = combineLatest([
    this._tasksService.checklist(),
    this.tasksList$,
  ]).pipe(
    map(([check, tasks]: [ChecklistModel[], TaskModel[]]) =>
      check.filter((c) => c.id && c.isDone === true)
    )
  );

  readonly projectsList$: Observable<ProjectModel[]> =
    this._teamsService.getAllProjects();

  constructor(
    private _tasksService: TasksService,
    private _teamsService: TeamsService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
