import { MemberQueryModel } from '../query-models/member.query-model';
import { ProjectQueryModel } from './project.query-model';

export interface TeamQueryModel {
  readonly name: string;
  readonly numberOfProjects: number;
  readonly numberOfMembers: number;
  readonly id: string;
  readonly members: MemberQueryModel[];
}
