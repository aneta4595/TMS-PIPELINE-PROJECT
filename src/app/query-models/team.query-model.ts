import { MemberQueryModel } from '../query-models/member.query-model';

export interface TeamQueryModel {
  name: string;
  numberOfProjects: number;
  numberOfMembers: number;
  id: string;
  members: MemberQueryModel[];
}
