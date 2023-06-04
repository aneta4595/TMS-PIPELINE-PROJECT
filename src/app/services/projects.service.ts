import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {}
  getAllProjects(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/projects'
    );
  }
}
