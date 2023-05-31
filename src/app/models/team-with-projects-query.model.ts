import { MemberQueryModel } from '../query-models/member.query-model';
import { ProjectQueryModel } from './project-query.model';

export interface TeamWithProjectsQueryModel {
  readonly name: string;
  readonly description: string;
  readonly members: MemberQueryModel[];
  readonly projects: ProjectQueryModel[];
}
