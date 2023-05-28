import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { ChecklistModel } from '../../models/checklist.model';
import { TaskModel } from '../../models/task.model';
import { TasksService } from '../../services/tasks.service';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  readonly checklist$: Observable<ChecklistModel[]> =
    this._tasksService.checklist();
  readonly tasksList$: Observable<TaskModel[]> =
    this._tasksService.getAllTasks();

  constructor(
    private _tasksService: TasksService,
    private _teamsService: TeamsService
  ) {}
}
