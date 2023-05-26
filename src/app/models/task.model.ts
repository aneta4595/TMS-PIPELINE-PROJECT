export interface TaskModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly assigneeIds: string[];
  readonly checklist: string[];
  readonly projectId: string;
  readonly id: string;
}
