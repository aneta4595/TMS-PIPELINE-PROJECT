import { CheckListProjectQueryModel } from './check-list-project.query-model';
import { TeamQueryModel } from './team.query-model';

export interface EmployeeWithTeamsQueryModel {
  readonly id: string;
  readonly fullName: string;
  readonly position: string;
  readonly avatarUrl: string;
  readonly teams: TeamQueryModel[];
  readonly projects: CheckListProjectQueryModel[];
}
