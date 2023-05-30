import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { TestComponent } from './components/test/test.component';
import { TeamsPageComponentModule } from './components/teams-page/teams-page.component-module';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { EmployeeDetailComponentModule } from './components/employee-detail/employee-detail.component-module';
import { TeamDetailComponentModule } from './components/team-detail/team-detail.component-module';
import { TestComponentModule } from './components/test/test.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamsPageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', component: HomePageComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TeamsPageComponentModule,
    ProjectsComponentModule,
    TasksComponentModule,
    EmployeesComponentModule,
    HomePageComponentModule,
    EmployeeDetailComponentModule,
    TeamDetailComponentModule,
    TestComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
