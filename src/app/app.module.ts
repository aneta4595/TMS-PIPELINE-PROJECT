import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PresentationComponentModule } from './components/presentation/presentation.component-module';
import { SimpleCardComponentModule } from './components/simple-card/simple-card.component-module';
import { TeamsPageComponentModule } from './components/teams-page/teams-page.component-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { NavigationComponentModule } from './components/navigation/navigation.component-module';
import { EmployeeDetailComponentModule } from './components/employee-detail/employee-detail.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PresentationComponentModule,
    SimpleCardComponentModule,
    HomePageComponentModule,
    NavigationComponentModule,
    EmployeeDetailComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
