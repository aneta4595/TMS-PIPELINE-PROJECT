export interface TeamModel {
  readonly name: string;
  readonly description: string;
  readonly members: {
    id: string;
    firstName: string;
    lastName: string;
    position: string;
    avatarUrl: string;
  }[];
  readonly projects: {
    id: string;
    name: string;
    description: string;
    startDate: string;
    dueDate: string;
    visibility: string;
    assignees: string[];
  }[];
  readonly id: string;
}
