import { MemberQueryModel } from './member.query-model';

export interface TaskQueryModel {
  readonly name: string;
  readonly dueDate: number;
  readonly members: MemberQueryModel[];
  readonly maxNumberOfItems: number;
  readonly statusItems: number;
}
