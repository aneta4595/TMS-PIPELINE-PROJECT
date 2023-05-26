export interface TaskQueryModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly assigneeIds: string[];
  readonly checklist: string[];
  readonly projectId: string;
  readonly id: string;
  readonly members: {
    id: string;
    firstName: string;
    lastName: string;
    position: string;
    avatarUrl: string;
  }[];
}
