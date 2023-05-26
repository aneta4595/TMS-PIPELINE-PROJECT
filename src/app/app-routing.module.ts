import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TeamsPageComponentModule } from './components/teams-page/teams-page.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsPageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamsPageComponentModule,
    ProjectsComponentModule,
    TasksComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
