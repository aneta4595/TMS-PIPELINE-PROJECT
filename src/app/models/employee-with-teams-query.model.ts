import { TeamQueryModel } from '../query-models/team.query-model';

export interface EmployeeWithTeamsQueryModel {
  readonly id: string;
  readonly fullName: string;
  readonly position: string;
  readonly avatarUrl: string;

  readonly teams: TeamQueryModel[];
}
