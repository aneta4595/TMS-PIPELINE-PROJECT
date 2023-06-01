import { MemberQueryModel } from './member.query-model';
import { ProjectQueryModel } from './project.query-model';

export interface TeamWihProjectsQueryModel {
  readonly name: string;
  readonly description: string;
  readonly members: MemberQueryModel[];
  readonly projects: ProjectQueryModel[];
}
