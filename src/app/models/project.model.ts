export interface ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly startDate: string;
  readonly dueDate: string;
  readonly visibility: string;
  readonly percentage: number;
  readonly assignees: [
    {
      id: string;
      firstName: string;
      lastName: string;
      position: string;
      avatarUrl: string;
    }
  ];
}
