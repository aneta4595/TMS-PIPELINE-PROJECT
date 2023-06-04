import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChecklistModel } from '../models/checklist.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CheckListService {
  constructor(private _httpClient: HttpClient) {}

  getCheckList(): Observable<ChecklistModel[]> {
    return this._httpClient.get<ChecklistModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items'
    );
  }
}
