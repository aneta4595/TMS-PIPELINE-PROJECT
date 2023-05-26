import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { ChecklistModel } from '../models/checklist.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private _httpClient: HttpClient) {}

  getAllTasks(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/tasks'
    );
  }

  checklist(): Observable<ChecklistModel[]> {
    return this._httpClient.get<ChecklistModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items'
    );
  }
}
