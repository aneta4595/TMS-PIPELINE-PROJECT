import { MemberQueryModel } from '../query-models/member.query-model';

export interface TaskQueryModel {
  readonly name: string;
  readonly dueDate: number;
  readonly members: MemberQueryModel[];
}
