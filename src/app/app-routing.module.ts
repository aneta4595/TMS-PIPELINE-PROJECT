import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { TeamsPageComponentModule } from './components/teams-page/teams-page.component-module';

const routes: Routes = [{ path: 'teams', component: TeamsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamsPageComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
