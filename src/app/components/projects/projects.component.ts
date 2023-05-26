import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';
import { ProjectModel } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly teamProjects$: Observable<TeamModel[]> =
    this._teamsService.getAllTeams();
  readonly projectsList$: Observable<ProjectModel[]> =
    this._teamsService.getAllProjects();

  constructor(private _teamsService: TeamsService) {}
}
